# SESSION-START.md

Quick startup for Claude and Codex. Read this only. Full process in `WORKFLOW.md`.

---

## Starting a new site

```
New site: [trade], [business name], [location], [their website URL if any]
```

Optionally add the route. If not specified, AI picks the best one.

## The four build routes

| Route | When |
|-------|------|
| **A — Clone** | Copy an existing client site, adapt for new business |
| **B — Catalogue** | Build fresh — pick sections, colours, layout from catalogue |
| **C — Figma Make** | Import Figma Make files for a completely new look |
| **D — AI Custom** | Claude/Codex building or modifying frontend directly |

## Rules (always)

- One client per session — never touch another client's files
- Never use Unsplash URLs — use local image bank (`docs/IMAGES.md`)
- Never guess phone/email/business name — mark as `// PLACEHOLDER`
- Confirm build passes before reporting done
- Save brief to `clients/<clientid>/BRIEF.md`
- Route B only: update `docs/VARIATION-LOG.md` after deploy

## On startup (existing client)

Read `clients/<clientid>/BRIEF.md` first. Nothing else.

## Demo URLs

All demos use `pixos.design` — e.g. `mikeswift.pixos.design`
After deploy → Vercel project settings → Domains → add the subdomain.

## Outreach

WhatsApp Business only. No emails.

## Key docs

| Doc | Use for |
|-----|---------|
| `WORKFLOW.md` | Full process — read when needed |
| `docs/IMAGES.md` | Which images to use per trade |
| `docs/VARIATION-GUIDE.md` | Sections, colours, fonts (Route B) |
| `docs/VARIATION-LOG.md` | Last 5 Route B builds — avoid repeating same look |
| `docs/CODEX-PROTOCOL.md` | Codex safe rules |
| `clients/PRIORITY-QUEUE.md` | Which clients to work on first |

## Codex only

Run `git remote -v` first. Output must show `Master_Template`. Then read `docs/CODEX-PROTOCOL.md`.
