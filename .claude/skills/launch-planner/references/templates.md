# Launch Planner Templates

This file contains templates for PRDs and Claude Code prompts that follow the Launch Planner product philosophy.

## PRD Template

Use this template when generating Product Requirements Documents:

```markdown
# [Product Name] - MVP PRD

## Overview
**Target User**: [Specific user persona - be concrete]
**Problem**: [The ONE problem this solves]
**Success Metric**: [How we'll know if it works + threshold + timeline]

## Core User Loop
1. **Entry**: [How users start using the product]
2. **Core Action**: [The main thing they do]
3. **Value**: [What result/benefit they get]
4. **Return**: [Why they'd come back]

## Features to Build (v1)
1. [Feature 1 - directly supports core loop]
2. [Feature 2 - directly supports core loop]
3. [Feature 3 - directly supports core loop]
[Max 5 features - if more, you're building too much]

## Explicitly Excluded (Not in v1)
- [Feature that seems important but isn't essential]
- [Feature users might ask for but can wait]
- [Feature that's "nice to have"]
[Be specific - this prevents scope creep]

## Tech Stack
- Framework: Next.js (App Router)
- Database: Supabase
- Deployment: Vercel
- Styling: Tailwind CSS
[Only list if deviating from defaults]

## Timeline
- Kickoff: [Date]
- Feature Complete: [1-2 weeks from kickoff]
- Launch: [No more than 2 weeks from kickoff]

## Post-Launch Validation Plan
- **Target**: [Number of users to test with]
- **Duration**: [Time period for testing - 1-2 weeks recommended]
- **Decision Criteria**: [What results mean iterate vs. pivot vs. kill]
```

**PRD Quality Checklist:**
- [ ] Target user is specific, not generic
- [ ] Problem is ONE thing, not multiple
- [ ] Core loop is 4 steps or less
- [ ] Features list is 5 or fewer items
- [ ] Excluded list is longer than features list
- [ ] Timeline is under 2 weeks
- [ ] Success metric is measurable and has threshold

## Claude Code Prompt Template

Use this template when generating prompts for Claude Code:

```markdown
Build [product name]: [one-sentence description]

## Target User & Problem
[Specific user persona] needs [specific outcome] because [specific pain point].

## Core User Flow
1. User [entry action]
2. User [core action with specific details]
3. User [receives value - be specific]
4. User [return mechanism]

## Tech Stack
- Next.js 14+ (App Router)
- Supabase (Postgres + Auth if needed)
- Tailwind CSS
- Vercel deployment
[Add specific libraries only if essential]

## Features to Build

### 1. [Feature Name]
**User Story**: As a [user], I want to [action] so that [benefit]
**Acceptance Criteria**:
- [ ] [Specific, testable criterion]
- [ ] [Specific, testable criterion]
- [ ] [Specific, testable criterion]

### 2. [Feature Name]
[Repeat structure for each feature - max 5 features]

## File Structure Guidance
```
/app
  /page.tsx (landing/main page)
  /[feature]/page.tsx (feature pages)
/components
  /[feature-name].tsx (organized by feature)
/lib
  /supabase.ts (db client)
  /utils.ts (helpers)
```

## What NOT to Build (Critical)
- NO authentication system (use localStorage initially)
- NO admin dashboard
- NO email notifications
- NO user settings/preferences
- NO [any other feature that was explicitly excluded]

## Design Guidelines
- Clean, minimal interface
- Mobile-responsive (Tailwind breakpoints)
- Use Tailwind default colors/spacing
- No custom animations or transitions
- Prioritize clarity over aesthetics

## Example User Journey
1. [User lands on page and sees X]
2. [User clicks/enters Y]
3. [User receives Z result]
4. [User can do A next]

## Success Criteria
This MVP is successful if:
- [Specific measurable outcome]
- [Specific measurable outcome]
- Within [timeframe] of launch

## Timeline
Target completion: [Specific date, 1-2 weeks out]
```

**Claude Code Prompt Quality Checklist:**
- [ ] Problem is clearly stated in one sentence
- [ ] User flow is specific with concrete actions
- [ ] Tech stack includes version numbers where relevant
- [ ] Each feature has testable acceptance criteria
- [ ] "What NOT to Build" section is explicit and comprehensive
- [ ] Example user journey shows actual UI interactions
- [ ] File structure is suggested (helps Claude organize code)
- [ ] Timeline is realistic (1-2 weeks)

## Quick Start Prompt Template

For very simple apps, use this abbreviated template:

```markdown
Build [product]: [one-sentence description]

Target user: [specific user]
Core action: [what they do] → [what they get]

Features:
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

Tech: Next.js + Supabase + Tailwind + Vercel

Do NOT build:
- Auth
- Settings
- Admin features
- [other exclusions]

Launch target: [date]
```

## Feature Specification Template

When breaking down a complex feature during the build:

```markdown
## [Feature Name]

**Purpose**: [Why this feature exists - must relate to core loop]

**User Story**: As a [user], I want to [action] so that [benefit]

**Acceptance Criteria**:
- [ ] Given [context], when [action], then [result]
- [ ] Given [context], when [action], then [result]
- [ ] [Edge case handling]

**UI Requirements**:
- [Specific UI element or interaction]
- [Specific UI element or interaction]
[Keep to essentials only]

**Data Requirements**:
- [What data needs to be stored]
- [What data needs to be fetched]
[Supabase schema notes if relevant]

**Out of Scope**:
- [Related feature that's NOT included]
- [Nice-to-have that can wait]

**Implementation Notes**:
- [Technical consideration if non-obvious]
- [Integration point with other features]
```

## Decision Template

When helping user make product decisions:

```markdown
## Decision: [Should we build/include X?]

**Core Loop Test**:
- Does this enable entry/action/value/return? [Yes/No]
- Answer: [Explain how or why not]

**Necessity Test**:
- Can we launch without this? [Yes/No]
- Answer: [Explain minimum viable alternative]

**Validation Test**:
- Has a real user requested this? [Yes/No]
- Answer: [Context if applicable]

**Timeline Impact**:
- How much time does this add? [Hours/Days]
- Is it worth delaying launch? [Yes/No]

**Recommendation**: [Build now / Build after launch / Don't build]
**Reasoning**: [2-3 sentences explaining the recommendation]
**Alternative**: [If not building now, suggest simpler approach or post-launch plan]
```

## Scope Creep Alert Template

When user is adding features that don't serve core loop:

```markdown
⚠️ **Scope Creep Alert**

You're considering adding: [Feature name]

**Core Loop Check**:
Your core loop is: [Entry] → [Action] → [Value] → [Return]

This feature: [Does / Does not] directly enable one of these steps.

**Launch Impact**:
Current timeline: [X days until launch]
This feature adds: [Y days]
New timeline: [X+Y days]

**Recommendation**:
- [ ] Add to post-launch backlog
- [ ] Build a simpler version that takes < 1 day
- [ ] Build now (only if truly blocks launch)

**Post-Launch Plan**: [How to validate if this feature is actually needed after launch]
```

## Post-Launch Evaluation Template

After MVP launches, use this to decide next steps:

```markdown
# [Product Name] - Post-Launch Evaluation

## Launch Results (First [X] Days)

**Success Metric**: [Original metric from PRD]
**Target**: [Original threshold]
**Actual**: [Real numbers]
**Result**: [Met / Didn't meet / Exceeded]

## User Feedback Summary

**What worked**:
- [Positive feedback point 1]
- [Positive feedback point 2]

**What confused users**:
- [Confusion point 1]
- [Confusion point 2]

**Most requested features**:
1. [Feature request 1] - [# of requests]
2. [Feature request 2] - [# of requests]
3. [Feature request 3] - [# of requests]

## Decision: [Iterate / Pivot / Kill]

**Reasoning**: [2-3 sentences based on data]

## If Iterate: Next Version Scope

**Core loop adjustment**: [Any changes to the core loop based on learnings]

**Features to add** (based on user requests):
1. [Feature 1] - [Why: user data/feedback]
2. [Feature 2] - [Why: user data/feedback]
[Max 3 features for v2]

**Features to cut** (unused in v1):
- [Feature that no one used]
- [Feature that caused confusion]

**Timeline**: [1-2 weeks for v2]

## If Pivot: New Direction

**What we learned**: [Key insight from v1]
**New hypothesis**: [Revised understanding of user need]
**New core loop**: [Entry] → [Action] → [Value] → [Return]
**Next experiment**: [What to test in pivot]

## If Kill: Lessons Learned

**Why it didn't work**: [Honest assessment]
**What we'd do differently**: [Specific learnings]
**Salvageable pieces**: [Any code/concepts to reuse]
```
