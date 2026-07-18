# Portfolio Capability Ledger

Status key: **Strong** = implemented and directly testable; **Partial** = visible but narrow; **Mentioned** = documented without meaningful implementation; **Missing** = not demonstrated.

| Capability | SignalOps standalone | DocuTrace standalone | ReviewFlow standalone | FrameForge standalone | QueueCast standalone | Portfolio status |
| --- | --- | --- | --- | --- | --- | --- |
| Prompt engineering | Partial | Partial | Partial | Partial | Partial | Partial |
| Classification | Strong | Missing | Strong | Missing | Partial | Strong |
| Structured extraction | Partial | Strong | Strong | Missing | Partial | Strong |
| Retrieval | Missing | Strong | Missing | Missing | Missing | Strong |
| Cited question answering | Missing | Strong | Missing | Missing | Missing | Strong |
| Recommendation systems | Strong | Partial | Partial | Partial | Partial | Strong |
| Agent-style orchestration | Partial | Missing | Strong | Missing | Missing | Strong |
| Human approval | Strong | Strong | Strong | Strong | Partial | Strong |
| Computer vision | Missing | Missing | Missing | Strong | Missing | Strong |
| Audio processing | Missing | Missing | Missing | Missing | Missing | Strong via VoiceGauge |
| Semantic search | Missing | Mentioned | Missing | Missing | Missing | Mentioned |
| Forecasting | Missing | Missing | Missing | Missing | Strong | Strong |
| Anomaly detection | Partial | Missing | Missing | Missing | Missing | Strong via ColdChain |
| Monitoring and observability | Partial | Missing | Partial | Missing | Partial | Strong via ColdChain |
| Data visualization | Strong | Partial | Partial | Partial | Strong | Strong |
| Local-first processing | Strong | Strong | Strong | Strong | Strong | Strong |
| Browser-based processing | Strong | Strong | Strong | Strong | Strong | Strong |
| API design | Missing | Missing | Missing | Missing | Missing | Strong via FlowReplay |
| Event-driven automation | Missing | Missing | Strong | Missing | Missing | Strong via FlowReplay |
| Evaluation systems | Missing | Missing | Missing | Missing | Missing | Strong via EvalDeck |
| Accessibility | Strong | Strong | Strong | Strong | Partial | Strong |
| Security | Partial | Strong | Strong | Strong | Partial | Strong |
| Testing | Strong | Strong | Strong | Strong | Partial | Strong |
| Deployment | Strong | Strong | Strong | Strong | Partial | Strong |
| Product documentation | Strong | Strong | Strong | Strong | Partial | Strong |

## Foundation Decisions

| Project | Decision | Current evidence |
| --- | --- | --- |
| SignalOps Triage | Keep | Standalone v1.0.0 with classification, anomaly cues, recommendations, approval, tests, screenshots, and deployment |
| DocuTrace Desk | Rebuilt | Standalone v1.0.0 with retrieval, cited answers, extraction, version comparison, local processing, human verification, and deployed browser tests |
| ReviewFlow Agent | Rebuilt | Standalone v1.0.0 with extracted facts, visible policy checks, blocked evidence, staged execution, two human gates, event history, export, and deployed tests |
| FrameForge Inspect | Rebuilt substantially | Standalone v1.0.0 with actual Canvas pixel metrics, generated PNG fixtures, regional overlays, local file processing, comparison, human decision, export, and deployed tests |
| QueueCast Planner | Replaced PilotMap | Standalone v1.0.0 with trend forecasting, residual uncertainty, five scenario assumptions, weekly capacity risk, Canvas visualization, human adoption, export, and deployed tests |

The remaining Phase Two release must add privacy-preserving text processing and reversible redaction review; evaluation, developer tooling, API/event systems, audio, anomaly detection, and monitoring gaps are now covered.

## Phase Two Evidence

| Project | New strong capabilities | Verified evidence |
| --- | --- | --- |
| EvalDeck Studio | Formal AI-output evaluation, developer tooling, pairwise regression, slice metrics, disagreement review, release gates, JSONL import, JSON/CSV artifacts | Standalone v1.0.0 with logic, repository, local browser, deployed browser, privacy, accessibility, screenshot, issue, and release evidence |
| FlowReplay Console | Versioned webhook contracts, response classification, retries and backoff, deterministic failure injection, idempotency, dead-letter recovery, replay audit, local JSON artifacts | Standalone v1.0.0 with engine, repository, local browser, deployed browser, Canvas, privacy, accessibility, screenshot, issue, and release evidence |
| VoiceGauge Local | Real Web Audio decoding, generated WAV fixtures, PCM peak/RMS/clipping/silence/quiet-floor/pause metrics, Canvas overlays, baseline comparison, local import, human delivery gate | Standalone v1.0.0 with audio engine, fixture generation, repository, local browser, deployed browser, content-type, privacy, accessibility, screenshot, issue, and release evidence |
| ColdChain Sentinel | Deterministic multivariate telemetry, persistence-aware excursions, clear hysteresis, visible spike suppression, cadence gaps, battery/signal/door evidence, Canvas timeline, policy tuning, human incident gate | Standalone v1.0.0 with engine, 188 readings, repository, local browser, deployed browser, export, privacy, accessibility, screenshot, issue, and release evidence |
