# Decisions

| Date | Project | Decision | Alternatives Considered | Reason | Consequence |
| --- | --- | --- | --- | --- | --- |
| 2026-07-16 | Portfolio | Build a single static central repository for the first five demos. | Five separate repositories immediately; improve the private Sporeborne repo. | Static central suite is easiest to review, works without paid APIs or a local Node/Git toolchain, and keeps the first release coherent. | Mature products can be split into separate repos later. |
| 2026-07-16 | Portfolio | Use deterministic demo logic instead of live AI calls. | Require OpenAI API key; mock only in docs. | Recruiters can run the portfolio without paid keys, and privacy claims remain truthful. | AI behavior is clearly labeled as simulated. |
| 2026-07-16 | Portfolio | Exclude real local documents and personal files from demos. | Reuse local downloads or screenshots. | Privacy, licensing, and professional credibility matter more than volume. | All examples are fictional and synthetic. |
| 2026-07-16 | Sporeborne | Do not include Sporeborne in the first five business-AI products. | Feature it as a creative portfolio repo. | It is private, game-focused, and outside the required categories, though it shows useful AI-assisted iteration. | Mentioned only in inventory classification. |
| 2026-07-17 | SignalOps | Split SignalOps into its own public repository. | Keep all demos only in the central portfolio. | SignalOps is the clearest operations-intelligence proof point and benefits from a focused README, release, issues, screenshots, and live demo. | It should be pinned alongside the central portfolio. |
