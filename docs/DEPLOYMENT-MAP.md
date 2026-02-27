# Deployment Map (Live Client Demos)

Use this before editing or redeploying any client site.

The main rule:
- One client = one GitHub repo = one Vercel project = one local working folder

If there are old copies in `clients/`, treat them as archive/reference unless they are confirmed as the live repo source.

---

## Current Live Demo Map

### Graham's Gas

- Vercel project: `grahamsgas-demo`
- GitHub repo: `pixos-sites/GrahamsGas---website`
- Repo type: Standalone client repo
- Local live repo folder: `/Users/gavinpiggot/Desktop/grahamsgas-website`
- Local run command: `cd /Users/gavinpiggot/Desktop/grahamsgas-website && npm run dev`
- Build command: `cd /Users/gavinpiggot/Desktop/grahamsgas-website && npm run build`
- Notes:
  - `clients/grahamsgas` in `Master_Template` is the build/refinement copy used during setup, not the live repo source.
  - Demo URL: `https://grahamsgas-demo.vercel.app/`

### SCL Builders

- Vercel project: `sclbuilders-website`
- GitHub repo: `pixos-sites/sclbuilders-website`
- Repo type: Preset template repo (not the standalone `clients/sclbuilders` copy)
- Local run command (from repo root): `npm run dev:sclbuildersltd`
- Build command (from repo root): `npm run build:sclbuildersltd`
- Notes:
  - Do not use `/clients/sclbuilders` for live changes unless you are explicitly working on that standalone copy.
  - Live title + logo fixes were pushed to `sclbuilders-website` repo `main`.

### Anniesland Builders Group

- Vercel project: `annieslandbuildersgroup-website`
- GitHub repo: `pixos-sites/annieslandbuildersgroup-website`
- Repo type: Preset template repo
- Local run command (from repo root): `npm run dev:annieslandbuildersgroup`
- Build command (from repo root): `npm run build:annieslandbuildersgroup`
- Notes:
  - This repo currently uses branch `codex/annieslandbuildersgroup-demo` (not `main`).
  - Live tab title fix was pushed to that branch.

### Welsh Builds

- Vercel project: `welshbuilds-website`
- GitHub repo: `pixos-sites/welshbuilds-website`
- Repo type: Standalone client repo
- Local folder (current workspace copy): `clients/welshbuilds`
- Local run command: `cd clients/welshbuilds && npm run dev`
- Build command: `cd clients/welshbuilds && npm run build`
- Notes:
  - Demo title fix was pushed to `main`.

### PolBuilt

- Vercel project: `polbuilt-website-0660`
- GitHub repo: `pixos-sites/polbuilt-website`
- Repo type: Standalone client repo
- Local folder (current workspace copy): `clients/polbuilt`
- Local run command: `cd clients/polbuilt && npm run dev`
- Build command: `cd clients/polbuilt && npm run build`
- Notes:
  - Demo title fix was pushed to `main`.

---

## Quick Vercel Rules

- If code is pushed but site has not updated yet:
  - Open the correct Vercel project
  - Go to `Deployments`
  - Redeploy latest deployment

- If a change does not appear after redeploy:
  - Check the GitHub repo is the right one
  - Check the file changed in that repo (not a duplicate local copy)
  - Hard refresh the page (`Cmd + Shift + R`)

---

## Recommended Next Cleanup (before next client)

- Create a permanent local folder for each live client repo (matching repo name)
- Avoid editing duplicate copies of the same client site in multiple locations
- Keep `Master_Template` for template/preset work, not mixed live client edits unless it is the actual live repo
