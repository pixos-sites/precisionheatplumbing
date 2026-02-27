# Master Workflow

Version: 3.1
Last Updated: February 2026

This is the single source of truth for every client project.
Follow this workflow identically whether you are working with Claude or Codex.

---

## What We Are Building

A productised web design service targeting tradespeople (plumbers, electricians, builders, roofers, landscapers, etc.).

The process:
1. Identify a potential client
2. Build their site (preset system or Figma Make import)
3. Deploy a live demo to Vercel
4. Cold email them with the link
5. Convert to a paying client at £700

No manual find-and-replace.
Use one of two approved build paths:
- Preset build (default) — build inside the template system using one preset file
- Figma Make import (allowed) — import a downloaded site into `clients/<clientname>/` as a standalone client project

Reason:
- Presets are the long-term system
- Figma Make is allowed at this stage to create more layout/style variation faster
- Over time, strong patterns can be rebuilt into the template system and reused locally

---

## The Preset System (How It Works)

Every client site is driven by a single preset file located at:
`src/config/presets/<clientid>.ts`

This file contains everything:
- Company name, phone, email, location
- Brand colour
- All section copy (hero, services, portfolio, testimonials, etc.)
- Contact form options
- Footer content

The components never change. Only the preset file changes per client.

To add a new client:
1. Create `src/config/presets/<clientid>.ts`
2. Register it in `src/config/presets/index.ts`
3. Add `dev:<clientid>` and `build:<clientid>` scripts to `package.json`

---

## Stage 1 — Intake (Chat-Based Brief)

You do not fill in a form. You start a conversation.

Tell the AI one of the following to kick things off:
- "New client — [trade] in [location]"
- "I want to build a site for a [trade] in [location]"
- "Cold outreach — [trade], [location], here's what I know: ..."

The AI will then ask questions to fill in any gaps. Questions are asked in plain language, one topic at a time. You answer in plain language.

### What the AI needs before building:

**Must have (AI will ask if missing):**
- Business name
- Trade / business type
- Town, city, or region
- Phone number
- Email address
- Primary brand colour (or AI suggests one based on trade)
- Main services (up to 6)

**Nice to have (AI uses best judgement if missing):**
- Hero headline direction
- Portfolio project names and locations
- Testimonials (real or placeholder)
- Key trust points (years trading, accreditations, guarantee)
- Any specific copy direction

**If building for cold outreach (no client contact yet):**
- Business name and trade is enough to start
- AI generates plausible placeholder content
- All placeholder content is clearly marked in the preset file with a comment: `// PLACEHOLDER`

Once intake is complete the AI saves the brief to:
`clients/<clientname>/BRIEF.md`

---

## Stage 2 — Build

Before building, choose the build path:
- `Preset build` (default)
- `Figma Make import` (allowed alternative)

### Decide Structure First (Before Building)

Before writing or editing the client site, decide the site structure/layout type:
- `One-page` site
- `Multi-page` site

Then choose the best existing layout reference as the starting point.

Current reference points:
- `BS Builders` style = strong one-page layout reference
- `PolBuilt` style = strong multi-page layout reference

Important:
- These are starting references, not permanent limits
- As more client sites are built, the library of layout references should grow
- The AI should choose the best fit for the client first, then build from that structure
- Do not start building content before the structure choice is clear

### Path A — Preset Build (Default)

Steps the AI takes:
1. Creates `src/config/presets/<clientid>.ts` using the brief
2. Registers it in `src/config/presets/index.ts`
3. Adds `dev:<clientid>` and `build:<clientid>` scripts to `package.json`
4. Confirms the build runs without errors

Preset path rules:
- Do not touch component files unless explicitly instructed
- All placeholder content in the preset file must be marked `// PLACEHOLDER`

### Path B — Figma Make Import (Allowed Alternative)

Use this when speed/variation is more important than strict preset reuse for that client.

Steps the AI takes:
1. Take the downloaded Figma Make files from the user-provided folder
2. Import them into `clients/<clientname>/` (standalone client project)
3. Fix build/setup issues as needed so the project runs locally
4. Replace or flag obvious placeholder content (mark placeholders clearly in editable content files)
5. Confirm the build runs without errors

Figma import path rules:
- Treat the imported site as a standalone client project unless explicitly rebuilding it as a preset
- Keep changes focused on cleanup, contact details, refinement, and deploy readiness unless bigger changes are requested
- Do not mix the imported client with the root template app files unless explicitly planned

Both paths:
- Save the brief to `clients/<clientname>/BRIEF.md`
- Confirm the correct folder/repo before edits (use `docs/DEPLOYMENT-MAP.md` and `docs/CHECKLIST.md`)

The AI reports back in plain language:
- Which build path was used (`preset` or `Figma Make import`)
- What was built/imported
- Any placeholders used and why
- Anything that needs your input before refinement

---

## Stage 3 — Refinement (Up to 3 Rounds)

You review the site locally using the correct dev command for that client/project.

Examples:
```bash
# Preset build
npm run dev:<clientid>

# Standalone imported site
cd clients/<clientname> && npm run dev
```

Feed changes back in plain language. Examples:
- "Change the headline to X"
- "Swap service 3 for roofing"
- "The colour feels too dark, try a lighter shade"
- "Add a trust point about being family-run"

Refinement rules:
- Preset path: update the preset file only
- Figma Make import path: update only the imported client project files (no root template edits unless explicitly requested)

Rounds:
- Round 1: Your initial review after first build
- Round 2: Follow-up changes
- Round 3: Final polish before deploy

After Round 3 the site should be ready to deploy. If it is not, flag what is still outstanding before proceeding.

---

## Stage 4 — Deploy

When the site is approved for demo:

1. Run the production build for the correct path:
```bash
# Preset build
npm run build:<clientid>

# Standalone imported site
cd clients/<clientname> && npm run build
```

2. Deploy to Vercel (import from GitHub or Vercel CLI)

3. Confirm the live URL works on desktop and mobile

4. Update `clients/<clientname>/BRIEF.md` with the Vercel URL

The AI confirms:
- Build passed with no errors
- Contact details are correct on the live site
- Mobile layout is intact

---

## Stage 5 — Cold Outreach

Once the demo is live, send the cold email.

The email should:
- Be short (4-6 sentences max)
- Reference their business by name
- Lead with the demo link
- State the price clearly (£700)
- Have one clear call to action (reply or call)

If no reply within 3-5 days, follow up once.

---

## Stage 6 — Client Converts

If the client says yes:

- [ ] Collect any real photos or updated content
- [ ] Replace placeholders in the preset file
- [ ] Final build and deploy to production
- [ ] Transfer Vercel access or connect custom domain
- [ ] Send handover note (how to contact you if anything needs changing)
- [ ] Collect payment (£700)
- [ ] Request a Google review or testimonial
- [ ] Update `clients/<clientname>/BRIEF.md` with final status

---

## Rules for the AI (Claude and Codex)

1. Never edit component files unless explicitly instructed.
2. Never guess on phone number, email, or business name — always ask.
3. Always confirm build passes before reporting done.
4. Report in plain language — no jargon.
5. If something is a placeholder, mark it clearly (`// PLACEHOLDER` in preset files; clear placeholder marking/comment in imported client files where practical).
6. Save the brief to `clients/<clientname>/BRIEF.md` at the end of intake.
7. One source of truth per client:
   - Preset path: one preset file (`src/config/presets/<clientid>.ts`)
   - Figma Make import path: one standalone client folder (`clients/<clientname>/`)
8. If picking up a project mid-way, read `clients/<clientname>/BRIEF.md` first.
9. Decide site structure first (`one-page` vs `multi-page`) before building content.
10. Start from the best layout reference available (currently `BS Builders` for one-page and `PolBuilt` for multi-page), but keep adding new layout references over time as better examples are created.

---

## File Reference

| File | Purpose |
|------|---------|
| `src/config/presets/<clientid>.ts` | All client content — the only file created per client |
| `src/config/presets/index.ts` | Preset registry — updated when new preset is added |
| `src/config/template.types.ts` | Type definitions — do not edit |
| `package.json` | Dev and build scripts — updated when new preset is added |
| `clients/<clientname>/` | Standalone client project (used for Figma Make imports) |
| `clients/<clientname>/BRIEF.md` | Saved brief — source of truth for project context |

---

## Existing Presets (Demo Sites)

| ID | Business | Trade | Location |
|----|----------|-------|----------|
| `plumber` | FlowFix Plumbing | Plumbing | London |
| `electrician` | Northline Electrical | Electrical | Manchester |
| `bsbuilders` | BS Builders Ltd | Construction | Glasgow |

---

## Build Commands Reference

```bash
# Preset build: run locally
npm run dev:<clientid>

# Preset build: production build
npm run build:<clientid>

# Standalone imported site: run locally
cd clients/<clientname> && npm run dev

# Standalone imported site: production build
cd clients/<clientname> && npm run build

# Existing presets
npm run dev:plumber
npm run dev:electrician
```
