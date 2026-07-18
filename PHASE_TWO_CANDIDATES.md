# Phase Two Candidate Selection

Scoring dimensions are business clarity, novelty versus the foundation, missing-capability value, buildability, employer signal, and responsible scope. Each is 1-5; total is 30.

| Candidate | Domain | Primary data | Interface | Key new evidence | Clarity | Novelty | Gap | Build | Employer | Scope | Total | Decision |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| EvalDeck Studio | AI quality engineering | JSONL prompts and outputs | Evaluation table and diff | Rubrics, pairwise evaluation, regression suites | 5 | 5 | 5 | 5 | 5 | 5 | 30 | Complete: v1.0.0 |
| FlowReplay Console | Developer infrastructure | Webhook events and API schemas | Event timeline and contract console | API design, replay, idempotency, failure injection | 5 | 5 | 5 | 4 | 5 | 5 | 29 | Complete: v1.0.0 |
| VoiceGauge Local | Customer-support QA | Local audio waveform | Waveform timeline | Audio processing, privacy, silence and clipping analysis | 5 | 5 | 5 | 4 | 5 | 5 | 29 | Complete: v1.0.0 |
| ColdChain Sentinel | Logistics | Sensor telemetry | Monitoring board and route view | Multivariate anomaly detection and incident evidence | 5 | 5 | 4 | 5 | 5 | 5 | 29 | Complete: v1.0.0 |
| CivicCase Redact | Public services | Case-note text spans | Split editor and review queue | Local-first privacy, PII rules, reversible review | 5 | 4 | 5 | 5 | 5 | 5 | 29 | Complete: v1.0.0 |
| GrantGuard Evidence | Nonprofit compliance | Grant documents | Evidence checklist | Compliance extraction and citations | 4 | 2 | 2 | 5 | 4 | 5 | 22 | Reject: close to DocuTrace |
| ShiftPilot Forecast | Retail staffing | Sales time series | Scenario planner | Forecasting and staffing | 5 | 1 | 1 | 5 | 4 | 4 | 20 | Reject: duplicates QueueCast |
| CreativeCaption Bench | Marketing | Images and captions | Media review grid | Caption drafting and visual checks | 4 | 2 | 2 | 4 | 4 | 4 | 20 | Reject: overlaps FrameForge |
| Incident Copilot | IT operations | Incident notes | Triage console | Classification and recommendation | 5 | 1 | 2 | 5 | 4 | 5 | 22 | Reject: duplicates SignalOps |
| VendorFlow Autopilot | Procurement | Vendor requests | Approval workflow | Agent steps and policy gates | 5 | 1 | 2 | 5 | 4 | 4 | 21 | Reject: duplicates ReviewFlow |
| Meeting Summary Desk | Productivity | Audio and transcript | Notes editor | Summarization and tasks | 3 | 2 | 3 | 4 | 3 | 3 | 18 | Reject: generic and crowded |
| Generic Chat Agent | General | Free text | Chat | Tool calls and memory | 2 | 1 | 2 | 5 | 2 | 3 | 15 | Reject: weak differentiation |

## Selected Build Order

1. **EvalDeck Studio**: developer-facing formal AI-output evaluation with dataset import, rubric scoring, pairwise comparison, regression gates, disagreement review, and export.
2. **FlowReplay Console**: API and event-driven tooling with webhook contracts, replay, idempotency, retries, dead-letter handling, and failure injection.
3. **VoiceGauge Local**: local-first audio QA with waveform decoding, silence, clipping, channel balance, annotations, and human disposition.
4. **ColdChain Sentinel**: logistics sensor anomaly detection across temperature, humidity, door state, and route checkpoints.
5. **CivicCase Redact**: privacy-preserving case-note redaction with local rules, confidence spans, reversible edits, and human release approval.

## Coverage Check

- Industries: AI quality engineering, developer infrastructure, customer support, logistics, and public services.
- Interfaces: evaluation table/diff, event console, waveform timeline, monitoring board/route view, and split redaction editor.
- Data: JSONL text pairs, event JSON, audio samples, multivariate telemetry, and case-note spans.
- Selected gaps closed: formal evaluation, developer tooling, API/event reliability, audio processing, anomaly monitoring, and local-first privacy-preserving text review all have released evidence.
- Closest-project rule: every selected product owns a different user, workflow, data type, interface, and primary technical claim.

## Security Expansion

After the ten-product health gate passed, the next selection focused on capabilities still missing from the released set.

| Candidate | New capabilities | Closest overlap | Decision |
| --- | --- | --- | --- |
| TrustPath Studio | Directed graph analytics, attack-path evidence, threat modeling, control simulation, security launch governance | FlowReplay developer tooling and EvalDeck release gates | Selected and released: distinct system-security workflow and graph interface |
| Geospatial response planner | Spatial analysis and route optimization | SignalOps operational response and QueueCast planning | Deferred: strong novelty but higher map-asset complexity |
| Constraint staff scheduler | Constraint optimization | QueueCast workforce planning | Rejected: employer story is too close |
| Compliance document checker | Policy controls and evidence | DocuTrace and CivicCase | Rejected: duplicates document and privacy workflows |

TrustPath adds graph reachability and AI product threat modeling as two new strong capabilities. Its target user, architecture input, adversarial workflow, graph Canvas, mitigation output, and security launch decision differ materially from every existing product.
