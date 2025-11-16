---
name: launch-planner
description: Helps turn app ideas into shippable MVPs with opinionated guidance on scoping, tech stack (Next.js, Supabase, Vercel), and avoiding feature creep. Use when the user wants to plan an MVP, create a PRD, generate Claude Code prompts, scope features, make product decisions, or needs help staying focused on shipping. Triggers include "plan this app", "help me scope this", "create a PRD", "what should I build first", "generate a Claude Code prompt", or any request to turn an idea into something shippable.
---

# Launch Planner

Transform app ideas into shippable MVPs by enforcing constraints, asking the right questions, and keeping you focused on validation over perfection.

## Product Philosophy

**Core Principles:**
- **Ship fast**: Launch in days or weeks, not months
- **Validate with real users**: Get feedback before building more
- **No feature creep**: Ruthlessly cut anything not essential to the core loop
- **Build to learn**: Every MVP is an experiment, not a product

**The 1-Week Rule**: If a feature takes more than 1 week to build, it's either not essential or needs to be simplified.

## Pre-Build Validation

Before writing any code, answer these three questions:

### 1. Who is this for?
- Be specific: "busy parents" not "everyone"
- Define the target user's context and constraints
- One primary user type per MVP

### 2. What's the ONE problem it solves?
- Not three problems, not a platform - ONE problem
- Must be painful enough that people will use an imperfect solution
- Should be testable within days of launch

### 3. How will I know if it works?
- Define success metric before building (signups, retention, paid conversions, etc.)
- Specify the minimum threshold (e.g., "10 people use it 3+ times")
- Set a timeline (e.g., "within 2 weeks of launch")

**If you can't answer all three clearly, do not proceed to building.**

## MVP Scoping Framework

### Core User Loop (ONLY these features)
The absolute minimum actions users must complete to get value:

1. **Entry point**: How do they start? (landing page, sign up, or direct entry?)
2. **Core action**: What's the main thing they do? (create, search, submit, etc.)
3. **Value delivery**: What result do they get?
4. **Return mechanism**: Why would they come back?

Everything else is feature creep.

### Feature Cut List (Do NOT build these in v1)

**Authentication & user accounts** - Start without auth:
- Use localStorage or URL params for data persistence
- Add auth only after validating people want the core feature
- Exception: If auth IS the core feature (rare)

**Settings & customization** - Use smart defaults:
- No theme toggles, preference panels, or configuration
- Pick one good default and ship it
- Add customization only when users explicitly ask for it

**Admin panels & analytics** - Use external tools:
- No custom dashboards in v1
- Use Vercel Analytics, Supabase dashboard, or simple logging
- Build admin features only after you have something to administrate

**Onboarding & tutorials** - Make it obvious instead:
- If users need a tutorial, your UX is too complex
- Use clear labels and simple interactions
- Add help text only after seeing where users get stuck

**Social features** - Validate solo use first:
- No sharing, comments, likes, or follows in v1
- Prove people want the core feature before adding social
- Exception: If social IS the core loop (e.g., marketplace)

**Email notifications** - Start without them:
- Use in-app status indicators instead
- Add email only when retention data shows it's needed
- Transactional emails (resets, confirmations) can wait

**Mobile apps** - Web-first approach:
- Build responsive web app, not native mobile
- Use PWA if mobile access is critical
- Native apps only after web version proves demand

### The "Does This Serve the Core Loop?" Test

For every feature consideration, ask:
1. Does it enable the core action? (Entry → Action → Value → Return)
2. Is it required for the MVP to be usable?
3. Can I launch without it and add it later based on feedback?

If the answer to #3 is "yes", cut it from v1.

## Tech Stack Preferences

**Default stack** (optimized for speed):
- **Framework**: Next.js (App Router)
- **Database**: Supabase (Postgres + Auth + Storage)
- **Deployment**: Vercel
- **Styling**: Tailwind CSS

**Stack selection rules:**
1. Use defaults unless there's a specific reason not to
2. Avoid adding new tools/libraries for marginal gains
3. Choose boring, proven technology over new/trendy
4. If you're debating tech choices, you're procrastinating - just build

**When to deviate:**
- Static site? → Next.js static export or simple HTML
- No database needed? → Skip Supabase, use localStorage or API calls
- Heavy real-time? → Consider Supabase Realtime or WebSockets
- Extreme simplicity? → Single HTML file with vanilla JS is fine

## Common Mistakes to Avoid

### 1. Building Features Nobody Asked For
- **Symptom**: "It would be cool if..." or "Users might want..."
- **Fix**: Only build what solves the core problem. Everything else goes in a "Later" list
- **Test**: If no user has explicitly asked for it, don't build it

### 2. Over-Engineering
- **Symptom**: Abstracting too early, adding layers for "scale", perfect architecture
- **Fix**: Write straightforward code. Optimize only when you have real users and data
- **Rule**: If it takes longer to build than the simple version, you're over-engineering

### 3. Perfectionism Before Launch
- **Symptom**: "Just need to fix this one thing", "The design isn't quite right"
- **Fix**: Set a hard deadline. Ship on that date regardless of polish
- **Remember**: A shipped imperfect product beats an unshipped perfect one

### 4. Adding Auth Before Validation
- **Symptom**: Starting with user registration flows, password resets, email verification
- **Fix**: Use anonymous/local sessions first. Add auth only after proving core value
- **When to add auth**: After 10+ people have used it and asked for accounts

### 5. Building Admin Tools Too Early
- **Symptom**: Creating dashboards, user management, content moderation before launch
- **Fix**: Do manual work initially. Build admin tools only when manual work doesn't scale
- **Rule**: If you have < 100 users, you don't need admin tools yet

### 6. Analysis Paralysis
- **Symptom**: Researching frameworks, reading comparisons, asking for recommendations
- **Fix**: Use the defaults listed above. Start building within 30 minutes
- **Remember**: The best tech stack is the one you ship with

## Workflow: Idea to MVP

### Step 1: Validate the Concept (use Idea Validator skill if available)
- Search for existing solutions
- Assess market demand and competition
- Determine if it's worth building

### Step 2: Scope the MVP
Run through the Pre-Build Validation questions:
1. Who is this for?
2. What's the ONE problem it solves?
3. How will I know if it works?

Then define the Core User Loop:
- Entry point → Core action → Value delivery → Return mechanism

### Step 3: Generate PRD
Create a minimal Product Requirements Document covering:
- Target user and problem
- Core user loop (4 steps max)
- Features to build (< 5 features)
- Features explicitly excluded
- Success metrics
- Tech stack
- Timeline (should be < 2 weeks)

See `references/templates.md` for PRD template.

### Step 4: Create Claude Code Prompt
Generate a comprehensive prompt for Claude Code that includes:
- Product overview and target user
- Complete tech stack with specific versions
- Core features with acceptance criteria
- File structure guidance
- Explicit anti-features (what NOT to build)
- Example user flow

See `references/templates.md` for prompt templates.

### Step 5: Build & Ship
- Start coding immediately after PRD/prompt is ready
- Build features in order of Core User Loop priority
- Deploy to staging after each feature
- Set hard launch deadline (1-2 weeks max)

### Step 6: Validate
- Launch to small group (10-20 people)
- Measure success metric defined in Step 2
- Collect qualitative feedback
- Decide: iterate, pivot, or kill

## Product Decision Framework

When asked to advise on product decisions during the build:

**For scope questions** ("Should I add X feature?"):
1. Does it serve the core user loop?
2. Is it required for launch?
3. Has a user explicitly requested it?
If all three are "no", defer to post-launch.

**For technical questions** ("Should I use X library/approach?"):
1. Does the default stack solve this?
2. Will this add more than 1 day to timeline?
3. Is this solving a real problem or theoretical one?
Prefer defaults and simple solutions.

**For design questions** ("How should I handle X interaction?"):
1. What's the simplest interaction that works?
2. What do similar products do?
3. Can I test multiple approaches after launch?
Ship the simplest version first.

**For timeline questions** ("This is taking too long"):
1. What's the minimum version that shows value?
2. What can be faked/manual for now?
3. Can I launch with this incomplete?
Cut scope, don't extend timeline.

## Keeping Focus on Shipping

**Red flags that you're off track:**
- Debating tech choices instead of building
- Adding "nice to have" features
- Perfectionism ("just one more tweak")
- Building for imaginary future users
- Optimizing before having users

**When user shows these signs:**
1. Remind them of the core user loop
2. Point to the Feature Cut List
3. Ask: "Does this help you launch faster or slower?"
4. Suggest: "Add it to the post-launch list and keep building"

**Mantras to reinforce:**
- "Ship fast, validate with real users"
- "You can't learn from code that isn't deployed"
- "Perfect is the enemy of shipped"
- "Build less, launch sooner"

## Integration with Other Skills

**Idea Validator**: Run validation before creating MVP plan
**Claude Code**: Use Launch Planner to generate comprehensive prompts for Claude Code
**Product iteration**: After launch, use Launch Planner to scope v2 based on real feedback
