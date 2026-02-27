# Preset Workflow

Use presets to create business-specific sites without editing section component code.

## File Layout

- Types: `/Users/gavinpiggot/Desktop/Master_Template/src/config/template.types.ts`
- Existing presets: `/Users/gavinpiggot/Desktop/Master_Template/src/config/presets/plumber.ts`, `/Users/gavinpiggot/Desktop/Master_Template/src/config/presets/electrician.ts`
- Registry: `/Users/gavinpiggot/Desktop/Master_Template/src/config/presets/index.ts`
- Active selector: `/Users/gavinpiggot/Desktop/Master_Template/src/config/getActivePreset.ts`

## Run and Build

- `npm run dev:plumber`
- `npm run dev:electrician`
- `npm run build:plumber`
- `npm run build:electrician`

## Add a New Preset

1. Create a new file in `/Users/gavinpiggot/Desktop/Master_Template/src/config/presets/<id>.ts`.
2. Export a `BusinessPreset` object.
3. Add it to the registry in `/Users/gavinpiggot/Desktop/Master_Template/src/config/presets/index.ts`.
4. Add scripts in `/Users/gavinpiggot/Desktop/Master_Template/package.json` for `dev:<id>` and `build:<id>`.
5. Run a production build for the new preset.

## Required Content Checklist

- Brand tokens: accent colors and fonts.
- Contact: phone, email, location, service area, hours.
- Hero: badge, title lines, description, CTAs, image.
- Services: 6 cards with title, description, 3 features, image.
- Process: 4 steps with icon + description.
- Portfolio: categories + 6 projects.
- Why Choose Us: 6 value points.
- Testimonials: 4 items and average rating text/value.
- Contact form labels/options.
- Footer content and legal name.

## Images

Remote image URLs are supported by default.

Optional local images can be placed under:
- `/Users/gavinpiggot/Desktop/Master_Template/public/images/plumber/`
- `/Users/gavinpiggot/Desktop/Master_Template/public/images/electrician/`

Then reference them in preset data as `/images/<preset>/<filename>`.
