$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$requiredFiles = @(
  "index.html",
  "assets/styles.css",
  "assets/portfolio.js",
  "README.md",
  "PORTFOLIO_ROADMAP.md",
  "PORTFOLIO_STATE.md",
  "DECISIONS.md",
  "BLOCKERS.md",
  "PORTFOLIO_SCORECARD.md",
  "PORTFOLIO_CAPABILITY_LEDGER.md",
  "PROJECT_NOVELTY_MATRIX.md",
  "EXPANSION_ROADMAP.md",
  "NEXT_5_PROJECTS.md",
  "docs/PORTFOLIO_STRATEGY.md",
  "docs/RECRUITER_REVIEW.md",
  "docs/CASE_STUDIES.md",
  "tools/static-server.ps1",
  "tools/static-server.mjs",
  "tests/portfolio-browser-smoke.mjs",
  ".env.example",
  ".gitignore",
  "LICENSE"
)

$standaloneEvidence = @(
  "docs/screenshots/doctrace-standalone-desktop.png",
  "docs/screenshots/doctrace-standalone-mobile.png",
  "docs/screenshots/reviewflow-standalone-desktop.png",
  "docs/screenshots/reviewflow-standalone-mobile.png",
  "docs/screenshots/frameforge-standalone-desktop.png",
  "docs/screenshots/frameforge-standalone-mobile.png"
)

$productPages = @(
  "projects/signalops-triage/index.html",
  "projects/reviewflow-agent/index.html",
  "projects/doctrace-desk/index.html",
  "projects/frameforge-qa/index.html",
  "projects/pilotmap-ai/index.html"
)

$failures = New-Object System.Collections.Generic.List[string]

foreach ($file in $requiredFiles + $productPages + $standaloneEvidence) {
  $path = Join-Path $root $file
  if (-not (Test-Path -LiteralPath $path)) {
    $failures.Add("Missing required file: $file")
  }
}

$allText = ""
Get-ChildItem -LiteralPath $root -Recurse -File |
  Where-Object {
    $_.FullName -notmatch "\\.git\\" -and
    $_.FullName -notmatch "\\tests\\portfolio-validation\.ps1$"
  } |
  ForEach-Object {
    $content = Get-Content -LiteralPath $_.FullName -Raw
    $allText += "`n$content"
  }

$secretPatterns = @(
  "sk-[A-Za-z0-9]{20,}",
  "ghp_[A-Za-z0-9]{20,}",
  "gho_[A-Za-z0-9]{20,}",
  "BEGIN RSA PRIVATE KEY",
  "BEGIN OPENSSH PRIVATE KEY"
)

foreach ($pattern in $secretPatterns) {
  if ($allText -match $pattern) {
    $failures.Add("Potential secret pattern found: $pattern")
  }
}

foreach ($product in @("signalops", "reviewflow", "doctrace", "frameforge", "pilotmap")) {
  if ($allText -notmatch $product) {
    $failures.Add("Product id not found in portfolio text: $product")
  }
}

foreach ($phrase in @("synthetic", "Human", "deterministic", "AI-assisted")) {
  if ($allText -notmatch [Regex]::Escape($phrase)) {
    $failures.Add("Required documentation phrase missing: $phrase")
  }
}

foreach ($url in @(
  "https://jubjub-cpu.github.io/signalops-triage/",
  "https://github.com/jubjub-cpu/signalops-triage",
  "https://jubjub-cpu.github.io/doctrace-desk/",
  "https://github.com/jubjub-cpu/doctrace-desk",
  "https://github.com/jubjub-cpu/doctrace-desk/releases/tag/v1.0.0",
  "https://jubjub-cpu.github.io/reviewflow-agent/",
  "https://github.com/jubjub-cpu/reviewflow-agent",
  "https://github.com/jubjub-cpu/reviewflow-agent/releases/tag/v1.0.0",
  "https://jubjub-cpu.github.io/frameforge-inspect/",
  "https://github.com/jubjub-cpu/frameforge-inspect",
  "https://github.com/jubjub-cpu/frameforge-inspect/releases/tag/v1.0.0"
)) {
  if ($allText -notmatch [Regex]::Escape($url)) {
    $failures.Add("Standalone project URL missing: $url")
  }
}

foreach ($page in $productPages) {
  $html = Get-Content -LiteralPath (Join-Path $root $page) -Raw
  if ($html -notmatch "data-product=") {
    $failures.Add("Product page lacks data-product attribute: $page")
  }
  if ($html -notmatch "assets/styles.css" -or $html -notmatch "assets/portfolio.js") {
    $failures.Add("Product page lacks shared asset links: $page")
  }
}

$htmlFiles = Get-ChildItem -LiteralPath $root -Recurse -Filter "*.html"
foreach ($htmlFile in $htmlFiles) {
  $html = Get-Content -LiteralPath $htmlFile.FullName -Raw
  if ($html -notmatch '<meta name="viewport"') {
    $failures.Add("Missing viewport meta tag: $($htmlFile.FullName)")
  }
  if ($html -notmatch '<a class="skip-link"') {
    $failures.Add("Missing skip link: $($htmlFile.FullName)")
  }
}

if ($failures.Count -gt 0) {
  Write-Host "PORTFOLIO VALIDATION FAILED"
  foreach ($failure in $failures) {
    Write-Host "- $failure"
  }
  exit 1
}

Write-Host "PORTFOLIO VALIDATION PASSED"
Write-Host "Checked $($requiredFiles.Count) core files, $($productPages.Count) product pages, documentation phrases, and secret patterns."
