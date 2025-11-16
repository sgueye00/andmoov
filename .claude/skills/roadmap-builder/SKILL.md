---
name: roadmap-builder
description: Helps prioritize features and decide what to build next using Impact vs Effort matrix, category prioritization (Retention, Core, Monetization, Growth in order), and stage-based rules. Use when deciding what to build next, evaluating feature requests, prioritizing roadmap items, or challenging feature ideas. Triggers include "what should I build next", "prioritize these features", "is this worth building", "roadmap advice", or any product prioritization questions.
---

# Roadmap Builder

Make fast, opinionated decisions about what to build next using a clear prioritization framework that prevents feature creep and keeps focus on what actually matters.

## Core Principle

**Build less, ship faster, validate with real users.**

Every feature added is a commitment to maintain, test, and support it forever. The best feature is the one you don't build because you found a simpler solution.

## Prioritization Framework

### Impact vs Effort Matrix

Plot every feature on this 2x2 matrix:

```
High Impact │ 2. BUILD NEXT  │ 1. BUILD NOW
            │                │
            │                │
───────────┼────────────────┼──────────────
            │                │
Low Impact  │ 4. DON'T BUILD │ 3. MAYBE LATER
            │                │
            └────────────────┴──────────────
              High Effort      Low Effort
```

**Quadrant 1: BUILD NOW (High Impact, Low Effort)**
- Core features users explicitly requested
- Fixes for major pain points
- Quick wins that improve retention
- Takes < 3 days to build

**Quadrant 2: BUILD NEXT (High Impact, High Effort)**
- Important but complex features
- Break into smaller pieces and move to Quadrant 1
- Validate demand before committing
- Takes > 1 week to build

**Quadrant 3: MAYBE LATER (Low Impact, Low Effort)**
- Nice-to-haves that users mention occasionally
- Polish and improvements
- Build only when nothing else is urgent
- Takes < 2 days to build

**Quadrant 4: DON'T BUILD (Low Impact, High Effort)**
- Delete these from roadmap immediately
- No amount of user requests justifies building these
- Find simpler alternatives or just say no
- Takes > 3 days to build

### Category Prioritization (In Order)

**1. RETENTION (Highest Priority)**
Features that prevent users from leaving:
- Fix bugs causing frustration
- Remove friction in core workflows
- Improve reliability and performance
- Make existing features work better

**Why first**: Dead users don't pay. Fix the leaky bucket before adding more water.

**2. CORE FEATURES (Second Priority)**
Features that directly enable the main use case:
- Extend the core user loop
- Support primary workflows
- Remove blockers to getting value

**Why second**: Users came for a specific thing. Make that thing excellent before adding unrelated features.

**3. MONETIZATION (Third Priority)**
Features that help you make money:
- Payment flows
- Upgrade paths
- Premium features
- Usage-based billing

**Why third**: Only monetize after proving people use and love the core product. Charging for something people barely use doesn't work.

**4. GROWTH (Fourth Priority)**
Features that bring new users:
- Sharing mechanisms
- Referral programs
- Public profiles
- Viral loops

**Why last**: Growth multiplies your retention rate. If retention is 20%, growth makes your problem 10x bigger, not better.

## Stage-Based Rules

Your product stage determines what you should build. **Never skip ahead.**

### Pre-Launch: Core Loop ONLY

**What to build:**
- ONLY features that enable the core user loop (Entry → Action → Value → Return)
- Nothing else matters yet

**What NOT to build:**
- Authentication (unless core to the product)
- Settings or customization
- Admin tools
- Analytics dashboards
- Social features
- Email notifications
- Mobile apps
- Anything on a "nice to have" list

**Why**: You can't validate a product people haven't used. Ship the minimum viable core loop, put it in front of real users, and see if they care.

**Decision rule**: If the feature isn't required for someone to complete one full cycle of your core loop, don't build it yet.

**Examples:**
- ✅ Build: Upload CSV, see results (core loop)
- ❌ Don't build: User accounts, dark mode, export options
- ✅ Build: Create task, mark complete (core loop)
- ❌ Don't build: Categories, tags, filters, recurring tasks

### Post-Launch: User Requests ONLY

**What to build:**
- Features that 3+ different users explicitly requested
- Fixes for bugs users reported
- Improvements to workflows users struggle with

**What NOT to build:**
- Features you think would be cool
- Features competitors have
- Features that "might be useful someday"
- Features one power user wants

**Why**: Your assumptions about what users want are usually wrong. Build only what you know they want because they told you.

**Decision rule**: If users haven't explicitly asked for it multiple times, it's not a priority.

**Validation questions:**
- How many users requested this? (Need at least 3)
- When was the last request? (Must be within last 2 weeks)
- Did they say they want it, or are they actively struggling without it? (Struggling = build it)
- Can you fake it first to see if they actually use it? (Always try this)

**Examples:**
- ✅ Build: Export to PDF (10 users asked in past month)
- ❌ Don't build: Import from 15 different file formats (1 user mentioned once)
- ✅ Build: Undo feature (users keep asking "how do I undo?")
- ❌ Don't build: Keyboard shortcuts (you think they'd be nice)

### Growth Phase: Retention & Virality

**What to build:**
- Features that reduce churn (users stop leaving)
- Features that increase sharing (users bring others)
- Features that deepen engagement (users come back more)

**What NOT to build:**
- Random feature requests
- Competitor features
- Features that don't move metrics

**Why**: You have product-market fit. Now optimize the fundamentals: keep users longer, get them to bring friends, make them use it more.

**Decision rule**: Will this measurably improve retention, sharing, or engagement? If you can't measure it, don't build it.

**Validation questions:**
- Which metric will this improve? (Be specific: "weekly active users" not "engagement")
- By how much? (Have a hypothesis: "increase retention from 40% to 50%")
- How will you measure success? (Define before building)
- What's the failure case? (If metric doesn't move, what do you learn?)

**Examples:**
- ✅ Build: Weekly email digest (test shows 20% open rate → 40% retention boost)
- ❌ Don't build: Dark mode (nice to have, doesn't affect retention)
- ✅ Build: Easy sharing flow (currently <1% share, see if we can get to 5%)
- ❌ Don't build: Advanced settings panel (power users happy, doesn't grow usage)

## Feature Evaluation Questions

Ask these three questions about EVERY feature before building:

### 1. Does this serve the core use case?

**Core use case** = the main reason people use your product

If the answer is no, it's either:
- A distraction (don't build)
- A separate product (build later as standalone)
- Nice-to-have polish (build after core is excellent)

**Examples:**
- Core use case: "Create and share design mockups"
  - ✅ Serves core: Export as PNG (sharing)
  - ✅ Serves core: Commenting on designs (collaboration)
  - ❌ Doesn't serve core: Time tracking (unrelated)

- Core use case: "Track daily habits"
  - ✅ Serves core: Streaks and reminders (helps tracking)
  - ✅ Serves core: Quick daily checkin (makes tracking easy)
  - ❌ Doesn't serve core: Social feed of others' habits (distraction)

### 2. Will users actually use this or just say they want it?

**The build vs say gap**: People say they want features they'll never actually use.

Red flags that users won't actually use it:
- "It would be cool if..."
- "I might use this..."
- "Wouldn't it be nice if..."
- "Some users might want..."
- Requested once, never mentioned again
- No clear use case beyond "it's useful"

Green flags that users will actually use it:
- "I need this to..." (specific use case)
- "I currently use [workaround] for this"
- "I tried to do X and couldn't"
- Multiple users struggling with same problem
- Users willing to pay extra for it
- Users actively asking "when will this ship?"

**Validation test**: Can you fake it manually first?
- Build a manual version (Wizard of Oz testing)
- See if users actually use it when available
- Measure usage for 1-2 weeks
- Only build real version if usage is high

**Examples:**
- ❌ Won't use: "Advanced filtering options" (user said "would be nice")
- ✅ Will use: "Filter by date" (users manually sorting by date every time)
- ❌ Won't use: "Custom themes" (one user mentioned)
- ✅ Will use: "Dark mode" (50+ users explicitly requested, some switched to competitors for it)

### 3. Can we fake it first to validate demand?

**Faking it** = Manually doing what the feature would do automatically

Benefits:
- Validates if users actually want it (not just say they do)
- Learn how they actually use it (often different than expected)
- Test different approaches before committing to code
- Ship value immediately while deciding if automation is worth it

**How to fake features:**

**Admin features** → Do it manually via database
- Don't build: Admin dashboard
- Instead: Manually update data when needed
- Build real version: Only when doing it manually 10+ times per day

**Automation** → Do it manually first
- Don't build: Automated report generation
- Instead: Create reports manually for users
- Build real version: Only when it takes >30 min/day of manual work

**Integrations** → Use manual imports/exports
- Don't build: API integration with Tool X
- Instead: Download from X, upload to your app
- Build real version: Only when users do this daily

**Analytics** → Track in spreadsheet
- Don't build: Custom analytics dashboard
- Instead: Export data, analyze in Google Sheets
- Build real version: Only when analysis takes >1 hour/day

**Examples:**
- Feature idea: "Auto-generate invoices from time logs"
  - Fake it: Manually create invoices when users request
  - Learn: Do they actually want auto-generation or just easier manual creation?
  - Build: Only after manually creating 50+ invoices and confirming demand

- Feature idea: "Email notifications for updates"
  - Fake it: Manually email users when relevant updates happen
  - Learn: Which notifications do users read? Which do they ignore?
  - Build: Only automate notifications users actually open

## Red Flags: Don't Build These

### 1. Feature Creep

**Symptoms:**
- "Since we're building X, we might as well add Y"
- "This would make the product more complete"
- "Competitors have this feature"
- "It wouldn't take that long to add"

**Why it's bad:**
- Every feature costs more than you think
- More features = more complexity = harder to use
- Users came for one thing, not a swiss army knife
- You're guessing what users want

**What to do instead:**
- Ship X. Wait. See if anyone asks for Y.
- If 5+ users request Y within a month, consider building it
- If not, Y wasn't important

**Examples:**
- Building: File upload feature
  - ❌ Feature creep: Add drag-and-drop, multi-file upload, preview, compression, format conversion
  - ✅ Ship minimal: Basic file upload button
  - ✅ Add later: Only features users specifically request

### 2. Premature Optimization

**Symptoms:**
- "We should make this faster before we launch"
- "Let's build it to scale from the start"
- "What if we have 10,000 users?"
- "We should cache this"

**Why it's bad:**
- You don't have 10,000 users yet
- Fast/slow doesn't matter if nobody uses it
- Optimization makes code more complex
- You're solving imaginary problems

**What to do instead:**
- Build the simple version
- Launch to real users
- See if speed is actually a problem
- Optimize only when it's measurably hurting usage

**Examples:**
- ❌ Premature: Building complex caching before launch
- ✅ Ship simple: Basic database queries
- ✅ Optimize later: Only when pages take >2 seconds to load and users complain

- ❌ Premature: Optimizing for 1M users when you have 0
- ✅ Ship simple: Code that works for 100 users
- ✅ Optimize later: When you actually have scale problems

### 3. Building for Imaginary Users

**Symptoms:**
- "Users might want..."
- "I think users would like..."
- "Some users would probably..."
- "This would be useful for..."
- "When we have enterprise customers..."

**Why it's bad:**
- Imaginary users don't exist
- Real users have different needs than you imagine
- You're wasting time building for nobody
- Every imaginary feature delays shipping to real users

**What to do instead:**
- Talk to actual users
- Build only what real users explicitly request
- Validate every assumption with real people
- If you don't have users yet, get users first

**Examples:**
- ❌ Imaginary: "Enterprises will need SSO and audit logs"
  - You don't have enterprise customers
  - They haven't asked for this
  - You're guessing what they need

- ✅ Real users: "5 different users asked for CSV export"
  - Real people, real request
  - Clear use case
  - Safe to build

## Decision Templates

### Quick Feature Evaluation

Use this for rapid yes/no decisions:

```
Feature: [Name]

Stage Check:
[ ] Pre-launch: Does this enable core loop? (If no, don't build)
[ ] Post-launch: Did 3+ users request this? (If no, don't build)
[ ] Growth: Will this improve retention/sharing/engagement? (If no, don't build)

Three Questions:
1. Serves core use case? [Yes/No]
2. Users will actually use it? [Yes/No]
3. Can we fake it first? [Yes/No]

Red Flags:
[ ] Feature creep
[ ] Premature optimization
[ ] Building for imaginary users

Decision: [BUILD NOW / BUILD LATER / DON'T BUILD]
Reasoning: [One sentence]
```

### Impact vs Effort Scoring

Use this for prioritizing multiple features:

```
Feature: [Name]

Impact Score (1-10):
- Retention: [1-10] (Does it prevent churn?)
- Core value: [1-10] (Does it improve main use case?)
- User requests: [1-10] (How many users want it?)
Total Impact: [Sum / 3]

Effort Score (1-10):
- Time estimate: [1=hours, 5=days, 10=weeks]
- Complexity: [1=simple, 5=moderate, 10=complex]
- Risk: [1=low, 5=medium, 10=high]
Total Effort: [Sum / 3]

Quadrant:
- High Impact (>7), Low Effort (<4): BUILD NOW
- High Impact (>7), High Effort (>6): BUILD NEXT (break into smaller pieces)
- Low Impact (<5), Low Effort (<4): MAYBE LATER
- Low Impact (<5), High Effort (>6): DON'T BUILD

Priority: [1-4]
```

### Faking It Test

Use this before committing to building anything:

```
Feature: [Name]

Manual version:
1. How can we do this manually? [Describe process]
2. Who will do it manually? [Person responsible]
3. How long will manual version take? [Per use]
4. How will we track usage? [Metric]

Validation criteria:
- Usage threshold: [Number of manual uses before building automation]
- Time threshold: [Hours per week on manual version before building]
- User feedback: [What do users say when using manual version?]

Test period: [1-2 weeks]

Decision rule:
- IF usage > threshold: Build automated version
- IF usage < threshold: Feature not needed
- IF users complain about manual version: Improve manual version first
```

## Roadmap Anti-Patterns

### Anti-Pattern 1: The "Competitor Has It" Trap

**Pattern**: "Competitor X just launched Feature Y, we need to build it too"

**Why it's wrong**: 
- You don't know if it's working for them
- Your users might not care
- You're chasing instead of leading

**What to do instead**:
- Ask YOUR users if they need Feature Y
- If nobody mentions it, ignore it
- If multiple users say "I wish we had what Competitor X has", then consider it

### Anti-Pattern 2: The "Enterprise Ready" Trap

**Pattern**: "We need SSO, audit logs, and admin roles before we can sell to enterprises"

**Why it's wrong**:
- You don't have enterprise customers yet
- SMBs will pay you first
- Enterprise features are expensive to build and maintain
- You're building for imaginary users

**What to do instead**:
- Get paying SMB customers first
- When actual enterprise prospects say "we'd buy if you had X", then build X
- Never build enterprise features speculatively

### Anti-Pattern 3: The "Complete Product" Trap

**Pattern**: "We need to build X, Y, and Z before we can launch"

**Why it's wrong**:
- You're guessing what users need
- Launch gets delayed indefinitely
- You can't validate until it's in users' hands
- "Complete" is subjective and infinite

**What to do instead**:
- Define the absolute minimum core loop
- Ship that immediately
- Add features based on actual user feedback
- "Complete" = users can accomplish their goal, not "has every feature we can imagine"

### Anti-Pattern 4: The "Just One More Thing" Trap

**Pattern**: "We're almost ready to launch, let me just add this quick feature"

**Why it's wrong**:
- "Quick" features take longer than expected
- You're procrastinating the scary part (getting user feedback)
- Every feature adds bugs and complexity
- Launch keeps getting delayed

**What to do instead**:
- Set a launch date
- Ship on that date regardless
- Add features after launch based on feedback
- Trust that "done is better than perfect"

## Integration with Other Skills

**Launch Planner**: Creates MVP scope → Roadmap Builder prioritizes what comes after MVP

**Idea Validator**: Validates if idea is worth building → Roadmap Builder decides when to build it

**Marketing Writer**: Ships feature → Roadmap Builder helps decide next feature to ship

**Typical workflow:**
1. Launch MVP (Launch Planner)
2. Get user feedback
3. Prioritize requested features (Roadmap Builder)
4. Build next feature
5. Ship and market it (Marketing Writer)
6. Repeat step 2

## Handling Common Situations

### "Users are requesting Feature X but it's complex"

**Response pattern:**
1. Confirm it's high impact (multiple users, real pain)
2. Break into smaller pieces
3. Build smallest piece that delivers value
4. Ship, get feedback, iterate
5. Only build next piece if first piece gets used

**Example:**
- Request: "We need team collaboration features"
- Don't build: Full collaboration suite
- Build first: Simple comment system
- Ship and validate: Do people actually comment?
- Build next: Only if comments are heavily used

### "We have a list of 20 feature requests"

**Response pattern:**
1. Sort by category (Retention > Core > Monetization > Growth)
2. Within category, sort by number of user requests
3. Mark which stage you're in (Pre/Post/Growth)
4. Apply stage rules to filter list
5. Score remaining features (Impact vs Effort)
6. Build top 1-3, ignore the rest for now

**Example output:**
```
Sorted by priority:

RETENTION (Build these first):
1. Fix: App crashes when file > 10MB (5 users reported)
2. Improve: Slow loading time on dashboard (8 users mentioned)

CORE FEATURES (Build after retention):
3. CSV export (10 users requested)
4. Bulk editing (3 users requested)

DON'T BUILD YET:
- Dark mode (1 user mentioned, low impact)
- Advanced filters (2 users, complex to build)
- Mobile app (0 users requested, premature)
```

### "We want to build something innovative"

**Response pattern:**
1. Innovation is fine AFTER core is solid
2. Ask: Does core product work perfectly?
3. Ask: Are users asking for innovative feature?
4. Ask: Can you fake it first to validate?
5. If all yes, build it
6. If any no, fix core first

**Remember**: The most innovative thing you can do is solve the core problem better than anyone else. Innovation on a shaky foundation is just distraction.

## Quick Reference

**Pre-launch**: Core loop only
**Post-launch**: User requests only (3+ users)
**Growth**: Retention and viral features

**Always ask:**
1. Serves core use case?
2. Will users actually use it?
3. Can we fake it first?

**Red flags:**
- Feature creep
- Premature optimization
- Imaginary users

**Priority order:**
Retention > Core > Monetization > Growth

**Default answer**: "Let's wait and see if users ask for it."
