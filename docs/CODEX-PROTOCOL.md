# Codex Protocol — Safe Rules

Read this every time you start a Codex session on this project.

---

## Step 1 — Confirm your location

Everything lives inside one folder: `Master_Template`. There is no separate client repo.

Run:
```bash
git remote -v
```
Output must show `Master_Template`. If it shows anything else — **STOP immediately.**

Then confirm where you need to work:
- **Preset client** → stay at `Master_Template/` root. Edit `src/config/presets/<clientid>.ts`
- **Standalone client** → work inside `clients/<clientname>/`. Run all commands from inside that folder.

If you are unsure which type a client is: check if `clients/<clientname>/package.json` exists. If yes → standalone. If no → preset.

---

## Step 2 — Confirm which client you're working on

The user will tell you the client name (e.g., `mikeswiftroofing`). Before editing anything:
- Confirm the client ID out loud
- Read `clients/<clientid>/BRIEF.md` first
- Do not proceed without reading the brief

---

## Files You Are Allowed to Edit

| File | Condition |
|------|-----------|
| `src/config/presets/<clientid>.ts` | Only the **named client** — no other presets |
| `src/config/presets/index.ts` | Only to add a new preset registration |
| `package.json` | Only to add `dev:<clientid>` and `build:<clientid>` scripts |
| `clients/<clientid>/BRIEF.md` | Only the named client's brief |
| `docs/VARIATION-LOG.md` | Only to log a new deploy |

---

## Files You Must NEVER Edit

| File / Folder | Reason |
|--------------|--------|
| `src/app/components/` | Shared components — changes break all client sites |
| `src/config/template.types.ts` | Type definitions — do not touch |
| `src/styles/` | Global styles — do not touch |
| `vite.config.ts` | Build config — do not touch |
| `index.html` | Root HTML — do not touch |
| Any other client's preset | You only have permission for the named client |

If a task requires editing any file on the NEVER list — **STOP. Ask the user before proceeding.**

---

## What to Do If Something Goes Wrong

- Build fails: report the exact error, do not guess or brute-force a fix
- Wrong file edited: report immediately, do not try to hide or revert silently
- Unsure which file to edit: ask — never guess
- Unexpected file state: report — never overwrite without asking

---

## Reporting Format

Always report in bullet points:

```
- What was done
- Files changed (full path)
- Build result (pass / fail + error if fail)
- Placeholders added (count + which fields)
- What needs doing next
```

---

## Reminder

You are one of two AIs (Claude + Codex) working on the same codebase. Claude also edits files here. Do not assume your last edit is still the current state. Read the file before editing it.
