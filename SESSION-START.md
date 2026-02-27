# SESSION-START.md

Quick startup summary for Claude/Codex.
Read this first to reduce context use. Use `WORKFLOW.md` as the full source of truth when doing client work.

## Current Process (Short Version)

- Default build path: `Preset build` (single preset file drives the site)
- Allowed alternative: `Figma Make import` into `clients/<clientname>/` as a standalone client project
- Decide structure before building content:
  - `one-page` (BS Builders style reference)
  - `multi-page` (PolBuilt style reference)
- Save all client briefs to `clients/<clientname>/BRIEF.md`
- Confirm builds pass before reporting a stage complete
- If you change process/structure (not normal client edits), log it in `HANDOVER.md`

## Source Of Truth Rules

- Preset path: edit only `src/config/presets/<clientid>.ts` unless explicitly instructed otherwise
- Figma import path: edit only files inside `clients/<clientname>/` unless explicitly instructed otherwise
- Do not mix root template files and imported client project files by accident

## Current Useful Docs

- `WORKFLOW.md` = full process
- `HANDOVER.md` = recent changes only (trimmed for startup speed)
- `docs/archive/HANDOVER-ARCHIVE.md` = older handover history
- `docs/DEPLOYMENT-MAP.md` = which local folder/repo/live demo maps to which client
- `docs/CHECKLIST.md` = pre-edit / pre-deploy checks

## Current Template Notes (Important)

- Preset template supports optional `enhancements` fields for:
  - WhatsApp click-to-chat
  - Reviews link
  - Google Maps embed
- These are optional and do not break older presets
- Example implementation exists in `src/config/presets/plumber.ts`

## Context Efficiency Rules (Use By Default)

- Prefer targeted reads (`rg`, specific files, line ranges) over opening full files
- Read `WORKFLOW.md` fully only when starting client work or verifying process details
- Use `HANDOVER.md` for recent changes; only open the archive if needed
- Do not inspect unrelated client folders unless the task is about them
