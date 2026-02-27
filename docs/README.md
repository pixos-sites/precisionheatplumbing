# Multi-Preset Service Website Template

This repository is now a reusable one-page business website template with **build-time presets**.

Current preset family includes:
- `plumber`
- `electrician`

## Run Locally

Install dependencies:

```bash
npm install
```

Run plumber preset:

```bash
npm run dev:plumber
```

Run electrician preset:

```bash
npm run dev:electrician
```

If no preset is set, the app defaults to `plumber`.

## Build

Build plumber preset:

```bash
npm run build:plumber
```

Build electrician preset:

```bash
npm run build:electrician
```

Generic build still works:

```bash
npm run build
```

## Preset Architecture

- Preset types: `/Users/gavinpiggot/Desktop/Master_Template/src/config/template.types.ts`
- Presets: `/Users/gavinpiggot/Desktop/Master_Template/src/config/presets/`
- Selector: `/Users/gavinpiggot/Desktop/Master_Template/src/config/getActivePreset.ts`

All business-facing copy, contact info, services, portfolio, testimonials, and key brand tokens are loaded from the active preset.

For adding or editing presets, see `/Users/gavinpiggot/Desktop/Master_Template/PRESETS.md`.
