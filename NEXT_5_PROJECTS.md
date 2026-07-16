# Next Five Projects

## 1. RouteBrief AI

### One-Sentence Product Description

AI-assisted route handoff builder for small field-service teams.

### Business Problem

Technicians often receive inconsistent notes before visits.

### Target Industry

Field service and maintenance.

### Target User

Dispatcher or service coordinator.

### Current Workflow

Dispatchers copy details from tickets, notes, and prior visits manually.

### Proposed Workflow

Import synthetic ticket, extract site constraints, generate visit brief, review, approve, and export.

### AI Capabilities

Extraction, summarization, checklist generation, risk flags.

### Human Oversight

Dispatcher approves the final brief.

### Main User Journey

Select ticket, generate brief, inspect source evidence, approve handoff.

### Recommended Stack

Static HTML/CSS/JavaScript first, optional future API mode.

### Synthetic Data Plan

Fictional service tickets and site notes.

### Free-Tier Deployment Plan

GitHub Pages.

### Required Features

Ticket intake, brief generation, source notes, approval state, exportable text.

### Non-Goals

Live routing, real customer data, technician tracking.

### Acceptance Criteria

Primary workflow works locally with synthetic data and no API key.

### Test Plan

Validate file structure and manually test brief generation.

### Portfolio Value

Extends field-service relevance.

### Risks

Could overlap with SignalOps unless focused on handoff rather than triage.

### Estimated Complexity

Small.

### Standalone Codex Prompt

Build RouteBrief AI as a local-first static product for AI-assisted field-service route handoffs. Use only synthetic tickets and site notes. Implement ticket intake, source-backed extraction, visit brief generation, human approval, exportable handoff text, README, case study, validation script, privacy notes, and GitHub issue templates. Do not require paid APIs. Run validation and document results. Complete when the main workflow is reviewable, documented, and safe to publish.

## 2. PolicyPatch Reviewer

### One-Sentence Product Description

Document comparison tool for reviewing policy changes with source citations.

### Business Problem

Teams struggle to identify meaningful changes between policy drafts.

### Target Industry

Operations, compliance, HR, and internal process teams.

### Target User

Policy owner or operations manager.

### Current Workflow

Manual reading and comment drafting.

### Proposed Workflow

Load two synthetic drafts, compare changes, flag risk, generate reviewer checklist.

### AI Capabilities

Version comparison, risk flagging, checklist generation.

### Human Oversight

Reviewer verifies every flagged change.

### Main User Journey

Choose draft pair, compare, review evidence, approve checklist.

### Recommended Stack

Static browser app.

### Synthetic Data Plan

Fictional policy drafts.

### Free-Tier Deployment Plan

GitHub Pages.

### Required Features

Diff view, summary, risk categories, checklist, citations.

### Non-Goals

Legal advice or real compliance certification.

### Acceptance Criteria

Reviewer can identify changed obligations within five minutes.

### Test Plan

Static validation and manual comparison checks.

### Portfolio Value

Deepens document intelligence.

### Risks

Must avoid legal claims.

### Estimated Complexity

Medium.

### Standalone Codex Prompt

Build PolicyPatch Reviewer as a static document comparison product using fictional policy drafts. Include side-by-side comparison, change summary, risk flags, source citations, human verification, README, case study, validation script, and deployment notes. Avoid legal advice claims. Use synthetic data only. Complete when the reviewer workflow is functional, documented, and tested.

## 3. LaunchKit Repurpose

### One-Sentence Product Description

Creative campaign repurposing planner for turning one asset into multiple channel-ready outputs.

### Business Problem

Small teams waste time adapting the same creative idea for different platforms.

### Target Industry

Marketing, creator economy, small agencies.

### Target User

Creator or content lead.

### Current Workflow

Manual captioning, crop planning, and version tracking.

### Proposed Workflow

Enter campaign goal, choose asset type, generate channel plan, review captions and shot notes.

### AI Capabilities

Caption drafting, creative brief expansion, metadata, revision checklist.

### Human Oversight

Creator approves tone and final edits.

### Main User Journey

Input goal, generate plan, edit recommendations, approve handoff.

### Recommended Stack

Static app with visual preview components.

### Synthetic Data Plan

Fictional campaign briefs and abstract previews.

### Free-Tier Deployment Plan

GitHub Pages.

### Required Features

Brief intake, channel matrix, captions, shot list, revision status.

### Non-Goals

Posting to social platforms or using real client assets.

### Acceptance Criteria

User can create a multi-channel handoff without a paid API.

### Test Plan

Validation script and responsive browser review.

### Portfolio Value

Highlights Gabe's photo/video editing strengths.

### Risks

Needs enough visual polish to feel credible.

### Estimated Complexity

Medium.

### Standalone Codex Prompt

Build LaunchKit Repurpose as a local-first static creative media planning product. Use fictional briefs and abstract previews. Implement campaign intake, channel repurposing matrix, caption drafts, shot-list generation, revision tracking, creator approval, README, case study, validation, and deployment notes. Avoid real client assets and paid APIs. Complete after validation and browser review.

## 4. OpsMetric Narrator

### One-Sentence Product Description

AI-style metric explanation assistant for turning operational snapshots into plain-language weekly updates.

### Business Problem

Operators need clear explanations of metric changes without overclaiming causality.

### Target Industry

Operations and SMB management.

### Target User

Team lead or owner.

### Current Workflow

Manual spreadsheet review and status writing.

### Proposed Workflow

Load synthetic metrics, identify movement, draft status readout, flag caveats.

### AI Capabilities

Metric summarization, driver hypotheses, caveat generation.

### Human Oversight

Manager edits final narrative.

### Main User Journey

Select metric set, generate readout, review caveats, approve summary.

### Recommended Stack

Static app with JSON fixtures.

### Synthetic Data Plan

Fictional weekly operation metrics.

### Free-Tier Deployment Plan

GitHub Pages.

### Required Features

Metric table, change detection, summary draft, caveats, approval.

### Non-Goals

Real forecasting or verified business impact.

### Acceptance Criteria

Reviewer sees clear, honest status narrative.

### Test Plan

Validation script and manual metric checks.

### Portfolio Value

Adds data storytelling.

### Risks

Must avoid unsupported causal claims.

### Estimated Complexity

Small.

### Standalone Codex Prompt

Build OpsMetric Narrator as a static metric readout assistant with fictional weekly operations data. Include metric movement detection, narrative draft, caveats, human approval, README, case study, validation script, privacy statement, and deployment notes. Do not claim verified causality or business savings. Complete when local demo and validation pass.

## 5. IntakeGuard

### One-Sentence Product Description

Responsible intake checker that screens proposed AI use cases for privacy, risk, and missing human oversight.

### Business Problem

Teams start AI projects without checking data sensitivity and control points.

### Target Industry

Agencies, SMBs, AI consulting, operations.

### Target User

AI project lead or consultant.

### Current Workflow

Risk review happens late or inconsistently.

### Proposed Workflow

Enter use case, classify data sensitivity, flag risks, recommend pilot guardrails.

### AI Capabilities

Risk classification, oversight planning, guardrail generation.

### Human Oversight

Project owner confirms policy and legal constraints.

### Main User Journey

Submit use case, review risk profile, accept guardrails, export summary.

### Recommended Stack

Static app, optional future OpenAI API mode.

### Synthetic Data Plan

Fictional AI use-case proposals.

### Free-Tier Deployment Plan

GitHub Pages.

### Required Features

Use-case intake, risk score, data sensitivity, oversight checklist, export.

### Non-Goals

Legal advice, compliance certification, automated approval.

### Acceptance Criteria

User can identify missing safeguards before a pilot.

### Test Plan

Validation script and manual risk scenario checks.

### Portfolio Value

Shows responsible AI maturity.

### Risks

Must keep advice general and avoid legal claims.

### Estimated Complexity

Medium.

### Standalone Codex Prompt

Build IntakeGuard as a responsible AI intake checker using fictional use cases. Implement use-case intake, data sensitivity classification, risk score, human-oversight checklist, guardrail recommendations, exportable summary, README, case study, validation script, and deployment notes. Do not provide legal advice or claim compliance certification. Use synthetic data only and complete after validation.

