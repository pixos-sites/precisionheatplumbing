# Variation Guide — Section Catalogue, Colours & Fonts

Use this to build sites that look distinct from each other. All combinations below are mobile-tested and safe to deploy without manual testing.

Browse visually with: `npm run dev:catalogue`

---

## Section Catalogue

### Standard One-Page Structure

```
Navbar
Hero [A / B / C]
TrustBar
Services [A / B]
Process [A / B]
Portfolio [A / B]
WhyChooseUs
Testimonials [A / B]
ContactForm
Footer
StickyCTA (always included, mobile sticky call button)
```

All sections are required. The variants change the visual layout. Mix freely.

---

### Hero Variants

| Variant | Component | Description |
|---------|-----------|-------------|
| **Hero A** | `Hero` | Full-bleed image, text left-aligned, strong overlay, primary + secondary CTA buttons |
| **Hero B** | `HeroB` | Split layout — image right, content left, lighter feel |
| **Hero C** | `HeroC` | Centred text over image, badge + star rating prominent |

**Trade pairings (recommendation):**
- Plumbing / Gas → Hero A (dramatic, emergency feel)
- Builders / Construction → Hero B or C (project showcase)
- Electrical → Hero A or C
- Roofing → Hero A (strong image)
- Landscaping → Hero B or C (softer, outdoor feel)

---

### Services Variants

| Variant | Component | Description |
|---------|-----------|-------------|
| **Services A** | `Services` | Card grid, icon + title + description per service |
| **Services B** | `ServicesB` | List layout with larger descriptions, better for fewer services |

---

### Portfolio Variants

| Variant | Component | Description |
|---------|-----------|-------------|
| **Portfolio A** | `Portfolio` | Photo grid, project name + location overlaid |
| **Portfolio B** | `PortfolioB` | Carousel/slider layout, better for 3-5 projects |

---

### Process Variants

| Variant | Component | Description |
|---------|-----------|-------------|
| **Process A** | `Process` | Numbered steps horizontal, clean and minimal |
| **Process B** | `ProcessB` | Vertical timeline style, works well on mobile |

---

### Testimonials Variants

| Variant | Component | Description |
|---------|-----------|-------------|
| **Testimonials A** | `Testimonials` | Quote cards in a grid |
| **Testimonials B** | `TestimonialsB` | Single featured quote with rotating names |

---

## Colour Palettes

Always set these four values in the preset `brand` object:

```ts
accent: "",         // Primary button + highlight colour
accentHover: "",    // Slightly darker hover state
accentSoft: "",     // Light tinted background (sections)
```

### Navy Blue (professional, plumbing, electrical)
```ts
accent: "#1E40AF",
accentHover: "#1A3690",
accentSoft: "#DBEAFE",
heroOverlayStart: "rgba(15, 23, 42, 0.9)",
heroOverlayMid: "rgba(15, 23, 42, 0.68)",
heroOverlayEnd: "rgba(15, 23, 42, 0.35)",
```

### Forest Green (landscaping, eco trades)
```ts
accent: "#166534",
accentHover: "#14532D",
accentSoft: "#DCFCE7",
heroOverlayStart: "rgba(5, 46, 22, 0.88)",
heroOverlayMid: "rgba(5, 46, 22, 0.62)",
heroOverlayEnd: "rgba(5, 46, 22, 0.30)",
```

### Slate Red (builders, roofers, tradespeople)
```ts
accent: "#991B1B",
accentHover: "#7F1D1D",
accentSoft: "#FEE2E2",
heroOverlayStart: "rgba(28, 10, 10, 0.90)",
heroOverlayMid: "rgba(28, 10, 10, 0.65)",
heroOverlayEnd: "rgba(28, 10, 10, 0.32)",
```

### Charcoal (premium, joinery, bespoke)
```ts
accent: "#374151",
accentHover: "#1F2937",
accentSoft: "#F3F4F6",
heroOverlayStart: "rgba(17, 24, 39, 0.92)",
heroOverlayMid: "rgba(17, 24, 39, 0.68)",
heroOverlayEnd: "rgba(17, 24, 39, 0.35)",
```

### Burnt Orange (energy, gas, heating)
```ts
accent: "#C2410C",
accentHover: "#9A3412",
accentSoft: "#FFEDD5",
heroOverlayStart: "rgba(67, 20, 7, 0.90)",
heroOverlayMid: "rgba(67, 20, 7, 0.64)",
heroOverlayEnd: "rgba(67, 20, 7, 0.30)",
```

### Deep Teal (electrical, smart home, modern)
```ts
accent: "#0F766E",
accentHover: "#0D6B64",
accentSoft: "#CCFBF1",
heroOverlayStart: "rgba(4, 47, 46, 0.90)",
heroOverlayMid: "rgba(4, 47, 46, 0.64)",
heroOverlayEnd: "rgba(4, 47, 46, 0.30)",
```

---

## Font Pairings

Set both values in the preset `brand` object:

```ts
fontHeading: "",    // Display font for section titles
fontBody: "",       // Body text font
```

### Pairing 1 — DM Serif + Inter (classic, established)
```ts
fontHeading: "'DM Serif Display', serif",
fontBody: "'Inter', sans-serif",
```

### Pairing 2 — Playfair + Lato (premium, traditional)
```ts
fontHeading: "'Playfair Display', serif",
fontBody: "'Lato', sans-serif",
```

### Pairing 3 — Montserrat + Open Sans (modern, clean)
```ts
fontHeading: "'Montserrat', sans-serif",
fontBody: "'Open Sans', sans-serif",
```

---

## Quick Decision Matrix

| Trade | Recommended Colour | Recommended Hero | Notes |
|-------|--------------------|-----------------|-------|
| Plumbing / Gas | Navy blue or Burnt orange | Hero A | Emergency feel, bold |
| Builders | Slate red or Charcoal | Hero B or C | Project-focused |
| Electrical | Deep teal or Navy blue | Hero A or C | Technical, trustworthy |
| Roofing | Slate red or Charcoal | Hero A | Strong, reliable |
| Landscaping | Forest green | Hero B | Outdoors, fresh |
| Joinery | Charcoal | Hero B or C | Premium, craft |
| Plastering | Charcoal or Slate red | Hero A | Solid, no-nonsense |

Always check `docs/VARIATION-LOG.md` to avoid repeating the same combo as the last site built.
