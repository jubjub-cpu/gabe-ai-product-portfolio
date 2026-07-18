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
| Audio processing | Missing | Missing | Missing | Missing | Missing | Missing |
| Semantic search | Missing | Mentioned | Missing | Missing | Missing | Mentioned |
| Forecasting | Missing | Missing | Missing | Missing | Strong | Strong |
| Anomaly detection | Partial | Missing | Missing | Missing | Missing | Partial |
| Data visualization | Strong | Partial | Partial | Partial | Strong | Strong |
| Local-first processing | Strong | Strong | Strong | Strong | Strong | Strong |
| Browser-based processing | Strong | Strong | Strong | Strong | Strong | Strong |
| API design | Missing | Missing | Missing | Missing | Missing | Missing |
| Event-driven automation | Missing | Missing | Strong | Missing | Missing | Strong |
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

The Phase Two wave must add formal evaluation, developer tooling, API design, audio, background automation, and privacy-preserving processing.

## Phase Two Evidence

| Project | New strong capabilities | Verified evidence |
| --- | --- | --- |
| EvalDeck Studio | Formal AI-output evaluation, developer tooling, pairwise regression, slice metrics, disagreement review, release gates, JSONL import, JSON/CSV artifacts | Standalone v1.0.0 with logic, repository, local browser, deployed browser, privacy, accessibility, screenshot, issue, and release evidence |
