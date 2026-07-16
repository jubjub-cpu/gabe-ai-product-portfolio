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
  "NEXT_5_PROJECTS.md",
  "docs/PORTFOLIO_STRATEGY.md",
  "docs/RECRUITER_REVIEW.md",
  "docs/CASE_STUDIES.md",
  "tools/static-server.ps1",
  ".env.example",
  ".gitignore",
  "LICENSE"
)

$productPages = @(
  "projects/signalops-triage/index.html",
  "projects/reviewflow-agent/index.html",
  "projects/doctrace-desk/index.html",
  "projects/frameforge-qa/index.html",
  "projects/pilotmap-ai/index.html"
)

$failures = New-Object System.Collections.Generic.List[string]

foreach ($file in $requiredFiles + $productPages) {
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
