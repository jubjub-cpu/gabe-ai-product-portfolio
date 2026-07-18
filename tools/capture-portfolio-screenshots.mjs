import { mkdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = new URL("../", import.meta.url);
const output = new URL("../docs/screenshots/", import.meta.url);
const port = Number(process.env.PORTFOLIO_SCREENSHOT_PORT || 4186);
const baseUrl = `http://127.0.0.1:${port}/`;
const moduleTarget = process.env.PLAYWRIGHT_MODULE || "playwright";
const moduleSpecifier = /^[A-Za-z]:[\\/]/.test(moduleTarget) ? pathToFileURL(moduleTarget).href : moduleTarget;
const { chromium } = await import(moduleSpecifier);

const server = spawn(process.execPath, ["tools/static-server.mjs", "--port", String(port)], {
  cwd: root,
  stdio: "ignore"
});

async function waitForSite() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The local server may need a few short startup attempts.
    }
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  throw new Error("Portfolio screenshot server did not start");
}

let browser;
try {
  await waitForSite();
  await mkdir(output, { recursive: true });
  browser = await chromium.launch({ headless: true });

  const desktop = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
  await desktop.goto(baseUrl, { waitUntil: "networkidle" });
  await desktop.screenshot({ path: fileURLToPath(new URL("portfolio-overview.png", output)), fullPage: true });

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  await mobile.goto(baseUrl, { waitUntil: "networkidle" });
  await mobile.screenshot({ path: fileURLToPath(new URL("portfolio-mobile.png", output)), fullPage: true });

  console.log("PORTFOLIO SCREENSHOTS CAPTURED");
} finally {
  if (browser) await browser.close();
  server.kill();
}
