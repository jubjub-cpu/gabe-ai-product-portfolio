import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { pathToFileURL } from "node:url";

const root = new URL("../", import.meta.url);
const port = Number(process.env.PORTFOLIO_TEST_PORT || 4185);
const deployedBaseUrl = process.env.PORTFOLIO_BASE_URL?.trim();
const baseUrl = deployedBaseUrl ? `${deployedBaseUrl.replace(/\/$/, "")}/` : `http://127.0.0.1:${port}/`;
const moduleTarget = process.env.PLAYWRIGHT_MODULE || "playwright";
const moduleSpecifier = /^[A-Za-z]:[\\/]/.test(moduleTarget) ? pathToFileURL(moduleTarget).href : moduleTarget;
const { chromium } = await import(moduleSpecifier);

const server = deployedBaseUrl ? null : spawn(process.execPath, ["tools/static-server.mjs", "--port", String(port)], {
  cwd: root,
  stdio: ["ignore", "pipe", "pipe"]
});

async function waitForSite() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The local server may need a few short startup attempts.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Portfolio server did not become ready.");
}

let browser;
try {
  await waitForSite();
  browser = await chromium.launch({ headless: true });
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await desktop.newPage();
  const consoleErrors = [];
  const failedRequests = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("requestfailed", (request) => failedRequests.push(request.url()));
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  assert.equal(await page.locator(".project-card").count(), 8, "Eight central project cards should render");
  const docuTraceCard = page.locator(".project-card").filter({ hasText: "DocuTrace Desk" });
  assert.equal(await docuTraceCard.count(), 1, "DocuTrace card should render once");
  assert.equal(await docuTraceCard.getByRole("link", { name: "Standalone live" }).getAttribute("href"), "https://jubjub-cpu.github.io/doctrace-desk/");
  assert.equal(await docuTraceCard.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/doctrace-desk");
  const reviewFlowCard = page.locator(".project-card").filter({ hasText: "ReviewFlow Agent" });
  assert.equal(await reviewFlowCard.count(), 1, "ReviewFlow card should render once");
  assert.equal(await reviewFlowCard.getByRole("link", { name: "Standalone live" }).getAttribute("href"), "https://jubjub-cpu.github.io/reviewflow-agent/");
  assert.equal(await reviewFlowCard.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/reviewflow-agent");
  const frameForgeCard = page.locator(".project-card").filter({ hasText: "FrameForge QA" });
  assert.equal(await frameForgeCard.count(), 1, "FrameForge card should render once");
  assert.equal(await frameForgeCard.getByRole("link", { name: "Standalone live" }).getAttribute("href"), "https://jubjub-cpu.github.io/frameforge-inspect/");
  assert.equal(await frameForgeCard.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/frameforge-inspect");
  const queueCastCard = page.locator(".project-card").filter({ hasText: "PilotMap AI" });
  assert.equal(await queueCastCard.getByRole("link", { name: "Standalone live" }).getAttribute("href"), "https://jubjub-cpu.github.io/queuecast-planner/");
  assert.equal(await queueCastCard.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/queuecast-planner");
  const evalDeckCard = page.locator(".project-card").filter({ hasText: "EvalDeck Studio" });
  assert.equal(await evalDeckCard.getByRole("link", { name: "Open live demo" }).getAttribute("href"), "https://jubjub-cpu.github.io/evaldeck-studio/");
  assert.equal(await evalDeckCard.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/evaldeck-studio");
  const flowReplayCard = page.locator(".project-card").filter({ hasText: "FlowReplay Console" });
  assert.equal(await flowReplayCard.getByRole("link", { name: "Open live demo" }).getAttribute("href"), "https://jubjub-cpu.github.io/flowreplay-console/");
  assert.equal(await flowReplayCard.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/flowreplay-console");
  const voiceGaugeCard = page.locator(".project-card").filter({ hasText: "VoiceGauge Local" });
  assert.equal(await voiceGaugeCard.getByRole("link", { name: "Open live demo" }).getAttribute("href"), "https://jubjub-cpu.github.io/voicegauge-local/");
  assert.equal(await voiceGaugeCard.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/voicegauge-local");
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth), false, "Desktop portfolio should not overflow");

  await page.goto(`${baseUrl}projects/doctrace-desk/`, { waitUntil: "networkidle" });
  assert.equal(await page.getByRole("link", { name: "Standalone live" }).getAttribute("href"), "https://jubjub-cpu.github.io/doctrace-desk/");
  assert.equal(await page.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/doctrace-desk");
  assert.equal(await page.getByRole("link", { name: "Release" }).getAttribute("href"), "https://github.com/jubjub-cpu/doctrace-desk/releases/tag/v1.0.0");

  await page.goto(`${baseUrl}projects/reviewflow-agent/`, { waitUntil: "networkidle" });
  assert.equal(await page.getByRole("link", { name: "Standalone live" }).getAttribute("href"), "https://jubjub-cpu.github.io/reviewflow-agent/");
  assert.equal(await page.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/reviewflow-agent");
  assert.equal(await page.getByRole("link", { name: "Release" }).getAttribute("href"), "https://github.com/jubjub-cpu/reviewflow-agent/releases/tag/v1.0.0");

  await page.goto(`${baseUrl}projects/frameforge-qa/`, { waitUntil: "networkidle" });
  assert.equal(await page.getByRole("link", { name: "Standalone live" }).getAttribute("href"), "https://jubjub-cpu.github.io/frameforge-inspect/");
  assert.equal(await page.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/frameforge-inspect");
  assert.equal(await page.getByRole("link", { name: "Release" }).getAttribute("href"), "https://github.com/jubjub-cpu/frameforge-inspect/releases/tag/v1.0.0");

  await page.goto(`${baseUrl}projects/pilotmap-ai/`, { waitUntil: "networkidle" });
  assert.equal(await page.getByRole("link", { name: "Standalone live" }).getAttribute("href"), "https://jubjub-cpu.github.io/queuecast-planner/");
  assert.equal(await page.getByRole("link", { name: "Repo" }).getAttribute("href"), "https://github.com/jubjub-cpu/queuecast-planner");
  assert.equal(await page.getByRole("link", { name: "Release" }).getAttribute("href"), "https://github.com/jubjub-cpu/queuecast-planner/releases/tag/v1.0.0");
  assert.deepEqual(consoleErrors, [], "Desktop portfolio should have no console errors");
  assert.deepEqual(failedRequests, [], "Desktop portfolio should have no failed requests");
  await desktop.close();

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobile.newPage();
  await mobilePage.goto(baseUrl, { waitUntil: "networkidle" });
  assert.equal(await mobilePage.locator(".project-card").count(), 8, "Eight project cards should render on mobile");
  assert.equal(await mobilePage.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth), false, "Mobile portfolio should not overflow");
  await mobile.close();

  console.log("PORTFOLIO BROWSER TESTS PASSED");
  console.log(JSON.stringify({ target: deployedBaseUrl ? "deployed" : "local", cards: 8, docuTraceLinks: 3, reviewFlowLinks: 3, frameForgeLinks: 3, queueCastLinks: 3, evalDeckLinks: 2, flowReplayLinks: 2, voiceGaugeLinks: 2, desktopOverflow: false, mobileOverflow: false, consoleErrors: 0, failedRequests: 0 }));
} finally {
  if (browser) await browser.close();
  if (server) server.kill();
}
