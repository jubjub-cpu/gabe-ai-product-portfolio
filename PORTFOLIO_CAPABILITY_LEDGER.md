# Portfolio Capability Ledger

Status key: **Strong** = implemented and directly testable; **Partial** = visible but narrow; **Mentioned** = documented without meaningful implementation; **Missing** = not demonstrated.

| Capability | SignalOps standalone | DocuTrace standalone | ReviewFlow standalone | FrameForge embedded | PilotMap embedded | Portfolio status |
| --- | --- | --- | --- | --- | --- | --- |
| Prompt engineering | Partial | Partial | Partial | Partial | Partial | Partial |
| Classification | Strong | Missing | Strong | Missing | Partial | Strong |
| Structured extraction | Partial | Strong | Strong | Missing | Partial | Strong |
| Retrieval | Missing | Strong | Missing | Missing | Missing | Strong |
| Cited question answering | Missing | Strong | Missing | Missing | Missing | Strong |
| Recommendation systems | Strong | Partial | Partial | Partial | Partial | Strong |
| Agent-style orchestration | Partial | Missing | Strong | Missing | Missing | Strong |
| Human approval | Strong | Strong | Strong | Partial | Partial | Strong |
| Computer vision | Missing | Missing | Missing | Mentioned | Missing | Missing |
| Audio processing | Missing | Missing | Missing | Missing | Missing | Missing |
| Semantic search | Missing | Mentioned | Missing | Missing | Missing | Mentioned |
| Forecasting | Missing | Missing | Missing | Missing | Missing | Missing |
| Anomaly detection | Partial | Missing | Missing | Missing | Missing | Partial |
| Data visualization | Strong | Partial | Partial | Partial | Strong | Strong |
| Local-first processing | Strong | Strong | Strong | Strong | Strong | Strong |
| Browser-based processing | Strong | Strong | Strong | Strong | Strong | Strong |
| API design | Missing | Missing | Missing | Missing | Missing | Missing |
| Event-driven automation | Missing | Missing | Strong | Missing | Missing | Strong |
| Evaluation systems | Missing | Missing | Missing | Missing | Missing | Missing |
| Accessibility | Strong | Strong | Strong | Partial | Partial | Strong |
| Security | Partial | Strong | Strong | Partial | Partial | Strong |
| Testing | Strong | Strong | Strong | Partial | Partial | Strong |
| Deployment | Strong | Strong | Strong | Partial | Partial | Strong |
| Product documentation | Strong | Strong | Strong | Partial | Partial | Strong |

## Foundation Decisions

| Project | Decision | Current evidence |
| --- | --- | --- |
| SignalOps Triage | Keep | Standalone v1.0.0 with classification, anomaly cues, recommendations, approval, tests, screenshots, and deployment |
| DocuTrace Desk | Rebuilt | Standalone v1.0.0 with retrieval, cited answers, extraction, version comparison, local processing, human verification, and deployed browser tests |
| ReviewFlow Agent | Rebuilt | Standalone v1.0.0 with extracted facts, visible policy checks, blocked evidence, staged execution, two human gates, event history, export, and deployed tests |
| FrameForge QA | Rebuild substantially | Embedded creative concept must add actual browser image analysis and fixture-based tests |
| PilotMap AI | Replace; preserve embedded original as archive | QueueCast Planner will add forecasting, scenario simulation, uncertainty, and stronger visualization |

The Phase Two wave must add formal evaluation, developer tooling, API design, audio, background automation, and privacy-preserving processing.
