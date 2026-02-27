# HANDOVER.md

Shared changelog between Claude and Codex.
This file is now a **recent changes log** to keep startup context light.
Older entries are archived in `docs/archive/HANDOVER-ARCHIVE.md`.

---

## Log Format

Each entry should include:
- Date
- Made by (Claude / Codex)
- What changed and why
- Anything the other AI needs to know

---

## Recent Entries

---

### February 2026 — Codex

**Sticky CTA now tracks mobile visual viewport (down-scroll gap fix attempt)**

- Updated `src/app/components/StickyCTA.tsx` to use `window.visualViewport` and dynamically adjust CTA vertical offset.
- Added React state/effect to compute offset:
  - `offset = max(0, window.innerHeight - (visualViewport.height + visualViewport.offsetTop))`
  - applied as `transform: translate3d(0, <offset>px, 0)` with `bottom: 0`
- This is intended to keep CTA visually pinned to the browser edge in both toolbar states (scroll up/down) instead of static CSS safe-area assumptions.
- Verified build: `npm run build:precisionheatplumbing` (pass)

**Why**

- User reported CTA is flush when scrolling up but still leaves a visible gap when scrolling down.
- Static `bottom`/safe-area CSS did not fully match dynamic mobile browser chrome behavior.

---

### February 2026 — Codex

**Sticky CTA flush-bottom adjustment for iOS scroll state**

- Updated `src/app/components/StickyCTA.tsx` to remove Tailwind `bottom-0` class and set explicit inline bottom offset:
  - `bottom: calc(env(safe-area-inset-bottom, 0px) * -1)`
- Kept fixed-bar rendering stabilization (`transform: translateZ(0)`).
- Verified build: `npm run build:precisionheatplumbing` (pass)

**Why**

- User still observed a visible content gap between sticky CTA and browser bar while scrolling down on mobile.
- Negative safe-area offset pulls the fixed CTA flush against the browser edge in that state.

---

### February 2026 — Codex

**Mobile contact icon/text alignment + sticky CTA bottom-gap fix**

- Updated contact info row alignment in `src/app/components/ContactForm.tsx`:
  - phone/email/WhatsApp/location rows now use `items-center sm:items-start`
  - fixes icon and label vertical alignment on mobile while preserving desktop two-line layout alignment
- Updated `src/app/components/StickyCTA.tsx`:
  - removed `paddingBottom: max(env(safe-area-inset-bottom), 0px)` from sticky CTA wrapper
  - keeps CTA tight to the browser bottom bar when scrolling down (no white gap)
  - retained `transform: translateZ(0)` for fixed-position stability
- Verified build: `npm run build:precisionheatplumbing` (pass)

**Why**

- User reported misaligned contact labels/icons and a visible space between bottom CTA and mobile address bar during downward scroll.

---

### February 2026 — Codex

**Follow-up mobile form + sticky CTA stability fix (Precision Heat Plumbing issue)**

- Root cause identified: form controls in `ContactForm` were set to `0.9375rem` (15px), which can trigger iOS zoom on focus and cause post-blur sideways drag/jitter behavior.
- Updated form control font sizes in `src/app/components/ContactForm.tsx` from `0.9375rem` to `1rem` (16px) for:
  - name input
  - phone input
  - email input
  - service select
  - message textarea
- Hardened bottom sticky mobile CTA in `src/app/components/StickyCTA.tsx` with:
  - `paddingBottom: max(env(safe-area-inset-bottom), 0px)` (safe area support)
  - `transform: translateZ(0)` (stabilizes fixed rendering on mobile Safari during/after keyboard interactions)
- Verified build: `npm run build:precisionheatplumbing` (pass)

**Why**

- User still observed horizontal movement after form interaction and sticky bottom CTA disappearing when scrolling back.
- This patch targets known iOS focus/viewport behavior around sub-16px inputs and fixed bottom elements.

---

### February 2026 — Codex

**Fixed mobile horizontal page drift after form blur/focus interactions**

- Updated global base styles in `src/styles/theme.css` to prevent horizontal overscroll:
  - `html`: `max-width: 100%`, `overflow-x: hidden`, `overscroll-behavior-x: none`
  - `body`: `max-width: 100%`, `overflow-x: hidden`, `overscroll-behavior-x: none`
- Verified with preset build: `npm run build:precisionheatplumbing` (pass)

**Why**

- On mobile, after tapping form fields and then tapping away, pages could become draggable side-to-side.
- Locking horizontal overflow at root level prevents that poor UX across preset sites.

---

### February 2026 — Codex

**Added Figma batch clone script + batch-safe Figma template refinements**

- Added `scripts/figma-batch-clone.mjs` to generate multiple Figma-import client folders from one JSON file + one refined base folder
- Script actions:
  - clones base Figma project into `clients/<clientid>/`
  - removes common bloat folders during copy (`node_modules`, `dist`, `.git`, `guidelines`)
  - generates `src/app/config.ts` from batch JSON per client
  - generates `clients/<clientid>/BRIEF.md`
  - adds `react` / `react-dom` to cloned `package.json` dependencies (if missing)
- Refined the Figma base folder (`/Users/gavinpiggot/Desktop/Website Clone`) to support batch data better:
  - dynamic accent colour from config
  - real map embed URL field (`map_embed_url`)
  - real reviews link field (`reviews_url`)
  - graceful handling when phone/WhatsApp is missing (hide buttons instead of breaking)

**Why**

- User is moving to a refine-once + populate-many outreach workflow
- Some research-batch leads have missing phone/WhatsApp, so the template needed safe fallbacks

---

### February 2026 — Codex

**Added shared batch JSON schema for campaign site generation**

- Added `docs/BATCH-JSON-SCHEMA.md` for Claude/Codex coordination when generating many outreach sites from one refined template/layout
- Defines:
  - top-level `campaign` metadata
  - per-business object structure
  - required vs optional fields
  - placeholder handling rules
  - example full payload
- Purpose: let Claude produce one JSON file and let Codex batch-populate presets/client sites consistently

**Why**

- User is moving toward a refine-once + populate-many workflow for outreach demos
- A shared schema reduces back-and-forth and prevents mapping mistakes

---

### February 2026 — Codex

**Startup context cleanup (reduced repeated reads / bloat)**

- Created `SESSION-START.md` as a short startup summary for current workflow/state
- Archived full handover history to `docs/archive/HANDOVER-ARCHIVE.md`
- Trimmed `HANDOVER.md` to recent entries only for faster session startup
- Updated `AGENTS.md` startup instructions to read the short files first and only read `WORKFLOW.md` fully when doing client work / checking process detail

**Why**

- Session startup context was getting too expensive due to repeated reads of long docs
- This keeps the process simple while preserving the full history in an archive

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

---

### February 2026 — Codex

**Workflow updated to allow Figma Make as an approved import path (alongside presets)**

- `Preset build` remains the default path
- `Figma Make import` is allowed for speed/variation as a standalone client project under `clients/<clientname>/`
- Follow `docs/DEPLOYMENT-MAP.md` and `docs/CHECKLIST.md` to avoid wrong-folder/redeploy mistakes

**What the other AI needs to know**

- Treat preset builds and imported clients as separate paths with separate source-of-truth files
