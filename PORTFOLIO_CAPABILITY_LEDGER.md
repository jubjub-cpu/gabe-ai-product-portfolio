# Portfolio Capability Ledger

Status key: **Strong** = implemented and directly testable; **Partial** = visible but narrow; **Mentioned** = documented without meaningful implementation; **Missing** = not demonstrated.

| Capability | SignalOps standalone | DocuTrace standalone | ReviewFlow embedded | FrameForge embedded | PilotMap embedded | Portfolio status |
| --- | --- | --- | --- | --- | --- | --- |
| Prompt engineering | Partial | Partial | Partial | Partial | Partial | Partial |
| Classification | Strong | Missing | Partial | Missing | Partial | Strong |
| Structured extraction | Partial | Strong | Partial | Missing | Partial | Strong |
| Retrieval | Missing | Strong | Missing | Missing | Missing | Strong |
| Cited question answering | Missing | Strong | Missing | Missing | Missing | Strong |
| Recommendation systems | Strong | Partial | Partial | Partial | Partial | Strong |
| Agent-style orchestration | Partial | Missing | Partial | Missing | Missing | Partial |
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
| Event-driven automation | Missing | Missing | Mentioned | Missing | Missing | Mentioned |
| Evaluation systems | Missing | Missing | Missing | Missing | Missing | Missing |
| Accessibility | Strong | Strong | Partial | Partial | Partial | Strong |
| Security | Partial | Strong | Partial | Partial | Partial | Strong |
| Testing | Strong | Strong | Partial | Partial | Partial | Strong |
| Deployment | Strong | Strong | Partial | Partial | Partial | Strong |
| Product documentation | Strong | Strong | Partial | Partial | Partial | Strong |

## Foundation Decisions

| Project | Decision | Current evidence |
| --- | --- | --- |
| SignalOps Triage | Keep | Standalone v1.0.0 with classification, anomaly cues, recommendations, approval, tests, screenshots, and deployment |
| DocuTrace Desk | Rebuilt | Standalone v1.0.0 with retrieval, cited answers, extraction, version comparison, local processing, human verification, and deployed browser tests |
| ReviewFlow Agent | Rebuild next | Embedded agent-workflow concept requires a specific vendor-exception process and stronger state modeling |
| FrameForge QA | Rebuild substantially | Embedded creative concept must add actual browser image analysis and fixture-based tests |
| PilotMap AI | Replace; preserve embedded original as archive | QueueCast Planner will add forecasting, scenario simulation, uncertainty, and stronger visualization |

The Phase Two wave must add formal evaluation, developer tooling, API design, audio, background automation, and privacy-preserving processing.
