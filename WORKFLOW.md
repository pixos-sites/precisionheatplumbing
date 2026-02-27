# Master Workflow

Version: 5.0
Last Updated: February 2026

Single source of truth for every client project. Claude and Codex follow this identically.

---

## What We're Building

Websites for tradespeople. Cold outreach at £700/site via WhatsApp Business.
Identify prospect → build demo → send WhatsApp link → convert.

Everything lives in one folder on your Mac: `Master_Template`.

---

## Starting a New Site

Tell the AI:
```
New site: [trade], [business name], [location], [their website URL if they have one]
```

Optionally add which route you want (see below). If you don't specify, the AI picks the best one.

---

## The Four Build Routes

| Route | When to use |
|-------|------------|
| **A — Clone** | An existing client site looks similar to what you need. Fastest. |
| **B — Catalogue** | Building fresh. Pick sections, colours, and layout from the catalogue. |
| **C — Figma Make** | You want a completely new look not in the catalogue. |
| **D — AI Custom** | Claude or Codex is making bespoke frontend changes. |

### Route A — Clone an Existing Site

Say: `"similar to lyonsplumbingheating"` or `"use the annieslandbuildersgroup layout"`

AI does:
1. Copies the named client site as the starting point
2. Swaps in the new business name, trade, contact details, services, images
3. Marks anything unknown as `// PLACEHOLDER`
4. Saves brief to `clients/<clientid>/BRIEF.md`
5. Confirms build passes

### Route B — Catalogue Build

Say: `"build fresh"` or `"use catalogue"`

AI does:
1. Checks `docs/VARIATION-LOG.md` — avoids repeating the same look as recent sites
2. Picks hero variant, services layout, colour palette, font pairing from `docs/VARIATION-GUIDE.md`
3. Picks images from `docs/IMAGES.md` based on trade
4. Builds the site from scratch using the template system
5. Saves brief to `clients/<clientid>/BRIEF.md`
6. Confirms build passes

Browse available sections and styles visually: `npm run dev:catalogue`

### Route C — Figma Make Import

Say: `"Figma import"` or provide the Figma Make files

AI does:
1. Imports the downloaded Figma Make files into `clients/<clientname>/`
2. Cleans up placeholder content, marks unknowns as `// PLACEHOLDER`
3. Saves brief to `clients/<clientname>/BRIEF.md`
4. Confirms build passes

### Route D — AI Custom

Say: `"build something different"` or describe what you want

AI does:
1. Discusses the approach before touching any files
2. Makes targeted changes to components or builds new ones
3. All other rules still apply

---

## Stage 1 — Intake

Before or during the build, AI collects:

**Must have (AI asks if missing):**
- Business name, trade, location
- Phone number
- Main services (up to 6)

**AI fills in with best guess + `// PLACEHOLDER`:**
- Email, hero copy, testimonials, portfolio items, trust points

If the prospect has a website: AI extracts what it can from it automatically.

Saved to: `clients/<clientid>/BRIEF.md`

---

## Stage 2 — Build

AI picks a route (or uses the one you specified) and builds the site.
Reports back:
- Which route was used and why
- Placeholder count and which fields need filling
- Which images were used

---

## Stage 3 — Deploy

Works the same regardless of build route.

**Preset site (Route B):**
```bash
npm run build:<clientid>         # from Master_Template root
vercel --name <clientid>         # create Vercel project, set VITE_PRESET=<clientid>
vercel --prod
```

**Standalone site (Routes A, C, D):**
```bash
cd clients/<clientname>
npm run build
vercel --name <clientname>
vercel --prod
```

After deploying (both types):
1. In Vercel project settings → Domains → add `<clientid>.pixos.design`
2. Confirm live URL works on desktop and mobile
3. Update `clients/<clientid>/BRIEF.md` with the pixos.design URL
4. Update `docs/VARIATION-LOG.md` with the combo used (Route B only)

---

## Stage 4 — WhatsApp Outreach (on request)

WhatsApp Business only. No cold emails.

AI generates:
- Opening message (2-3 sentences, their business name, demo URL, one clear hook)
- Follow-up (send after 2-3 days if no reply)

---

## Stage 5 — Refinement (up to 3 rounds)

Tell the AI what to change in plain language. Examples:
- "Change the headline to X"
- "Swap the hero colour to something darker"
- "Add a trust point about 10 years trading"

AI edits only the named client's files. Rebuilds and confirms build passes.

---

## Stage 6 — Client Converts

- [ ] Collect real photos → add to `public/images/<trade>/` (for next sites too)
- [ ] Replace all `// PLACEHOLDER` content
- [ ] Final build + deploy
- [ ] Add their real domain in Vercel project settings
- [ ] Collect £700
- [ ] Ask for a Google review or testimonial

---

## Deleting a Client (No Response)

If no response after 3-4 weeks:
- Tell AI: `"delete [clientname], no response"`
- AI deletes `clients/<clientname>/`
- You delete the Vercel project manually (30 seconds in Vercel dashboard)

---

## Rules for the AI

1. Pick the best build route — explain the choice before building.
2. Never edit another client's files. One client per session.
3. Never use Unsplash URLs — always use local image bank (`docs/IMAGES.md`).
4. Never guess phone, email, or business name — mark as `// PLACEHOLDER`.
5. Always confirm build passes before reporting done.
6. Save brief to `clients/<clientid>/BRIEF.md`.
7. Update `docs/VARIATION-LOG.md` after every Route B deploy.
8. Report in plain bullets. No jargon.
9. **Codex:** run `git remote -v` first. Read `docs/CODEX-PROTOCOL.md`.

---

## Key Reference Files

| File | What it's for |
|------|--------------|
| `SESSION-START.md` | Quick startup — read this first |
| `docs/IMAGES.md` | Which local images to use per trade |
| `docs/VARIATION-GUIDE.md` | Available sections, colours, fonts for Route B |
| `docs/VARIATION-LOG.md` | Last 5 Route B builds — check before building to avoid repeats |
| `docs/CODEX-PROTOCOL.md` | Codex-specific safe rules |
| `docs/DEPLOYMENT-MAP.md` | Live URLs per client |
| `docs/CHECKLIST.md` | Pre-deploy checks |

---

## Current Clients

| Client | Folder | Type |
|--------|--------|------|
| Precision Heat Plumbing | `src/config/presets/precisionheatplumbing.ts` | Preset (Route B) |
| Annies Land Builders Group | `src/config/presets/annieslandbuildersgroup.ts` + `clients/annieslandbuildersgroup/` | Preset (Route B) |
| SCL Builders Ltd | `src/config/presets/sclbuildersltd.ts` + `clients/sclbuilders/` | Preset (Route B) |
| + 21 standalone clients | `clients/<name>/` | Standalone (Routes A/C/D) |

Full list: `clients/` folder. Priority queue: `clients/PRIORITY-QUEUE.md`.
