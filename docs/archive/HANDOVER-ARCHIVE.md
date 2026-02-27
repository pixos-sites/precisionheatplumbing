# HANDOVER.md

Shared changelog between Claude and Codex.
Read this at the start of every session alongside AGENTS.md and WORKFLOW.md.
Any AI that makes a structural or process change outside of normal client work must log it here.

---

## Log Format

Each entry should include:
- Date
- Made by (Claude / Codex)
- What changed and why
- Anything the other AI needs to know

---

## Entries

---

### February 2026 — Codex

**Preset template now supports optional contact/reviews/map value-add features**

- Added optional `enhancements` fields to the preset type (`BusinessPreset`) for:
  - WhatsApp click-to-chat (with prefilled message + custom labels)
  - Reviews link (e.g. Google Reviews)
  - Google Maps embed (contact section iframe)
- Updated shared template components to use these features only when present:
  - `StickyCTA` can route the mobile message button to WhatsApp
  - `ContactForm` can show WhatsApp/reviews quick links and an optional map embed
  - `Footer` can show a WhatsApp contact link and make the reviews text clickable
- Existing client presets remain compatible because all new fields are optional
- Added an example implementation in `src/config/presets/plumber.ts` to copy/adapt for future client presets

**Why**

- User wants repeatable, preset-friendly "value add" features that improve enquiries without custom one-off builds
- These are easy to switch on/off per client and fit the existing preset workflow

---

### February 2026 — Codex

**Workflow updated to allow Figma Make as an approved import path (alongside presets)**

- Updated `WORKFLOW.md` from preset-only language to a dual-path build process:
  - `Preset build` (default, long-term system)
  - `Figma Make import` (allowed alternative for speed/variation)
- Kept the existing structure-first rule (`one-page` vs `multi-page`) and layout-reference approach in place
- Added path-specific build/refinement/deploy commands for:
  - Root template presets (`npm run dev:<clientid>`, `npm run build:<clientid>`)
  - Standalone imported sites (`cd clients/<clientname> && npm run dev/build`)
- Clarified source of truth rule:
  - Preset path = preset file
  - Figma Make import path = standalone client folder
- Updated `docs/CHECKLIST.md` with a new **Figma Make Import (Before First Edit)** section to catch:
  - Wrong download folder
  - Duplicate client copies
  - Missing must-have contact details
  - Build/setup failures before refinement
  - Placeholder links/forms/content before deploy

**Why**

- User wants faster variation/options at this stage, with Figma Make used to get near-ready sites quickly
- Long-term plan is still to phase Figma Make out and rely more on local template/preset builds as the layout library grows

**What the other AI needs to know**

- Figma Make is now allowed again, but only as a controlled import workflow
- Deployment discipline stays the same: use `docs/DEPLOYMENT-MAP.md`, `docs/CHECKLIST.md`, and keep one client = one repo = one Vercel project = one local working folder

---

### February 2026 — Claude

**Folder structure reorganised**

The root of Master_Template was messy and hard to navigate. The following changes were made:

- Created `clients/` folder — all client websites live here
- Moved PolBuilt from `Figma Builds/PolBuilt/` to `clients/polbuilt/`
- Created `clients/bsbuilders/` with a `BRIEF.md` summarising the BS Builders project
- Created `docs/` folder — all reference/documentation .md files moved here
- Deleted `Figma Builds/` folder — no longer needed
- Deleted `QUICK-CHECKLIST.md` and `TEMPLATE-GUIDE.md` — outdated, conflicted with preset system

**Workflow overhauled**

- `WORKFLOW.md` fully rewritten as a single master document (Version 3.0)
- Old workflow referenced Figma-led builds and manual find-and-replace — both retired
- New workflow is preset-only, chat-based intake, no forms to fill
- `BRIEF-TEMPLATE.md` updated to reflect the new approach
- `AGENTS.md` updated to point to `WORKFLOW.md` and `HANDOVER.md`

**Key decisions made this session**

- Figma Make is retired — not used going forward
- All new client sites are built using the preset system only
- If a new section or component is needed, it gets built into the template — no standalone Figma builds
- PolBuilt is a legacy Figma build and lives in `clients/polbuilt/` — it is not preset-based
- BS Builders was built using the old find-and-replace method — no preset file exists. Brief is saved at `clients/bsbuilders/BRIEF.md`. If re-approached, build a proper preset from scratch using that brief.
- BS Builders Vercel deployment has been retired (client did not reply to cold outreach)

**Current folder structure**

```
Master_Template/
  AGENTS.md               ← read first every session
  WORKFLOW.md             ← master process
  HANDOVER.md             ← this file
  clients/
    polbuilt/             ← PolBuilt site (legacy Figma build, standalone)
    bsbuilders/
      BRIEF.md            ← BS Builders brief and project notes
  src/                    ← template engine (preset system)
    config/
      presets/            ← one .ts file per client
        plumber.ts        ← demo preset
        electrician.ts    ← demo preset
        index.ts          ← preset registry
      template.types.ts   ← type definitions, do not edit
  docs/                   ← reference docs, not needed day to day
    BRIEF-TEMPLATE.md     ← template for new client briefs
  public/
  node_modules/
  package.json
```

---

### February 2026 — Claude (new client sites: Welsh Builds, Anniesland, SCL Builders)

**Three new client demo sites built**

All three sites were built by copying `clients/polbuilt` as a base, removing `node_modules/`, `dist/`, and `.git/`, then fully rewriting all components. Each site has been build-checked (clean) and previewed on a local dev server.

**clients/welshbuilds/** — Welsh Builds (D Harvie Builders Ltd)
- Business: Concrete & brick garages, garden buildings, garage doors, driveways & patios, asbestos roof removal
- Address: Uplawmoor, Glasgow G78 4AB
- Phone: 01505 850501 / 0773 338 8538 | Email: info@welshbuilds.co.uk
- Colours: `NAVY = "#0F1535"`, `RED = "#CC0000"`
- Logo: Navy box with "W" in red, "Welsh Builds" in Playfair Display
- Routes: Home, Services, Gallery, Testimonials, Contact (no Blog, Recruitment, Commercial)
- Web3Forms subject: "New Enquiry from Welsh Builds Website"
- Dev server: port 5180
- Build: ✅ clean

**clients/anniesland/** — Anniesland Builders Group Ltd
- Business: Extensions, loft conversions, bathrooms, kitchens, damp proofing, roofing
- Address: 179 Duntocher Road, Clydebank G81 3NE
- Phone: 0141 954 2265 | Email: info@annieslandbuildersgroup.co.uk
- Colours: `NAVY = "#1B2A4A"`, `GOLD = "#D4A017"`
- Logo: Navy box with "AB" in gold, "Anniesland Builders Group" in Playfair
- Routes: Home, Services, Gallery, Testimonials, Contact (no Blog, Recruitment, Commercial)
- Web3Forms subject: "New Enquiry from Anniesland Builders Website"
- Dev server: port 5181
- Build: ✅ clean

**clients/sclbuilders/** — SCL Builders
- Business: New builds, extensions, loft conversions, kitchens & bathrooms, landscaping, design & build
- Address: 116 High Blantyre Road, Hamilton ML3 9HW
- Phone: 07866 939663 / 01698 711162 | Email: stephen@sclbuilders.com
- Colours: `NAVY = "#1B2A4A"`, `GOLD = "#D4A017"`
- Logo: Navy box with "SCL" in gold, "SCL Builders · Hamilton · Est. 30+ Years"
- Key USPs: Construction Line Gold, 30+ years, CSCS/SMSTS/NVQ/City & Guilds, Disclosure Scotland verified
- Hero tagline: *"If you can think it, we can build it."*
- Routes: Home, Services, Gallery, Testimonials, Contact (no Blog, Recruitment, Commercial)
- Web3Forms subject: "New Enquiry from SCL Builders Website"
- Dev server: port 5182
- Build: ✅ clean

**Images updated**

All three new client sites had their placeholder PolBuilt images replaced with relevant Unsplash stock photos:
- Welsh Builds: garage exteriors, driveways/patios, home offices, garden buildings, roofing
- Anniesland: house extensions, loft conversions, modern bathrooms, kitchens, roofing
- SCL Builders: new builds, extensions, loft bedrooms, kitchens, landscaping, construction teams
- Images downloaded directly to each client's `public/images/` folder, replacing the old PolBuilt set
- `logo-polbuilt.png` still present in each folder but not used — safe to ignore

**PolBuilt**
- Deployed to Vercel at `polbuilt-demo.vercel.app`
- React moved from `peerDependencies` to `dependencies` in `package.json` to fix Vercel build failure
- Duplicate Vercel project (`polbuilt-website`) deleted — only one project now connected to the repo
- No changes made to PolBuilt content this session

**Current clients folder structure**

```
clients/
  polbuilt/         ← deployed to polbuilt-demo.vercel.app
  welshbuilds/      ← built, images updated, NOT yet deployed
  anniesland/       ← built, images updated, NOT yet deployed
  sclbuilders/      ← built, images updated, NOT yet deployed
  bsbuilders/
    BRIEF.md        ← brief only, no site built
```

**Pending / next steps**
- Deploy Welsh Builds, Anniesland, and SCL Builders to GitHub + Vercel
- Send cold email to PolBuilt (drafted, user sending separately)
- Images for Welsh Builds may need further refinement before final deploy (user flagged)
- Consider creating `BRIEF.md` files for each new client folder

---

### February 2026 — Claude (follow-up cleanup)

**Further folders removed**

After the initial restructure, three more items were removed:

- `guidelines/` — leftover from Figma Make, placeholder content only, never used
- `dist/` — auto-generated build output, not needed in the folder permanently. Recreates itself when `npm run build` is run.
- `CLIENT-BRIEFS/` — folder removed. `BRIEF-TEMPLATE.md` moved into `docs/`. All actual client briefs live in `clients/<clientname>/BRIEF.md`.

**Current clean root**

```
Master_Template/
  AGENTS.md
  WORKFLOW.md
  HANDOVER.md
  clients/
  docs/
  src/
  public/
  node_modules/
  index.html
  package.json
  package-lock.json
  postcss.config.mjs
  vite.config.ts
```

---

### February 2026 — Codex

**Workflow brief path aligned with new folder structure**

- Updated `WORKFLOW.md` to replace outdated `CLIENT-BRIEFS/<ClientName>-BRIEF.md` references
- New canonical brief location in workflow is now `clients/<clientname>/BRIEF.md`, matching `AGENTS.md` and current repo structure
- This removes the process mismatch Claude flagged in the handover cleanup changes

---

### February 2026 — Codex

**Structure-first layout rule added to workflow**

- Updated `WORKFLOW.md` to require choosing site structure first (`one-page` vs `multi-page`) before building content
- Added current layout reference points:
  - `BS Builders` style for one-page sites
  - `PolBuilt` style for multi-page sites
- Clarified these are reference starting points only (not hard limits)
- Workflow now explicitly allows the layout reference library to grow as more strong client layouts are created

---

### February 2026 — Codex

**Preset colour system made more flexible (fill vs text/icon colours)**

- Updated the preset template system to support separate colour roles in `BrandTokens`:
  - `accent` (fill colour)
  - `accentInk` (text/icon accent colour, optional)
  - `accentOnAccent` (text colour shown on accent fills, optional)
- Wired new CSS variables in `src/app/App.tsx` with safe fallbacks so older presets still work unchanged
- Updated shared components (buttons, section labels, icons, process badges, service links, etc.) to use the split colour roles
- This was needed during Anniesland one-page refinement so blue/yellow branding could be used more cleanly without one accent colour being reused everywhere

---

### February 2026 — Codex

**Added deployment map + pre-edit/deploy checklist (to prevent wrong repo/folder confusion)**

- Added `docs/DEPLOYMENT-MAP.md` with current live demo mapping for:
  - SCL Builders
  - Anniesland Builders Group
  - Welsh Builds
  - PolBuilt
- Added `docs/CHECKLIST.md` with:
  - Before Edit checks
  - Before Deploy/Redeploy checks
  - Final demo QA checks
- Why: A review session got messy due to multiple local copies (template app vs standalone client folders vs live repos) and this now gives a plain-language source of truth before edits/redeploys
- Important note for future sessions:
  - If `FlowFix Plumbing` appears locally, that usually means the root template app was started instead of the intended client site

**What the other AI needs to know**

- Existing presets (`plumber`, `electrician`) still build without changes because the new colour fields are optional
- New presets can now do combinations like yellow buttons + blue button text/icons without further component edits

---
