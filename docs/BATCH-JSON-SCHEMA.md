# Batch JSON Schema (Campaign Site Generation)

Use this format when generating multiple client sites from one base design/template.
Claude can produce this JSON. Codex can read it and populate presets/client folders in batch.

---

## Purpose

This is for:
- One refined master layout/design
- Many businesses populated into that layout
- Fast outreach demo generation

This is **not** a replacement for the client brief. It is a batch input file.

---

## File Shape (Top Level)

```json
{
  "campaign": {
    "name": "Glasgow Builders Outreach Batch 01",
    "buildPath": "preset",
    "layoutType": "one-page",
    "baseTemplateId": "campaign-builder-v1",
    "defaults": {}
  },
  "businesses": []
}
```

### Top-level rules

- `campaign.name` = human-readable batch name
- `campaign.buildPath` = `"preset"` or `"figma-import"`
- `campaign.layoutType` = `"one-page"` or `"multi-page"`
- `campaign.baseTemplateId` = label for the refined master design used
- `campaign.defaults` = optional shared defaults applied to all businesses unless overridden
- `businesses` = array of client records

---

## Business Object Schema (Recommended)

Each item in `businesses` should use this structure:

```json
{
  "clientId": "examplebuilders",
  "businessName": "Example Builders Ltd",
  "trade": "builder",
  "location": {
    "town": "Paisley",
    "region": "Renfrewshire",
    "country": "Scotland",
    "display": "Paisley, Renfrewshire"
  },
  "contact": {
    "phoneDisplay": "0141 000 0000",
    "phoneHref": "tel:01410000000",
    "email": "hello@examplebuilders.co.uk",
    "emailHref": "mailto:hello@examplebuilders.co.uk",
    "whatsappNumber": "+441410000000"
  },
  "brand": {
    "primaryColor": "#1B2A4A",
    "secondaryColor": "#D4A017",
    "styleNotes": "Traditional, trustworthy, premium"
  },
  "services": [
    "House extensions",
    "Loft conversions",
    "Kitchens",
    "Bathrooms",
    "Roofing",
    "General building"
  ],
  "trustPoints": [
    "Family-run local business",
    "Free no-obligation quotes",
    "Fully insured"
  ],
  "socialProof": {
    "reviewsUrl": "https://...",
    "reviewRatingText": "4.9 rated on Google",
    "testimonialsStatus": "placeholder"
  },
  "serviceArea": {
    "line": "Serving Paisley, Glasgow and surrounding areas",
    "areas": ["Paisley", "Glasgow", "Renfrew", "Johnstone", "Bishopton"]
  },
  "maps": {
    "embedUrl": "https://www.google.com/maps?q=Paisley&output=embed"
  },
  "contentHints": {
    "heroAngle": "Reliable local building work with clear communication",
    "tone": "Straightforward and trustworthy"
  },
  "leadSource": {
    "sourceType": "research-batch",
    "notes": "No current website. Recent social activity. New Companies House listing."
  },
  "placeholders": {
    "allowed": true,
    "missingFields": ["email"]
  }
}
```

---

## Required vs Optional

### Required (minimum for batch generation)

- `clientId`
- `businessName`
- `trade`
- `location.display` (or enough location fields to build it)
- `contact.phoneDisplay`
- `contact.phoneHref`
- `brand.primaryColor` (or allow campaign default)
- `services` (1 to 6 items)

### Strongly recommended

- `contact.email` + `contact.emailHref`
- `trustPoints`
- `serviceArea.line`
- `serviceArea.areas`
- `socialProof.reviewsUrl`

### Optional (safe to omit)

- `contact.whatsappNumber`
- `brand.secondaryColor`
- `maps.embedUrl`
- `contentHints`
- `leadSource`

---

## Placeholder Rules (Important)

If details are guessed/missing for outreach builds:

- Include `placeholders.allowed: true`
- List missing/guessed fields in `placeholders.missingFields`
- Codex will mark generated preset content with `// PLACEHOLDER` where applicable

Examples:
- missing email
- generic testimonials
- generic portfolio items
- estimated service area wording

---

## Campaign Defaults (Recommended)

Use `campaign.defaults` to reduce repetition across 10-20 businesses.

Example:

```json
{
  "campaign": {
    "name": "Builders Outreach Batch 01",
    "buildPath": "preset",
    "layoutType": "one-page",
    "baseTemplateId": "builder-onepage-v2",
    "defaults": {
      "contact": {
        "openingHours": "Mon-Fri, 8am-6pm"
      },
      "enhancements": {
        "whatsappEnabled": true,
        "reviewsEnabled": true,
        "mapEnabled": true
      },
      "contentHints": {
        "tone": "Plain English, trustworthy, local"
      }
    }
  },
  "businesses": []
}
```

Notes:
- Business-level values should override campaign defaults
- Keep defaults practical (hours, CTA style, tone), not client-specific

---

## Batch Output Expectations (for Claude + Codex)

When this JSON is used, the generation process should:

- Create one site/preset per business
- Keep the same refined layout/template structure
- Populate business details, colours, services, and local copy
- Mark placeholders clearly (`// PLACEHOLDER`) where data is guessed/missing
- Save `clients/<clientname>/BRIEF.md` (or batch-generated equivalent) per client
- Run build checks and report pass/fail per client or per batch

---

## Example Full Payload (2 Businesses)

```json
{
  "campaign": {
    "name": "Builders Outreach Batch 01",
    "buildPath": "preset",
    "layoutType": "one-page",
    "baseTemplateId": "builder-onepage-v2",
    "defaults": {
      "contact": {
        "openingHours": "Mon-Fri, 8am-6pm"
      },
      "enhancements": {
        "whatsappEnabled": true,
        "reviewsEnabled": true,
        "mapEnabled": true
      }
    }
  },
  "businesses": [
    {
      "clientId": "mcbuildingpaisley",
      "businessName": "MC Building Services",
      "trade": "builder",
      "location": {
        "town": "Paisley",
        "region": "Renfrewshire",
        "country": "Scotland",
        "display": "Paisley, Renfrewshire"
      },
      "contact": {
        "phoneDisplay": "0141 111 1111",
        "phoneHref": "tel:01411111111",
        "email": "info@mcbuildingservices.co.uk",
        "emailHref": "mailto:info@mcbuildingservices.co.uk",
        "whatsappNumber": "+441411111111"
      },
      "brand": {
        "primaryColor": "#1B2A4A",
        "secondaryColor": "#D4A017"
      },
      "services": ["Extensions", "Loft conversions", "Kitchens", "Bathrooms", "Roofing"],
      "trustPoints": ["Free quotes", "Fully insured", "Local team"],
      "socialProof": {
        "reviewsUrl": "https://www.google.com/search?q=MC+Building+Services+Paisley+reviews",
        "reviewRatingText": "Highly rated locally",
        "testimonialsStatus": "placeholder"
      },
      "serviceArea": {
        "line": "Serving Paisley and surrounding areas",
        "areas": ["Paisley", "Renfrew", "Johnstone", "Glasgow"]
      },
      "maps": {
        "embedUrl": "https://www.google.com/maps?q=Paisley&output=embed"
      },
      "placeholders": {
        "allowed": true,
        "missingFields": ["testimonials.items", "portfolio.items"]
      }
    },
    {
      "clientId": "clyderenovations",
      "businessName": "Clyde Renovations Ltd",
      "trade": "builder",
      "location": {
        "town": "Clydebank",
        "region": "West Dunbartonshire",
        "country": "Scotland",
        "display": "Clydebank, West Dunbartonshire"
      },
      "contact": {
        "phoneDisplay": "0141 222 2222",
        "phoneHref": "tel:01412222222",
        "email": "hello@clyderenovations.co.uk",
        "emailHref": "mailto:hello@clyderenovations.co.uk"
      },
      "brand": {
        "primaryColor": "#0F1535"
      },
      "services": ["Home extensions", "Garage conversions", "Kitchens", "Bathrooms"],
      "trustPoints": ["Clear quotes", "Reliable start dates", "Quality workmanship"],
      "serviceArea": {
        "line": "Serving Clydebank, Glasgow and nearby areas",
        "areas": ["Clydebank", "Glasgow", "Bearsden", "Milngavie"]
      },
      "placeholders": {
        "allowed": true,
        "missingFields": ["socialProof.reviewsUrl", "maps.embedUrl", "contact.whatsappNumber"]
      }
    }
  ]
}
```

---

## Practical Notes For Claude (when generating the JSON)

- Use real contact details only when confidently verified
- If uncertain, leave blank/omit and record in `placeholders.missingFields`
- Keep `clientId` lowercase, no spaces, letters/numbers only if possible
- Keep services to 4-6 items for best layout fit
- Prefer a single clean primary brand colour if no brand colour is known

