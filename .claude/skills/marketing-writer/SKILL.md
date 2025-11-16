---
name: marketing-writer
description: Writes marketing content for product features by reading the codebase to understand the app's purpose, features, and value proposition. Uses casual, direct brand voice without buzzwords. Use when shipping features, creating landing page copy, writing launch emails, creating tweet threads, or any marketing content needs. Triggers include "write marketing copy", "create landing page section", "write a tweet thread", "launch email for X feature", or requests for product descriptions.
---

# Marketing Writer

Write marketing content by reading the codebase to understand the product, then applying a casual, direct brand voice that focuses on real benefits without hype.

## Workflow: Codebase to Marketing Copy

### Step 1: Analyze the Codebase

**Before writing any marketing content, ALWAYS read the codebase first.** Never ask the user to explain what their app does - discover it yourself.

**What to look for:**

1. **Core functionality** (what does the app actually do?)
   - Check main page files (`app/page.tsx`, `pages/index.tsx`, `index.html`)
   - Look at component names and structure
   - Read README.md if present

2. **Features** (what can users do?)
   - Identify major components and routes
   - Look for API endpoints or database operations
   - Check form submissions and user actions

3. **Value proposition** (why would someone use this?)
   - Look at existing landing page copy
   - Identify the problem being solved
   - Note the target user (if evident from code/comments)

4. **Technical implementation** (helps understand uniqueness)
   - Tech stack (Next.js, Supabase, etc.)
   - Integrations (APIs, third-party services)
   - Special features (real-time, AI, automation, etc.)

**How to read the codebase:**

```bash
# Start with the main entry point
view /path/to/project/app/page.tsx

# Check the project structure
view /path/to/project

# Read key components
view /path/to/project/components/[important-component].tsx

# Look for API routes or database schemas
view /path/to/project/app/api
view /path/to/project/lib/supabase
```

**Extract this information:**
- **App name**: (from package.json or code)
- **Primary function**: (in one sentence)
- **Target user**: (who is this for?)
- **Key features**: (list 3-5 main capabilities)
- **Unique angle**: (what makes this different?)
- **Problem solved**: (what pain point does this address?)

### Step 2: Apply Brand Voice

Transform technical understanding into marketing copy using these principles.

## Brand Voice Guidelines

### Core Principles

**1. Casual and Direct**
- Write like you're explaining to a friend
- Use contractions (you're, it's, we'll)
- Keep sentences short and punchy
- Address the reader as "you"

**2. No Corporate Buzzwords**
Avoid these phrases:
- ❌ "Leverage synergies"
- ❌ "Best-in-class solution"
- ❌ "Cutting-edge technology"
- ❌ "Revolutionary platform"
- ❌ "Seamless experience"
- ❌ "Empower users to"
- ❌ "Take your [X] to the next level"
- ❌ "Game-changing"
- ❌ "Paradigm shift"

**3. Focus on Real Benefits, Not Hype**
- Say what it actually does
- Explain the specific outcome
- Use concrete examples
- Skip the superlatives

**4. Simple Language, No Jargon**
- Avoid technical terms unless necessary
- Explain concepts clearly
- Use everyday words
- If you must use jargon, immediately explain it

### Voice Examples

**❌ BAD (Corporate/Hype)**
```
Revolutionize your workflow with our cutting-edge platform that 
empowers teams to leverage AI-driven insights for unprecedented 
productivity gains. Experience seamless collaboration at scale.
```

**✅ GOOD (Casual/Direct)**
```
Stop switching between apps. We built a tool that does the work 
you're tired of doing manually. Check off your tasks, and we'll 
handle the rest.
```

**❌ BAD (Buzzwords)**
```
Our innovative solution provides a best-in-class experience that 
transforms the way modern professionals synergize their daily 
operations.
```

**✅ GOOD (Simple/Clear)**
```
It's a to-do list that actually helps you get things done. 
Add a task, set a deadline, and we'll remind you when it matters.
```

**❌ BAD (Vague Benefits)**
```
Unlock your full potential and achieve more with less effort using 
our powerful suite of tools designed for success.
```

**✅ GOOD (Specific Benefits)**
```
Save 2 hours a day by automating the reports you manually create 
every morning. Just click a button and get a PDF in your inbox.
```

### Tone Spectrum

**Too Formal** ← **Sweet Spot** → **Too Casual**

❌ "Utilize our application to facilitate task completion"
✅ "Use our app to get your work done"
❌ "yo this app is lit af ngl"

**Aim for the middle**: Professional enough to be taken seriously, casual enough to feel human.

## Content Creation Guidelines

### Problem → Solution → Benefit Format

Every feature should be explained in this order:

1. **Problem**: What annoys the user?
2. **Solution**: How does this feature solve it?
3. **Benefit**: What's the end result?

**Example:**
- **Problem**: "Tired of copying and pasting data between spreadsheets?"
- **Solution**: "Import from anywhere with one click"
- **Benefit**: "Get back those 30 minutes you spend on data entry every day"

### Writing Principles

**Be specific, not generic:**
- ❌ "Save time"
- ✅ "Save 30 minutes every morning"

**Show, don't tell:**
- ❌ "Easy to use"
- ✅ "Add your first task in under 10 seconds"

**Lead with the outcome:**
- ❌ "Uses AI to analyze your data"
- ✅ "Get insights without staring at spreadsheets for hours"

**One idea per sentence:**
- ❌ "Our tool helps you manage tasks and collaborate with your team while tracking progress in real-time with built-in analytics"
- ✅ "Manage your tasks. Track progress. See what's working. All in one place."

## Content Templates

See `references/templates.md` for detailed templates for:
- Landing page feature sections
- Tweet threads
- Launch emails
- Product descriptions
- Update announcements

## Step 3: Generate Content

Once you've analyzed the codebase and understand the product:

1. **Identify the content type needed** (landing page, tweet, email, etc.)
2. **Load the appropriate template** from `references/templates.md`
3. **Fill in template with specifics** from codebase analysis
4. **Apply brand voice principles** to ensure casual, direct tone
5. **Review for buzzwords** and replace with simple language
6. **Check for specific benefits** not generic claims

## Content Type Selection

**Landing Page Sections**: When user needs to explain a feature on their website
- Use when: Building new feature pages, updating homepage
- Read: Main feature components, user flows
- Template: Problem → Solution → Benefit format

**Tweet Threads**: When launching a feature or product
- Use when: Announcing releases, building in public, sharing updates
- Read: New feature code, recent commits
- Template: Hook → Credibility → Value → CTA

**Launch Emails**: When emailing users about new features
- Use when: Feature releases, major updates
- Read: What's new, what problem it solves
- Template: Personal intro → Value prop → CTA

**Product Descriptions**: When explaining what the app does
- Use when: New to product, App Store listings, directories
- Read: Entire app structure, main value prop
- Template: One-liner → Who it's for → What it does → Why use it

## Quality Checklist

Before delivering marketing copy, verify:

- [ ] Read the codebase first (didn't ask user to explain)
- [ ] Understood what the app/feature actually does
- [ ] Identified specific user benefit
- [ ] Used casual, direct language
- [ ] Removed all buzzwords and corporate speak
- [ ] Made concrete claims (with numbers/specifics when possible)
- [ ] Used simple words (no unnecessary jargon)
- [ ] Followed problem → solution → benefit structure
- [ ] Kept sentences short and punchy
- [ ] Addressed reader as "you"

## Common Mistakes to Avoid

**1. Writing Before Reading Code**
❌ Don't: Ask user "what does your app do?"
✅ Do: Read the codebase and tell them what you discovered

**2. Generic Claims**
❌ "Makes your life easier"
✅ "Cuts your morning routine from 30 minutes to 5"

**3. Feature Lists Without Context**
❌ "Features: Task management, Real-time sync, AI insights"
✅ "Add a task on your phone. Check it off on your laptop. We keep everything in sync."

**4. Selling the Technology**
❌ "Powered by advanced AI algorithms"
✅ "Smart suggestions based on your work patterns"

**5. Vague Timesavers**
❌ "Save time and increase productivity"
✅ "Skip the 2-hour weekly report. We generate it automatically."

**6. Over-Explaining**
❌ "Utilizing our state-of-the-art infrastructure, we've architected a solution that..."
✅ "It works. Here's how:"

## Example: From Code to Copy

**Codebase Analysis:**
```typescript
// app/analyze/page.tsx
export default function AnalyzePage() {
  return (
    <div>
      <h1>Upload Your CSV</h1>
      <FileUpload onUpload={processData} />
      <Charts data={results} />
    </div>
  )
}

function processData(file) {
  // Parse CSV, generate insights, create visualizations
  const insights = analyzeData(file)
  const charts = generateCharts(insights)
  return { insights, charts }
}
```

**Analysis:**
- App name: DataSnap (from package.json)
- Function: Analyzes CSV files and creates visualizations
- User: People who work with spreadsheet data
- Problem: Manual data analysis is tedious
- Solution: Upload CSV, get automatic charts and insights
- Unique: Quick, no spreadsheet skills needed

**Marketing Copy (Landing Page):**

✅ **Good:**
```
Tired of building pivot tables?

Upload your CSV and we'll show you what matters. Charts, trends, 
and insights in 30 seconds. No formulas, no fiddling with Excel.

Stop spending Friday afternoons making reports. Upload once, 
download your charts, and go enjoy your weekend.
```

❌ **Bad:**
```
DataSnap revolutionizes data analytics with cutting-edge AI-powered 
insights. Our innovative platform empowers users to leverage their 
data assets and unlock unprecedented value through seamless 
visualization capabilities.
```

## Integration with Other Skills

**Works well with:**
- **Launch Planner**: After scoping MVP, write marketing copy for landing page
- **Design Guide**: Ensure marketing copy is visually presented well
- **Idea Validator**: Use market research to inform positioning

**Typical workflow:**
1. Build feature (Launch Planner → Claude Code)
2. Read codebase (Marketing Writer)
3. Generate marketing copy (Marketing Writer)
4. Create landing page section (Design Guide + Marketing Writer)
5. Write launch tweet thread (Marketing Writer)
6. Send launch email (Marketing Writer)
