# Variation Log

Tracks the last 5 deployed sites. Check this before building a new site.
**Rule:** No two consecutive sites use the same Hero variant AND same colour family.

Update this file after every Vercel deploy (Stage 3).

---

## Last 5 Deployed Sites

| # | Client ID | Trade | Hero | Services | Portfolio | Process | Testimonials | Colour Family | Font Pairing |
|---|-----------|-------|------|----------|-----------|---------|--------------|---------------|--------------|
| 1 | sclbuildersltd | Builders | Hero | Services | Portfolio | Process | Testimonials | Slate red | DM Serif + Inter |
| 2 | annieslandbuildersgroup | Builders | Hero | ServicesB | PortfolioB | ProcessB | TestimonialsB | Charcoal | DM Serif + Inter |
| 3 | precisionheatplumbing | Plumbing | Hero | Services | Portfolio | Process | Testimonials | Navy blue | DM Serif + Inter |
| 4 | — | — | — | — | — | — | — | — | — |
| 5 | — | — | — | — | — | — | — | — | — |

---

## How to Use

Before building a new site:
1. Look at row #1 (most recent)
2. Pick a Hero variant that's different from row #1
3. Pick a colour family that's different from row #1
4. Everything else can repeat — only Hero + colour need to vary

After deploying:
1. Shift rows down (delete row #5, move #4→#5, #3→#4, #2→#3, #1→#2)
2. Add new site as row #1

---

## Available Options (quick reference)

See `docs/VARIATION-GUIDE.md` for full details.

- **Hero variants:** Hero · HeroB · HeroC
- **Colour families:** Navy blue · Forest green · Slate red · Charcoal · Burnt orange · Deep teal
- **Font pairings:** DM Serif + Inter · Playfair + Lato · Montserrat + Open Sans
