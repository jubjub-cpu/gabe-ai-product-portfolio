# Gabe - AI Digital Product Developer Portfolio

This repository contains five complete, local-first AI digital product demos that show practical workflow design, prompt-shaped reasoning, human review, synthetic data, and recruiter-friendly product documentation.

## Overview

Gabe is positioning as an AI Digital Product Developer. The work is represented honestly: Gabe directs product strategy, workflow design, prompt thinking, testing, iteration, and visual refinement while using AI-assisted coding tools for implementation.

The portfolio does not claim traditional software engineering employment, production customer usage, paid deployments, measured savings, or live AI autonomy.

## Featured Products

| Project | Business Problem | AI Capability | Demo |
| --- | --- | --- | --- |
| SignalOps Triage | Field-service teams need consistent incident triage and dispatch recommendations. | Classification, severity scoring, repeated-failure detection, human approval. | [Suite demo](https://jubjub-cpu.github.io/gabe-ai-product-portfolio/projects/signalops-triage/) / [Standalone](https://jubjub-cpu.github.io/signalops-triage/) |
| ReviewFlow Agent | Admin teams need repeatable review workflows for messy requests. | Agent-style planning, tool-like checks, draft output, approval history. | `projects/reviewflow-agent/index.html` |
| DocuTrace Desk | Reviewers need document answers with source evidence. | Search, extraction, citations, risk flags. | `projects/doctrace-desk/index.html` |
| FrameForge QA | Creative teams need cleaner briefs, revision notes, and handoffs. | Creative brief generation, visual QA, shot lists, captions, metadata. | `projects/frameforge-qa/index.html` |
| PilotMap AI | Businesses need a safe way to prioritize AI opportunities. | Suitability scoring, risk assessment, data readiness, pilot roadmap. | `projects/pilotmap-ai/index.html` |

## Business Problem

Many businesses are interested in AI but struggle to translate messy workflows into useful, reviewable products. This portfolio focuses on operations, workflow automation, document review, creative media, and AI opportunity design because those areas make Gabe's product thinking visible without inventing unsupported credentials.

## Target Users

The products are designed for operations coordinators, field-service teams, small business owners, administrative teams, analysts, creators, and hiring managers reviewing practical AI product potential.

## Product Approach

Each demo uses deterministic browser logic to simulate AI-style workflow support. This keeps the recruiter-review experience free, safe, and repeatable while still showing where AI adds value and where a human remains in control.

## Main Features

- Five runnable product demos with synthetic data.
- Central portfolio page with project cards and capability matrix.
- Human-in-the-loop review points in every product.
- Recruiter-facing documentation, roadmap, scorecard, state tracking, blocker tracking, and case studies.
- Validation script for structure, privacy markers, and required files.

## Product Walkthrough

Open `index.html` in a browser, then choose any product from the top navigation or project grid. Each product has a complete primary workflow:

1. Select or enter a synthetic input.
2. Run a deterministic AI-style analysis.
3. Review the recommendation, draft, citation, revision, or score.
4. Approve, reject, or inspect human-control notes where relevant.

## Screenshots

Current screenshots captured from the implemented local app:

![Portfolio overview](docs/screenshots/portfolio-overview.png)

![SignalOps triage](docs/screenshots/signalops-triage.png)

![DocuTrace Desk](docs/screenshots/doctrace-desk.png)

![Mobile portfolio](docs/screenshots/portfolio-mobile.png)

## Live Demo

Live portfolio:

[https://jubjub-cpu.github.io/gabe-ai-product-portfolio/](https://jubjub-cpu.github.io/gabe-ai-product-portfolio/)

Repository:

[https://github.com/jubjub-cpu/gabe-ai-product-portfolio](https://github.com/jubjub-cpu/gabe-ai-product-portfolio)

GitHub profile:

[https://github.com/jubjub-cpu](https://github.com/jubjub-cpu)

Release:

[v1.0.0 - Published AI product portfolio](https://github.com/jubjub-cpu/gabe-ai-product-portfolio/releases/tag/v1.0.0)

Standalone SignalOps:

- [Live demo](https://jubjub-cpu.github.io/signalops-triage/)
- [Repository](https://github.com/jubjub-cpu/signalops-triage)
- [v1.0.0 release](https://github.com/jubjub-cpu/signalops-triage/releases/tag/v1.0.0)

Local fallback:

```text
C:\Users\gabeb\Downloads\gabe-ai-product-portfolio\index.html
```

## AI Capability

The demos show AI product patterns without pretending a paid model is running:

- Classification and severity scoring.
- Agent-style planning and review queues.
- Document retrieval and citations.
- Creative media QA and handoff drafting.
- Responsible AI opportunity scoring.

## Human Oversight

Every product includes a clear human-control point. Recommendations are not treated as autonomous actions. Outputs are drafts, review aids, or illustrative scores until a person verifies them.

## Architecture

```text
index.html
assets/
  styles.css
  portfolio.js
projects/
  signalops-triage/index.html
  reviewflow-agent/index.html
  doctrace-desk/index.html
  frameforge-qa/index.html
  pilotmap-ai/index.html
docs/
  CASE_STUDIES.md
  PORTFOLIO_STRATEGY.md
  RECRUITER_REVIEW.md
  screenshots/
tests/
  portfolio-validation.ps1
tools/
  static-server.ps1
```

The repository is a static browser application. `portfolio.js` stores the synthetic demo data and renders the central portfolio and each product page based on the page's `data-product` attribute.

## Technology Stack

- HTML
- CSS
- Vanilla JavaScript
- PowerShell validation
- GitHub Pages compatible static structure

## Data and Privacy

All demo data is fictional or synthetic. The products do not include customer records, banking records, transaction data, employee records, private communications, medical records, credentials, or production logs.

## Local Setup

No installation is required for direct file review. A local static server is also included for browser tools that block direct file navigation.

1. Open `index.html` in a browser.
2. Open each product page from the portfolio navigation.
3. Run the validation script from PowerShell when desired.

Optional local server:

```powershell
Set-Location 'C:\Users\gabeb\Downloads\gabe-ai-product-portfolio'
powershell -ExecutionPolicy Bypass -File .\tools\static-server.ps1 -Port 4173
```

Then open:

```text
http://127.0.0.1:4173/index.html
```

## Environment Variables

No environment variables are required. `.env.example` exists only to show where optional future API keys would go. Do not commit real `.env` files.

## Testing

Run:

```powershell
Set-Location 'C:\Users\gabeb\Downloads\gabe-ai-product-portfolio'
powershell -ExecutionPolicy Bypass -File .\tests\portfolio-validation.ps1
```

Latest local validation:

- `PORTFOLIO VALIDATION PASSED`
- Browser smoke test: all five product pages rendered.
- Interaction test: SignalOps approval, ReviewFlow approval, DocuTrace citations, FrameForge revision review, and PilotMap scoring all responded.
- Mobile check: central portfolio rendered with five project cards at 390 px width.
- Browser console errors: none observed.

## Deployment

This repository is deployed to GitHub Pages:

[https://jubjub-cpu.github.io/gabe-ai-product-portfolio/](https://jubjub-cpu.github.io/gabe-ai-product-portfolio/)

The recruiter-review path does not require a backend or paid API.

## Design Decisions

- A single static portfolio repository was chosen for the first release because it is easiest to inspect, easiest to run, and does not require a Node.js build toolchain.
- Deterministic AI-style logic was chosen to avoid paid API requirements and to keep privacy claims truthful.
- Synthetic examples were used for every product category.

## Known Limitations

- The demos simulate AI behavior with deterministic browser logic.
- There is no persistent database.
- Live deployments use GitHub Pages static hosting only.

## Future Improvements

- Add optional bring-your-own-key AI integrations.
- Split the next strongest products into individual repositories after recruiter review.
- Add Playwright or browser-based visual regression checks if Node.js becomes available.
- Add live API-backed variants only when privacy, cost, and security boundaries are clear.

## AI-Assisted Development

Gabe used AI-assisted development to turn product briefs into functioning static demos, documentation, validation checks, and a portfolio narrative. Gabe's truthful role is product direction, workflow thinking, prompt engineering, testing, iteration, and visual refinement.
