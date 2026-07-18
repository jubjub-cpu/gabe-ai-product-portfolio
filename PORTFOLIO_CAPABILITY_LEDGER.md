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
| Privacy-preserving text processing | Partial | Partial | Partial | Missing | Missing | Strong via CivicCase |
| Data visualization | Strong | Partial | Partial | Partial | Strong | Strong |
| Graph analytics | Missing | Missing | Missing | Missing | Missing | Strong via TrustPath |
| Local-first processing | Strong | Strong | Strong | Strong | Strong | Strong |
| Browser-based processing | Strong | Strong | Strong | Strong | Strong | Strong |
| API design | Missing | Missing | Missing | Missing | Missing | Strong via FlowReplay |
| Event-driven automation | Missing | Missing | Strong | Missing | Missing | Strong via FlowReplay |
| Evaluation systems | Missing | Missing | Missing | Missing | Missing | Strong via EvalDeck |
| Accessibility | Strong | Strong | Strong | Strong | Partial | Strong |
| Security | Partial | Strong | Strong | Strong | Partial | Strong |
| AI security and threat modeling | Missing | Missing | Partial | Missing | Missing | Strong via TrustPath |
| Testing | Strong | Strong | Strong | Strong | Partial | Strong |
| Deployment | Strong | Strong | Strong | Strong | Partial | Strong |
| Product documentation | Strong | Strong | Strong | Strong | Partial | Strong |

## Foundation Decisions

| Project | Decision | Current evidence |
| --- | --- | --- |
| SignalOps Triage | Keep | Standalone v1.0.1 with classification, anomaly cues, recommendations, approval, browser tests, screenshots, accessibility, and deployment |
| DocuTrace Desk | Rebuilt | Standalone v1.0.0 with retrieval, cited answers, extraction, version comparison, local processing, human verification, and deployed browser tests |
| ReviewFlow Agent | Rebuilt | Standalone v1.0.1 with extracted facts, visible policy checks, blocked evidence, staged execution, two human gates, event history, export, accessibility, and deployed tests |
| FrameForge Inspect | Rebuilt substantially | Standalone v1.0.0 with actual Canvas pixel metrics, generated PNG fixtures, regional overlays, local file processing, comparison, human decision, export, and deployed tests |
| QueueCast Planner | Replaced PilotMap | Standalone v1.0.1 with trend forecasting, residual uncertainty, five scenario assumptions, weekly capacity risk, Canvas visualization, human adoption, export, accessibility, and deployed tests |

Phase Two and the first security expansion are complete. Evaluation, developer tooling, API/event systems, audio, anomaly detection, monitoring, privacy-preserving text processing, graph analytics, and AI product threat modeling all have strong released evidence.

## Phase Two Evidence

| Project | New strong capabilities | Verified evidence |
| --- | --- | --- |
| EvalDeck Studio | Formal AI-output evaluation, developer tooling, pairwise regression, slice metrics, disagreement review, release gates, JSONL import, JSON/CSV artifacts | Standalone v1.0.1 with logic, repository, local/deployed browser, privacy, accessibility, screenshot, issue, and release evidence |
| FlowReplay Console | Versioned webhook contracts, response classification, retries and backoff, deterministic failure injection, idempotency, dead-letter recovery, replay audit, local JSON artifacts | Standalone v1.0.1 with engine, repository, local/deployed browser, Canvas, privacy, accessibility, screenshot, issue, and release evidence |
| VoiceGauge Local | Real Web Audio decoding, generated WAV fixtures, PCM peak/RMS/clipping/silence/quiet-floor/pause metrics, Canvas overlays, baseline comparison, local import, human delivery gate | Standalone v1.0.1 with audio engine, fixture generation, local/deployed browser, privacy, accessibility, screenshot, issue, and release evidence |
| ColdChain Sentinel | Deterministic multivariate telemetry, persistence-aware excursions, clear hysteresis, visible spike suppression, cadence gaps, battery/signal/door evidence, Canvas timeline, policy tuning, human incident gate | Standalone v1.0.1 with engine, 188 readings, local/deployed browser, export, privacy, accessibility, screenshot, issue, and release evidence |
| CivicCase Redact | Offset-preserving direct-identifier rules, repeated-name context, reversible keep/redact decisions, manual exact-phrase spans, local import, protected preview, source fingerprint, value-free manifest, human release gate | Standalone v1.0.1 with engine, exact fixture counts, local/deployed browser, JSON/text export, privacy, accessibility, screenshot, issue, and release evidence |

## Security Expansion Evidence

| Project | New strong capabilities | Verified evidence |
| --- | --- | --- |
| TrustPath Studio | Directed architecture graphs, graph reachability, attack-path highlighting, transparent threat scoring, security-control simulation, residual-risk comparison, evidence-required launch governance, local JSON artifacts | Standalone v1.0.0 with 27 components, 34 directed flows, 10 threats, 27 controls, engine, repository, clean dependency and audit, graph Canvas, local/deployed browser, privacy, accessibility, screenshots, issues, and release evidence |
