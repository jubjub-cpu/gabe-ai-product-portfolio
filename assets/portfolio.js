(function () {
  "use strict";

  const capabilityRows = [
    "Prompt engineering",
    "AI workflow design",
    "Agent-style orchestration",
    "Document intelligence",
    "Structured extraction",
    "Retrieval",
    "Multimodal processing",
    "Audio processing",
    "Anomaly detection",
    "Monitoring and observability",
    "Privacy-preserving text processing",
    "Business-process automation",
    "Human-in-the-loop review",
    "Data visualization",
    "Testing",
    "Accessibility",
    "Security awareness",
    "AI evaluation",
    "Developer tooling",
    "API design",
    "Event-driven systems",
    "Product documentation",
    "Visual design"
  ];

  const products = {
    signalops: {
      name: "SignalOps Triage",
      shortName: "SignalOps",
      subtitle: "AI-assisted field-service incident triage",
      path: "projects/signalops-triage/index.html",
      standaloneDemo: "https://jubjub-cpu.github.io/signalops-triage/",
      standaloneRepo: "https://github.com/jubjub-cpu/signalops-triage",
      standaloneRelease: "https://github.com/jubjub-cpu/signalops-triage/releases/tag/v1.0.1",
      accent: "teal",
      problem: "ATM, kiosk, and equipment teams lose time when incident notes are inconsistent and dispatch priority is unclear.",
      user: "Operations coordinators and field-service leads",
      ai: "Classifies synthetic incidents, scores severity, spots repeated failure patterns, drafts technician recommendations, and keeps human approval before dispatch.",
      oversight: "No dispatch is marked final until the coordinator approves the recommendation.",
      features: ["Incident classification", "Severity scoring", "Dispatch review", "Audit trail"],
      capabilities: ["Prompt engineering", "AI workflow design", "Business-process automation", "Human-in-the-loop review", "Data visualization", "Security awareness", "Product documentation"]
    },
    reviewflow: {
      name: "ReviewFlow Agent",
      shortName: "ReviewFlow",
      subtitle: "Vendor exception orchestration with two human gates",
      path: "projects/reviewflow-agent/index.html",
      standaloneDemo: "https://jubjub-cpu.github.io/reviewflow-agent/",
      standaloneRepo: "https://github.com/jubjub-cpu/reviewflow-agent",
      standaloneRelease: "https://github.com/jubjub-cpu/reviewflow-agent/releases/tag/v1.0.1",
      accent: "amber",
      problem: "Procurement teams handle policy-sensitive vendor exceptions inconsistently and risk acting before required evidence is complete.",
      user: "Procurement operations managers",
      ai: "Extracts request facts, classifies the exception, runs visible policy checks, proposes a staged plan, and drafts a response without transmitting it.",
      oversight: "A policy owner approves the exception plan, then a second human approves the editable outbound response.",
      features: ["Policy checks", "Blocked evidence state", "Two approval gates", "Decision log"],
      capabilities: ["Prompt engineering", "AI workflow design", "Agent-style orchestration", "Business-process automation", "Human-in-the-loop review", "Testing", "Product documentation"]
    },
    doctrace: {
      name: "DocuTrace Desk",
      shortName: "DocuTrace",
      subtitle: "Document intelligence with citations",
      path: "projects/doctrace-desk/index.html",
      standaloneDemo: "https://jubjub-cpu.github.io/doctrace-desk/",
      standaloneRepo: "https://github.com/jubjub-cpu/doctrace-desk",
      standaloneRelease: "https://github.com/jubjub-cpu/doctrace-desk/releases/tag/v1.0.0",
      accent: "violet",
      problem: "Business reviewers spend too long comparing policies, work orders, and handoff notes without clear source evidence.",
      user: "Analysts, coordinators, and review teams",
      ai: "Searches synthetic documents, extracts structured fields, flags risk, compares versions, and cites source passages.",
      oversight: "Answers show source references so a reviewer can verify before acting.",
      features: ["Document search", "Structured extraction", "Source citations", "Risk checklist"],
      capabilities: ["Prompt engineering", "Document intelligence", "Structured extraction", "Retrieval", "Human-in-the-loop review", "Testing", "Security awareness", "Product documentation"]
    },
    frameforge: {
      name: "FrameForge QA",
      shortName: "FrameForge",
      subtitle: "Archived handoff concept; standalone pixel inspector available",
      path: "projects/frameforge-qa/index.html",
      standaloneDemo: "https://jubjub-cpu.github.io/frameforge-inspect/",
      standaloneRepo: "https://github.com/jubjub-cpu/frameforge-inspect",
      standaloneRelease: "https://github.com/jubjub-cpu/frameforge-inspect/releases/tag/v1.0.0",
      accent: "coral",
      problem: "Creative teams need an honest first pass for clipping, contrast, detail, and copy-zone risks before still-image delivery.",
      user: "Creators, small agencies, and content teams",
      ai: "The standalone rebuild analyzes actual browser Canvas pixels, calculates transparent image metrics, maps regional findings, and compares a baseline.",
      oversight: "Metrics never approve delivery; the creator explicitly approves or requests revision.",
      features: ["Canvas pixel metrics", "Regional overlays", "Local image path", "Human delivery gate"],
      capabilities: ["Prompt engineering", "AI workflow design", "Multimodal processing", "Human-in-the-loop review", "Visual design", "Product documentation", "Accessibility"]
    },
    pilotmap: {
      name: "PilotMap AI",
      shortName: "PilotMap",
      subtitle: "Archived scoring concept; QueueCast replacement available",
      path: "projects/pilotmap-ai/index.html",
      standaloneDemo: "https://jubjub-cpu.github.io/queuecast-planner/",
      standaloneRepo: "https://github.com/jubjub-cpu/queuecast-planner",
      standaloneRelease: "https://github.com/jubjub-cpu/queuecast-planner/releases/tag/v1.0.1",
      accent: "green",
      problem: "Service teams need transparent demand uncertainty and capacity tradeoffs before adopting a staffing scenario.",
      user: "Workforce planners and service operations leads",
      ai: "The QueueCast replacement exposes trend, residual uncertainty, five scenario assumptions, capacity risk, required staffing, and a quantified brief.",
      oversight: "No worker schedule or employment action is created; a workforce planner adopts or rejects each scenario.",
      features: ["Demand forecast", "Uncertainty band", "Capacity simulation", "Human planning gate"],
      capabilities: ["Prompt engineering", "AI workflow design", "Business-process automation", "Human-in-the-loop review", "Data visualization", "Security awareness", "Product documentation"]
    },
    evaldeck: {
      name: "EvalDeck Studio",
      shortName: "EvalDeck",
      subtitle: "Formal AI output evaluation and regression gating",
      path: "https://jubjub-cpu.github.io/evaldeck-studio/",
      pathLabel: "Open live demo",
      standaloneRepo: "https://github.com/jubjub-cpu/evaldeck-studio",
      standaloneRelease: "https://github.com/jubjub-cpu/evaldeck-studio/releases/tag/v1.0.1",
      accent: "violet",
      problem: "AI product teams need repeatable evidence that prompt or model changes do not hide safety, grounding, format, or slice regressions.",
      user: "AI product engineers, prompt engineers, evaluation specialists, and QA leads",
      ai: "Scores baseline and candidate outputs with four transparent rubrics, aggregates slice health and disagreement, and applies configurable regression gates.",
      oversight: "Raw scores remain visible; reasoned human overrides and the final release decision are recorded separately.",
      features: ["Pairwise rubrics", "Slice regression", "Release gates", "JSONL and CSV"],
      capabilities: ["Prompt engineering", "AI workflow design", "Human-in-the-loop review", "Data visualization", "Testing", "Accessibility", "Security awareness", "AI evaluation", "Developer tooling", "Product documentation"]
    },
    flowreplay: {
      name: "FlowReplay Console",
      shortName: "FlowReplay",
      subtitle: "Webhook contracts, retries, idempotency, and recovery",
      path: "https://jubjub-cpu.github.io/flowreplay-console/",
      pathLabel: "Open live demo",
      standaloneRepo: "https://github.com/jubjub-cpu/flowreplay-console",
      standaloneRelease: "https://github.com/jubjub-cpu/flowreplay-console/releases/tag/v1.0.1",
      accent: "amber",
      problem: "Integration teams need to separate contract drift, transient failures, duplicate events, and dead-letter recovery before replaying a webhook.",
      user: "API product engineers, integration developers, platform teams, and technical support engineers",
      ai: "Models contract preflight, response classes, three backoff policies, five failure modes, idempotent no-ops, and terminal delivery outcomes with deterministic evidence.",
      oversight: "No endpoint is contacted; a human must provide a recovery reason before the simulated replay is recorded.",
      features: ["Contract preflight", "Retry backoff", "Idempotency", "Dead-letter recovery"],
      capabilities: ["AI workflow design", "Human-in-the-loop review", "Data visualization", "Testing", "Accessibility", "Security awareness", "Developer tooling", "API design", "Event-driven systems", "Product documentation"]
    },
    voicegauge: {
      name: "VoiceGauge Local",
      shortName: "VoiceGauge",
      subtitle: "Private browser audio QA with real PCM evidence",
      path: "https://jubjub-cpu.github.io/voicegauge-local/",
      pathLabel: "Open live demo",
      standaloneRepo: "https://github.com/jubjub-cpu/voicegauge-local",
      standaloneRelease: "https://github.com/jubjub-cpu/voicegauge-local/releases/tag/v1.0.1",
      accent: "coral",
      problem: "Audio teams need an immediate first pass for clipping, level, silence, and background signal without uploading sensitive recordings.",
      user: "Content operations teams, media producers, contact-center QA leads, accessibility teams, and creators",
      ai: "Decodes actual audio locally, measures six transparent PCM metrics, maps timed waveform findings, and compares the source with a generated clear baseline.",
      oversight: "No transcription or identity inference runs; accepting audio with findings requires written human evidence.",
      features: ["Web Audio decode", "PCM metrics", "Waveform findings", "Local file boundary"],
      capabilities: ["Multimodal processing", "Audio processing", "Human-in-the-loop review", "Data visualization", "Testing", "Accessibility", "Security awareness", "Developer tooling", "Product documentation", "Visual design"]
    },
    coldchain: {
      name: "ColdChain Sentinel",
      shortName: "ColdChain",
      subtitle: "Persistence-aware telemetry anomaly monitoring",
      path: "https://jubjub-cpu.github.io/coldchain-sentinel/",
      pathLabel: "Open live demo",
      standaloneRepo: "https://github.com/jubjub-cpu/coldchain-sentinel",
      standaloneRelease: "https://github.com/jubjub-cpu/coldchain-sentinel/releases/tag/v1.0.1",
      accent: "teal",
      problem: "Cold-chain operators need to distinguish persistent cargo-condition incidents from noisy spikes while seeing when sensor evidence itself is unhealthy.",
      user: "Cold-chain operations leads, logistics coordinators, quality teams, and monitoring product teams",
      ai: "Evaluates 188 deterministic multivariate readings with explicit persistence, clear hysteresis, spike suppression, cadence, battery, signal, and door-state rules.",
      oversight: "No shipment is disposed automatically; a human operator must provide written evidence before acknowledgement or escalation.",
      features: ["Telemetry timeline", "Anomaly persistence", "Sensor health", "Human incident gate"],
      capabilities: ["AI workflow design", "Anomaly detection", "Monitoring and observability", "Human-in-the-loop review", "Data visualization", "Testing", "Accessibility", "Security awareness", "Developer tooling", "Product documentation", "Visual design"]
    },
    civiccase: {
      name: "CivicCase Redact",
      shortName: "CivicCase",
      subtitle: "Reversible local-first case-note privacy review",
      path: "https://jubjub-cpu.github.io/civiccase-redact/",
      pathLabel: "Open live demo",
      standaloneRepo: "https://github.com/jubjub-cpu/civiccase-redact",
      standaloneRelease: "https://github.com/jubjub-cpu/civiccase-redact/releases/tag/v1.0.1",
      accent: "green",
      problem: "Case-note reviewers need to find direct identifiers, resolve false positives, add missed sensitive spans, and prove human review before a protected copy is released.",
      user: "Public-service operations teams, privacy reviewers, records teams, and trust-focused product teams",
      ai: "Maps seven identifier categories to exact offsets, expands repeated-name context, exposes confidence and provenance, and creates a value-free release manifest.",
      oversight: "Every suggested span must be marked redact or keep, and a written human release decision is required before export.",
      features: ["Offset spans", "Reversible review", "Manual redaction", "Value-free manifest"],
      capabilities: ["AI workflow design", "Structured extraction", "Privacy-preserving text processing", "Human-in-the-loop review", "Testing", "Accessibility", "Security awareness", "Developer tooling", "Product documentation", "Visual design"]
    }
  };

  const signalIncidents = [
    {
      id: "ATM-2041",
      title: "Cash recycler jam after cassette refill",
      text: "Downtown ATM 2041 reports cash recycler jam after morning cassette refill. Three failed withdrawals were reversed by host. Prior jam alert happened twice in seven days. Site is open, camera working, no customer funds retained.",
      history: "Two recycler jams in seven days after refill window.",
      location: "Downtown branch vestibule",
      device: "ATM recycler"
    },
    {
      id: "KSK-118",
      title: "Kiosk screen frozen during check-in",
      text: "Clinic check-in kiosk 118 is frozen on consent screen after overnight update. Staff can still check patients in manually. No payment data is stored on the kiosk. Restart clears it for 20 minutes then it freezes again.",
      history: "New issue after software update.",
      location: "North clinic lobby",
      device: "Check-in kiosk"
    },
    {
      id: "LKR-77",
      title: "Package locker door sensor mismatch",
      text: "Locker bank 77 shows door sensor mismatch on bay 14. Customer reported no package visible. Local courier photo confirms package was moved to overflow shelf by staff. Door actuator responds slowly.",
      history: "First report for bay 14 this quarter.",
      location: "Retail parcel room",
      device: "Smart locker"
    }
  ];

  const workflowRequests = [
    "Vendor asks to change delivery window from Tuesday morning to Friday afternoon for three store sites. Contract says changes need 48 hour notice and manager approval.",
    "Facilities team wants a temporary cleaning schedule exception for a holiday weekend. The requester attached incomplete site coverage details.",
    "A software reseller sent an invoice renewal with a different seat count than last quarter and wants approval today."
  ];

  const docs = [
    {
      title: "Maintenance Service Agreement",
      type: "Agreement",
      lines: [
        "The provider responds to high-severity equipment failures within four business hours.",
        "Repeated failure means three or more similar incidents within a rolling 14 day period.",
        "Dispatch changes require approval from the operations coordinator before technician assignment.",
        "Synthetic agreement prepared for portfolio demonstration only."
      ]
    },
    {
      title: "Field Handoff Note",
      type: "Handoff",
      lines: [
        "Technician observed slow actuator response on locker bay 14 and cleaned the sensor channel.",
        "No customer payment, address, or personal identity data was present in the sample note.",
        "Recommended next step is monitor for recurrence and replace actuator if the issue repeats.",
        "Parts inventory shows two compatible actuator kits in the fictional depot."
      ]
    },
    {
      title: "AI Use Policy Draft",
      type: "Policy",
      lines: [
        "AI-generated recommendations must be reviewed by a human owner before external action.",
        "Systems must label synthetic data and avoid production customer records in demos.",
        "Business impact estimates are illustrative unless backed by measured operating data.",
        "Sensitive credentials must stay outside repositories and be configured through environment variables."
      ]
    }
  ];

  const mediaAssets = [
    {
      title: "Opening product shot",
      channel: "Short video",
      quality: 82,
      notes: "Strong framing, warm highlight, background object competes with logo area.",
      caption: "Clean product reveal with a human-paced edit and a clear end frame."
    },
    {
      title: "Before-after edit pair",
      channel: "Photo carousel",
      quality: 76,
      notes: "Useful contrast; crop should leave safer text space on mobile.",
      caption: "A simple before-after sequence that shows the practical value of refinement."
    },
    {
      title: "Service workflow b-roll",
      channel: "Landing page loop",
      quality: 68,
      notes: "Good movement but mixed color temperature; needs one visual system.",
      caption: "A workflow clip that makes the business process visible instead of abstract."
    }
  ];

  const opportunities = [
    {
      title: "Invoice exception triage",
      pain: 8,
      data: 7,
      risk: 4,
      oversight: "Finance lead approves vendor-facing messages."
    },
    {
      title: "Field service summary drafting",
      pain: 7,
      data: 8,
      risk: 3,
      oversight: "Dispatcher checks recommendations before assignment."
    },
    {
      title: "Customer complaint routing",
      pain: 6,
      data: 5,
      risk: 7,
      oversight: "Support manager reviews sentiment and escalation."
    }
  ];

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function visual(accent) {
    const tones = {
      teal: ["tone-teal", "tone-amber", "tone-green", "tone-ink"],
      amber: ["tone-amber", "tone-violet", "tone-teal", "tone-coral"],
      violet: ["tone-violet", "tone-green", "tone-amber", "tone-ink"],
      coral: ["tone-coral", "tone-amber", "tone-violet", "tone-green"],
      green: ["tone-green", "tone-teal", "tone-amber", "tone-coral"]
    };
    return `<div class="project-visual" aria-hidden="true">${tones[accent].map((tone) => `<span class="visual-cell ${tone}"></span>`).join("")}</div>`;
  }

  function renderPortfolio() {
    const grid = qs("#project-grid");
    const matrix = qs("#capability-matrix");
    if (!grid || !matrix) return;

    grid.innerHTML = Object.values(products).map((product) => `
      <article class="project-card">
        ${visual(product.accent)}
        <div>
          <h3>${product.name}</h3>
          <p>${product.subtitle}</p>
        </div>
        <div class="tag-row">
          ${product.features.map((feature) => `<span class="tag">${feature}</span>`).join("")}
        </div>
        <div class="button-row project-actions">
          <a class="button-link secondary" href="${product.path}">${product.pathLabel || "Open suite demo"}</a>
          ${product.standaloneDemo ? `<a class="button-link" href="${product.standaloneDemo}">Standalone live</a>` : ""}
          ${product.standaloneRepo ? `<a class="button-link secondary" href="${product.standaloneRepo}">Repo</a>` : ""}
        </div>
      </article>
    `).join("");

    matrix.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Capability</th>
            ${Object.values(products).map((product) => `<th>${product.shortName}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${capabilityRows.map((row) => `
            <tr>
              <td>${row}</td>
              ${Object.values(products).map((product) => `<td>${product.capabilities.includes(row) ? '<span class="status-dot" role="img" aria-label="Covered"></span>' : ''}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  function productShell(product) {
    return `
      <header class="product-topbar">
        <div>
          <p class="eyebrow">Gabe - AI Digital Product Developer</p>
          <h1>${product.name}</h1>
          <p class="subtitle">${product.subtitle}</p>
        </div>
        <nav class="topnav" aria-label="Product navigation">
          <a href="../../index.html">Portfolio</a>
          <a href="../../README.md">README</a>
          ${product.standaloneDemo ? `<a href="${product.standaloneDemo}">Standalone live</a>` : ""}
          ${product.standaloneRepo ? `<a href="${product.standaloneRepo}">Repo</a>` : ""}
          ${product.standaloneRelease ? `<a href="${product.standaloneRelease}">Release</a>` : ""}
        </nav>
      </header>
      <main id="main" class="product-shell">
        <section class="product-summary" aria-label="Product summary">
          <div class="metric-tile"><strong>Problem</strong><span>${product.problem}</span></div>
          <div class="metric-tile"><strong>User</strong><span>${product.user}</span></div>
          <div class="metric-tile"><strong>AI role</strong><span>${product.ai}</span></div>
          <div class="metric-tile"><strong>Control</strong><span>${product.oversight}</span></div>
        </section>
        <section class="product-layout">
          <div class="tool-panel" id="tool-panel"></div>
          <div class="output-panel" id="output-panel"></div>
        </section>
      </main>
    `;
  }

  function renderProduct() {
    const productId = document.body.dataset.product;
    if (!productId || !products[productId]) return;
    const root = qs("#product-root");
    root.innerHTML = productShell(products[productId]);
    if (productId === "signalops") renderSignalOps();
    if (productId === "reviewflow") renderReviewFlow();
    if (productId === "doctrace") renderDocTrace();
    if (productId === "frameforge") renderFrameForge();
    if (productId === "pilotmap") renderPilotMap();
  }

  function scoreIncident(text) {
    const lower = text.toLowerCase();
    let score = 25;
    if (lower.includes("failed") || lower.includes("jam")) score += 25;
    if (lower.includes("twice") || lower.includes("repeated") || lower.includes("recurrence")) score += 20;
    if (lower.includes("payment") || lower.includes("funds")) score += 10;
    if (lower.includes("manual") || lower.includes("monitor")) score -= 10;
    const severity = score >= 65 ? "high" : score >= 42 ? "medium" : "low";
    return { score: Math.max(10, Math.min(95, score)), severity };
  }

  function renderSignalOps(selected = signalIncidents[0], audit = ["Demo mode loaded with synthetic incidents."]) {
    const tool = qs("#tool-panel");
    const output = qs("#output-panel");
    tool.innerHTML = `
      <div class="field-stack">
        <div>
          <p class="eyebrow">Incident queue</p>
          <h2>Select a synthetic report</h2>
        </div>
        <div class="sample-list" id="incident-list">
          ${signalIncidents.map((incident) => `<button type="button" data-id="${incident.id}" aria-pressed="${incident.id === selected.id}">${incident.id}: ${incident.title}</button>`).join("")}
        </div>
        <label for="incident-text">Incident intake</label>
        <textarea id="incident-text">${selected.text}</textarea>
        <button type="button" id="classify-incident">Classify and recommend</button>
      </div>
    `;
    const result = scoreIncident(selected.text);
    output.innerHTML = incidentOutput(selected, result, audit);
    qs("#incident-list").addEventListener("click", (event) => {
      const button = event.target.closest("button[data-id]");
      if (!button) return;
      renderSignalOps(signalIncidents.find((incident) => incident.id === button.dataset.id), audit.concat(`Loaded ${button.dataset.id} from queue.`));
    });
    qs("#classify-incident").addEventListener("click", () => {
      const custom = { ...selected, text: qs("#incident-text").value };
      renderSignalOps(custom, audit.concat("Classification run completed.", "Coordinator review required before dispatch."));
    });
    output.addEventListener("click", (event) => {
      if (event.target.id === "approve-dispatch") renderSignalOps(selected, audit.concat("Dispatch recommendation approved by human reviewer."));
      if (event.target.id === "reject-dispatch") renderSignalOps(selected, audit.concat("Recommendation returned for more context."));
    });
  }

  function incidentOutput(incident, result, audit) {
    const recommendation = result.severity === "high"
      ? "Send technician with recycler or actuator kit and review recent service history before route lock."
      : result.severity === "medium"
        ? "Schedule next available technician and ask site staff to capture the error screen."
        : "Monitor remotely and keep manual fallback available.";
    const pattern = incident.history.includes("Two") ? "Repeated-failure watch triggered." : "No repeated-failure threshold yet.";
    return `
      <div class="output-grid">
        <div class="output-block">
          <h3>Classification</h3>
          <p><span class="severity ${result.severity}">${result.severity.toUpperCase()}</span></p>
          <p>${incident.device} at ${incident.location}</p>
        </div>
        <div class="output-block">
          <h3>Severity score</h3>
          <div class="meter" aria-label="Severity score ${result.score} of 100"><span style="width:${result.score}%"></span></div>
          <p>${result.score}/100 based on service impact, recurrence, and risk language.</p>
        </div>
        <div class="output-block wide">
          <h3>Recommendation</h3>
          <p>${recommendation}</p>
          <p><strong>Pattern:</strong> ${pattern}</p>
          <div class="button-row">
            <button type="button" id="approve-dispatch">Approve dispatch plan</button>
            <button type="button" class="secondary" id="reject-dispatch">Send back</button>
          </div>
        </div>
        <div class="output-block wide">
          <h3>Audit trail</h3>
          <ol>${audit.map((item) => `<li>${item}</li>`).join("")}</ol>
        </div>
      </div>
    `;
  }

  function renderReviewFlow(request = workflowRequests[0], approved = false, rejected = false) {
    const tool = qs("#tool-panel");
    const output = qs("#output-panel");
    tool.innerHTML = `
      <div class="field-stack">
        <div>
          <p class="eyebrow">Workflow intake</p>
          <h2>Review request</h2>
        </div>
        <label for="request-select">Sample request</label>
        <select id="request-select">${workflowRequests.map((item) => `<option ${item === request ? "selected" : ""}>${item}</option>`).join("")}</select>
        <label for="request-text">Request text</label>
        <textarea id="request-text">${request}</textarea>
        <button type="button" id="run-agent">Run workflow plan</button>
      </div>
    `;
    output.innerHTML = reviewFlowOutput(request, approved, rejected);
    qs("#request-select").addEventListener("change", (event) => renderReviewFlow(event.target.value));
    qs("#run-agent").addEventListener("click", () => renderReviewFlow(qs("#request-text").value));
    output.addEventListener("click", (event) => {
      if (event.target.id === "approve-workflow") renderReviewFlow(request, true, false);
      if (event.target.id === "reject-workflow") renderReviewFlow(request, false, true);
    });
  }

  function reviewFlowOutput(request, approved, rejected) {
    const needsApproval = /approval|contract|invoice|seat|change/i.test(request);
    const steps = [
      ["Classify", needsApproval ? "Approval-sensitive operations request" : "Routine administrative request"],
      ["Plan", "Check policy, identify missing fields, draft a response, hold for review"],
      ["Tool check", needsApproval ? "Policy match: approval required before external confirmation" : "Policy match: standard coordinator review"],
      ["Draft", "Prepared response with missing information, next action, and owner"]
    ];
    return `
      <div class="output-grid">
        <div class="output-block wide">
          <h3>Agent-style workflow</h3>
          <div class="stepper">
            ${steps.map((step, index) => `<div class="step"><span>${index + 1}</span><p><strong>${step[0]}:</strong> ${step[1]}</p></div>`).join("")}
          </div>
        </div>
        <div class="output-block">
          <h3>Draft output</h3>
          <p>Please confirm the site list, effective date, and approving manager. The request can move forward after review because it affects schedule or cost control.</p>
        </div>
        <div class="output-block">
          <h3>Human review</h3>
          <div class="button-row">
            <button type="button" id="approve-workflow">Approve final output</button>
            <button type="button" class="secondary" id="reject-workflow">Reject</button>
          </div>
          <p>${approved ? "Approved: final response logged." : rejected ? "Rejected: request returned for clarification." : "Waiting for reviewer decision."}</p>
        </div>
        <div class="output-block wide">
          <h3>Activity history</h3>
          <ol>
            <li>Request received.</li>
            <li>Workflow plan generated in deterministic demo mode.</li>
            <li>${approved ? "Reviewer approved final output." : rejected ? "Reviewer rejected output." : "Reviewer decision pending."}</li>
          </ol>
        </div>
      </div>
    `;
  }

  function renderDocTrace(activeDoc = docs[0], query = "approval") {
    const tool = qs("#tool-panel");
    const output = qs("#output-panel");
    tool.innerHTML = `
      <div class="field-stack">
        <div>
          <p class="eyebrow">Synthetic document set</p>
          <h2>Search and extract</h2>
        </div>
        <label for="doc-query">Question or keyword</label>
        <input id="doc-query" value="${query}">
        <button type="button" id="search-docs">Search documents</button>
      </div>
    `;
    output.innerHTML = docTraceOutput(activeDoc, query);
    output.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-doc]");
      if (button) renderDocTrace(docs[Number(button.dataset.doc)], query);
    });
    qs("#search-docs").addEventListener("click", () => renderDocTrace(activeDoc, qs("#doc-query").value));
  }

  function docTraceOutput(activeDoc, query) {
    const lower = query.toLowerCase();
    const matches = docs.flatMap((doc) => doc.lines.map((line, index) => ({ doc, line, index })).filter((item) => item.line.toLowerCase().includes(lower)));
    return `
      <div class="doc-browser">
        ${docs.map((doc, index) => `
          <article class="doc-card">
            <h3>${doc.title}</h3>
            <p>${doc.type}</p>
            <button type="button" class="secondary" data-doc="${index}">Open</button>
          </article>
        `).join("")}
      </div>
      <div class="output-grid" style="margin-top:1rem">
        <div class="output-block">
          <h3>Structured extraction</h3>
          <p><strong>Document:</strong> ${activeDoc.title}</p>
          <p><strong>Type:</strong> ${activeDoc.type}</p>
          <p><strong>Review status:</strong> Human verification required</p>
        </div>
        <div class="output-block">
          <h3>Risk flags</h3>
          <ul>
            <li>${activeDoc.lines.join(" ").toLowerCase().includes("approval") ? "Approval requirement found." : "No explicit approval rule found."}</li>
            <li>${activeDoc.lines.join(" ").toLowerCase().includes("synthetic") ? "Synthetic-data statement present." : "Synthetic-data statement missing."}</li>
          </ul>
        </div>
        <div class="output-block wide">
          <h3>Search answer with citations</h3>
          ${matches.length ? matches.map((match) => `<p class="citation">${match.line}<br>Source: ${match.doc.title}, line ${match.index + 1}</p>`).join("") : '<p class="empty-state">No direct match found. Try approval, synthetic, repeated, or actuator.</p>'}
        </div>
      </div>
    `;
  }

  function renderFrameForge(asset = mediaAssets[0], revision = "Tighten crop, preserve brand-safe text area, and normalize color temperature.") {
    const tool = qs("#tool-panel");
    const output = qs("#output-panel");
    tool.innerHTML = `
      <div class="field-stack">
        <div>
          <p class="eyebrow">Creative review</p>
          <h2>Brief builder</h2>
        </div>
        <label for="creative-goal">Campaign goal</label>
        <textarea id="creative-goal">Create a practical edit handoff for a small business product launch with clean captions, consistent visual tone, and short-form repurposing notes.</textarea>
        <label for="revision-note">Revision note</label>
        <textarea id="revision-note">${revision}</textarea>
        <button type="button" id="refresh-creative">Generate handoff</button>
      </div>
    `;
    output.innerHTML = frameForgeOutput(asset, revision);
    output.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-asset]");
      if (button) renderFrameForge(mediaAssets[Number(button.dataset.asset)], revision);
    });
    qs("#refresh-creative").addEventListener("click", () => renderFrameForge(asset, qs("#revision-note").value));
  }

  function frameForgeOutput(asset, revision) {
    return `
      <div class="asset-browser">
        ${mediaAssets.map((item, index) => `
          <article class="asset-card">
            <div class="asset-preview" aria-label="Abstract preview for ${item.title}"></div>
            <h3>${item.title}</h3>
            <p>${item.channel}</p>
            <button type="button" class="secondary" data-asset="${index}">Review</button>
          </article>
        `).join("")}
      </div>
      <div class="output-grid" style="margin-top:1rem">
        <div class="output-block">
          <h3>Visual QA score</h3>
          <div class="meter" aria-label="Visual QA score ${asset.quality} of 100"><span style="width:${asset.quality}%"></span></div>
          <p>${asset.quality}/100</p>
        </div>
        <div class="output-block">
          <h3>Caption draft</h3>
          <p>${asset.caption}</p>
        </div>
        <div class="output-block wide">
          <h3>Revision tracker</h3>
          <ul>
            <li>${asset.notes}</li>
            <li>${revision}</li>
            <li>Creator approval remains required before publishing.</li>
          </ul>
        </div>
        <div class="output-block wide">
          <h3>Shot list</h3>
          <ol>
            <li>Wide context frame with clear business setting.</li>
            <li>Close detail frame showing the product or workflow state.</li>
            <li>Human-scale review frame showing decision or handoff.</li>
            <li>Final clean end frame with safe copy space.</li>
          </ol>
        </div>
      </div>
    `;
  }

  function renderPilotMap(selected = opportunities[0], customText = "Manual triage of field service reports takes too long and creates inconsistent technician notes.") {
    const tool = qs("#tool-panel");
    const output = qs("#output-panel");
    tool.innerHTML = `
      <div class="field-stack">
        <div>
          <p class="eyebrow">Opportunity intake</p>
          <h2>Workflow assessment</h2>
        </div>
        <label for="opportunity-text">Workflow pain point</label>
        <textarea id="opportunity-text">${customText}</textarea>
        <div class="sample-list">
          ${opportunities.map((item, index) => `<button type="button" data-opportunity="${index}" aria-pressed="${item.title === selected.title}">${item.title}</button>`).join("")}
        </div>
        <button type="button" id="score-opportunity">Score opportunity</button>
      </div>
    `;
    output.innerHTML = pilotMapOutput(selected, customText);
    tool.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-opportunity]");
      if (button) renderPilotMap(opportunities[Number(button.dataset.opportunity)], customText);
      if (event.target.id === "score-opportunity") renderPilotMap(selected, qs("#opportunity-text").value);
    });
  }

  function pilotMapOutput(item, text) {
    const score = Math.round((item.pain * 3 + item.data * 2 + (10 - item.risk) * 2) / 7 * 10);
    const category = score >= 76 ? "Strong pilot candidate" : score >= 58 ? "Useful but needs scoping" : "Hold until data improves";
    return `
      <div class="output-grid">
        <div class="output-block">
          <h3>Suitability score</h3>
          <div class="meter" aria-label="Suitability score ${score} of 100"><span style="width:${score}%"></span></div>
          <p>${score}/100 - ${category}</p>
        </div>
        <div class="output-block">
          <h3>Human oversight</h3>
          <p>${item.oversight}</p>
        </div>
        <div class="output-block wide">
          <h3>Assessment</h3>
          <p><strong>Workflow:</strong> ${text}</p>
          <ul>
            <li>Pain level: ${item.pain}/10</li>
            <li>Data readiness: ${item.data}/10</li>
            <li>Risk level: ${item.risk}/10</li>
            <li>Illustrative ROI: review after a measured pilot, not before.</li>
          </ul>
        </div>
        <div class="output-block wide">
          <h3>Pilot roadmap</h3>
          <div class="timeline">
            <div class="timeline-item"><strong>Week 1:</strong> Map current workflow and define human approval points.</div>
            <div class="timeline-item"><strong>Week 2:</strong> Build deterministic demo with synthetic examples.</div>
            <div class="timeline-item"><strong>Week 3:</strong> Review outputs against real policy using anonymized or approved examples.</div>
            <div class="timeline-item"><strong>Week 4:</strong> Decide whether a live integration is justified.</div>
          </div>
        </div>
      </div>
    `;
  }

  renderPortfolio();
  renderProduct();
})();
