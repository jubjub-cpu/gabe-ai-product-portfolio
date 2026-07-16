# Case Studies

## SignalOps Triage

### Problem

Field-service incident notes are often inconsistent, making it hard to decide severity, dispatch urgency, and whether an issue is part of a repeated-failure pattern.

### User

Operations coordinators and field-service leads.

### Existing Workflow

Coordinators read fragmented notes, compare recent history manually, decide priority, and then route a technician.

### Pain Points

Slow triage, inconsistent urgency labels, missed recurrence, and weak audit history.

### Product Hypothesis

A deterministic AI-style triage assistant can make the incident review process more consistent while keeping final dispatch decisions with a human.

### Proposed Workflow

Incident intake, classification, severity score, repeated-failure check, dispatch recommendation, human approval, audit trail.

### Role of AI

Classify incident type, infer severity, identify recurrence cues, and draft technician recommendations.

### Human-Control Model

The coordinator approves or rejects the dispatch recommendation.

### Technical Approach

Static HTML/CSS/JavaScript with synthetic incident data and heuristic scoring.

### Data and Privacy

Only fictional equipment and site data are used.

### Validation

Validation script checks required files and privacy statements. Manual browser review is recommended before publishing.

### Gabe's Contribution

Product direction, workflow design, prompt-style analysis model, testing expectations, and visual refinement.

## ReviewFlow Agent

### Problem

Small teams repeatedly turn messy vendor or operations requests into approval checklists and written responses.

### User

Operations managers, admin teams, and coordinators.

### Existing Workflow

People manually classify the request, look up rules, ask for missing information, draft responses, and track decisions.

### Pain Points

Inconsistent steps, missing approvals, and weak activity history.

### Product Hypothesis

An agent-style workflow can show the work stages clearly while stopping short of autonomous action.

### Proposed Workflow

Input, classification, planning, tool-like policy check, draft output, human approval or rejection, activity history.

### Role of AI

Create a plan, identify review needs, draft a response, and document the process.

### Human-Control Model

Final output requires explicit approval.

### Technical Approach

Static app with deterministic request classification and generated workflow steps.

### Data and Privacy

All requests are fictional.

### Validation

The release validation checks that the demo page and shared rendering logic exist.

### Gabe's Contribution

Workflow thinking, automation scoping, prompt design, and review-first product framing.

## DocuTrace Desk

### Problem

Reviewers need answers from documents, but answers without source evidence are hard to trust.

### User

Analysts, coordinators, and business reviewers.

### Existing Workflow

People manually search documents, copy relevant passages, and compare policies.

### Pain Points

Slow review, missing citations, and weak risk flagging.

### Product Hypothesis

A document intelligence interface can make evidence visible while keeping reviewers responsible for verification.

### Proposed Workflow

Open synthetic documents, search a keyword or question, extract structure, review citations, and inspect risk flags.

### Role of AI

Retrieval, structured extraction, summarization, and risk flagging.

### Human-Control Model

All answers include source references for verification.

### Technical Approach

Static document set and client-side search over synthetic source lines.

### Data and Privacy

Documents are fictional and include synthetic-data statements.

### Validation

Validation script checks the static page and documentation.

### Gabe's Contribution

Document workflow design, responsible citation requirement, and recruiter-facing product explanation.

## FrameForge QA

### Problem

Creative teams often lose clarity between brief, asset review, revision notes, captions, and final handoff.

### User

Creators, small agencies, and content teams.

### Existing Workflow

Creative direction, QA notes, and caption ideas live in separate chats, folders, or memory.

### Pain Points

Inconsistent visual standards, unclear revision notes, and weak repurposing plans.

### Product Hypothesis

A media QA assistant can combine Gabe's visual judgment with AI-assisted structure.

### Proposed Workflow

Choose a synthetic asset, review visual QA score, generate captions, capture revision notes, and produce a shot list.

### Role of AI

Creative brief generation, visual QA language, caption drafting, metadata suggestions, and revision tracking.

### Human-Control Model

The creator decides final taste, edits, and publishing.

### Technical Approach

Static browser UI with abstract visual previews and deterministic QA notes.

### Data and Privacy

No real client assets are used.

### Validation

Manual visual review and validation script.

### Gabe's Contribution

Visual refinement direction, creative workflow design, and prompt-shaped handoff logic.

## PilotMap AI

### Problem

Businesses want AI but lack a responsible way to choose practical pilots.

### User

SMB owners, operators, and transformation leads.

### Existing Workflow

Ideas are discussed informally without a consistent scoring model for data readiness, risk, oversight, and value.

### Pain Points

Hype, unclear prioritization, and missing human-control planning.

### Product Hypothesis

A structured intake and scoring assistant can make AI opportunities easier to compare before investment.

### Proposed Workflow

Enter workflow pain point, select an opportunity pattern, score suitability, inspect risks, and review a pilot roadmap.

### Role of AI

Pain-point analysis, suitability scoring, risk assessment, and roadmap drafting.

### Human-Control Model

Scores are illustrative and require business validation before investment.

### Technical Approach

Static app with synthetic opportunity examples and transparent scoring.

### Data and Privacy

No real business data is used.

### Validation

Validation script plus manual reviewer check.

### Gabe's Contribution

Business workflow framing, responsible AI scoping, product narrative, and validation criteria.

