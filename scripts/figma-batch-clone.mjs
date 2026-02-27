#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const args = { overwrite: false, dest: "clients" };
  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--overwrite") {
      args.overwrite = true;
      continue;
    }
    if (!arg.startsWith("--")) continue;
    const [k, vInline] = arg.split("=");
    const key = k.slice(2);
    const value = vInline ?? argv[++i];
    args[key] = value;
  }
  return args;
}

const args = parseArgs(process.argv);
if (!args.json || !args.base) {
  console.error("Usage: node scripts/figma-batch-clone.mjs --json <file> --base <folder> [--dest clients] [--overwrite]");
  process.exit(1);
}

const repoRoot = process.cwd();
const jsonPath = path.resolve(repoRoot, args.json);
const baseDir = path.resolve(repoRoot, args.base);
const destRoot = path.resolve(repoRoot, args.dest);

if (!fs.existsSync(jsonPath)) {
  console.error(`JSON not found: ${jsonPath}`);
  process.exit(1);
}
if (!fs.existsSync(baseDir)) {
  console.error(`Base folder not found: ${baseDir}`);
  process.exit(1);
}

const raw = fs.readFileSync(jsonPath, "utf8");
const batch = JSON.parse(raw);
if (!Array.isArray(batch.businesses)) {
  console.error("Invalid JSON: businesses array missing");
  process.exit(1);
}

fs.mkdirSync(destRoot, { recursive: true });

const ICONS = ["Hammer", "Home", "PaintBucket", "DoorOpen", "Fence", "Wrench"];

const IMAGE_SETS = [
  {
    hero: "https://images.unsplash.com/photo-1676250747209-eee2d728da64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    about: "https://images.unsplash.com/photo-1576325782614-1df4c30918e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1639125720149-5640a37f1c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1763910288312-a103f150b9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1573311392049-4186e3a47e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1762418362644-a4daad168fb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1653150598883-e3f716a4af3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1734079692147-c6fc9438a2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    instagram: [
      "https://images.unsplash.com/photo-1639125720149-5640a37f1c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1695886517962-cafc014947de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1553169507-38833977274b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1739999064208-6f1be034f435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1763910288312-a103f150b9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1576325782614-1df4c30918e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
  {
    hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    about: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    instagram: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
];

function safeString(v) {
  return typeof v === "string" ? v : "";
}

function normalizeClientId(input) {
  return safeString(input).toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function digitsOnly(input) {
  return safeString(input).replace(/\D/g, "");
}

function normalizeWhatsApp(value) {
  const digits = digitsOnly(value);
  if (!digits) return "";
  if (digits.startsWith("00")) return digits.slice(2);
  if (digits.startsWith("0")) return `44${digits.slice(1)}`;
  return digits;
}

function deriveInstagramHandle(business) {
  const explicit = safeString(business?.social?.instagramHandle || business?.social?.instagram_handle);
  if (explicit) return explicit.replace(/^@/, "");
  const url = safeString(business?.social?.instagram);
  const match = url.match(/instagram\.com\/([^/?#]+)/i);
  if (match) return match[1].replace(/^@/, "");
  return normalizeClientId(business.clientId || business.businessName || "tradebusiness");
}

function extractEstYear(business) {
  const text = safeString(business?.leadSource?.notes);
  const years = [...text.matchAll(/\b(20\d{2})\b/g)].map((m) => Number(m[1]));
  if (years.length) return String(Math.min(...years));
  return "2024";
}

function makeTagline(business) {
  const angle = safeString(business?.contentHints?.heroAngle);
  if (angle) {
    const cleaned = angle.trim();
    if (cleaned.length <= 56) return cleaned.endsWith(".") ? cleaned : `${cleaned}.`;
    return `${cleaned.slice(0, 53).trimEnd()}...`;
  }
  const trade = safeString(business.trade) || "Trades";
  const town = safeString(business?.location?.town) || safeString(business?.location?.display) || "Your Area";
  return `Trusted ${trade.toLowerCase()} in ${town}.`;
}

function serviceDescription(serviceName, business) {
  const area = safeString(business?.location?.display) || safeString(business?.location?.town) || "the local area";
  return `Professional ${serviceName.toLowerCase()} completed to a high standard for homes and landlords across ${area}.`;
}

function serviceIcon(index) {
  return ICONS[index % ICONS.length];
}

function makeServicesList(business) {
  const services = Array.isArray(business.services) ? business.services.filter(Boolean).slice(0, 6) : [];
  return services.map((name, i) => ({
    icon: serviceIcon(i),
    name,
    description: serviceDescription(name, business),
  }));
}

function fallbackTestimonials(business) {
  const areas = Array.isArray(business?.serviceArea?.areas) ? business.serviceArea.areas.filter(Boolean) : [];
  const trade = safeString(business.trade) || "trade";
  const locA = areas[0] || safeString(business?.location?.town) || "Local area";
  const locB = areas[1] || locA;
  const locC = areas[2] || locA;
  return [
    {
      quote: `Great communication from start to finish and the ${trade.toLowerCase()} work was completed to a very high standard.`,
      name: "Local Customer", // PLACEHOLDER
      location: locA,
    },
    {
      quote: "Turned up when they said they would, kept everything tidy, and delivered exactly what we asked for.",
      name: "Homeowner", // PLACEHOLDER
      location: locB,
    },
    {
      quote: "Fair quote, professional service, and a quality finish. Would happily recommend and use again.",
      name: "Property Owner", // PLACEHOLDER
      location: locC,
    },
  ];
}

function makeAboutText(business) {
  const name = safeString(business.businessName);
  const trade = safeString(business.trade).toLowerCase() || "trade";
  const location = safeString(business?.location?.display) || "the local area";
  const trust = Array.isArray(business.trustPoints) && business.trustPoints.length
    ? business.trustPoints.slice(0, 3).join(", ").toLowerCase()
    : "reliable service and clear communication";

  return [
    `${name} provides ${trade} services across ${location}, helping homeowners and landlords with reliable workmanship and straightforward advice.`, // PLACEHOLDER
    `We focus on clean, professional jobs with clear quotes and honest communication. ${trust.charAt(0).toUpperCase()}${trust.slice(1)}.` // PLACEHOLDER
  ];
}

function pickImages(index) {
  return IMAGE_SETS[index % IMAGE_SETS.length];
}

function ensureReactDeps(projectDir) {
  const pkgPath = path.join(projectDir, "package.json");
  if (!fs.existsSync(pkgPath)) return;
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg.dependencies ||= {};
  if (!pkg.dependencies.react) pkg.dependencies.react = "18.3.1";
  if (!pkg.dependencies["react-dom"]) pkg.dependencies["react-dom"] = "18.3.1";
  fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
}

function writeConfigTs(projectDir, business, index) {
  const images = pickImages(index);
  const clientId = normalizeClientId(business.clientId || business.businessName);
  const businessName = safeString(business.businessName) || clientId;
  const trade = safeString(business.trade) || "Trade";
  const location = safeString(business?.location?.display) || safeString(business?.location?.town) || "Local area";
  const phone = safeString(business?.contact?.phoneDisplay);
  const whatsapp = normalizeWhatsApp(business?.contact?.whatsappNumber);
  const instagramHandle = deriveInstagramHandle(business);
  const accent = safeString(business?.brand?.primaryColor) || safeString(batch?.campaign?.defaults?.brand?.primaryColor) || "#1E4D8C";
  const estYear = extractEstYear(business);
  const reviewsUrl = safeString(business?.socialProof?.reviewsUrl);
  const mapEmbedUrl = safeString(business?.maps?.embedUrl);
  const servicesList = makeServicesList(business);
  const aboutText = makeAboutText(business);
  const testimonials = fallbackTestimonials(business);
  const missing = new Set(Array.isArray(business?.placeholders?.missingFields) ? business.placeholders.missingFields : []);

  const configText = `// AUTO-GENERATED by scripts/figma-batch-clone.mjs
// Source clientId: ${clientId}
// Edit this file for per-client refinements.

export const siteConfig = {
  business_name: ${JSON.stringify(businessName)},
  trade: ${JSON.stringify(trade)},
  location: ${JSON.stringify(location)},
${missing.has("contact.phoneDisplay") || !phone ? "  // PLACEHOLDER: phone not provided in research batch\n" : ""}  phone: ${JSON.stringify(phone)},
${missing.has("contact.whatsappNumber") || !whatsapp ? "  // PLACEHOLDER: WhatsApp number not provided in research batch\n" : ""}  whatsapp_number: ${JSON.stringify(whatsapp)},
  tagline: ${JSON.stringify(makeTagline(business))},
${missing.has("leadSource.estYear") ? "  // PLACEHOLDER: estimated trading year\n" : ""}  est_year: ${JSON.stringify(estYear)},
  accent_colour: ${JSON.stringify(accent)},
  instagram_handle: ${JSON.stringify(instagramHandle)},
  google_place_id: "",
${missing.has("socialProof.reviewsUrl") || !reviewsUrl ? "  // PLACEHOLDER: add Google reviews URL when available\n" : ""}  reviews_url: ${JSON.stringify(reviewsUrl)},
${missing.has("maps.embedUrl") || !mapEmbedUrl ? "  // PLACEHOLDER: add Google Maps embed URL when available\n" : ""}  map_embed_url: ${JSON.stringify(mapEmbedUrl)},

  hero_image: ${JSON.stringify(images.hero)},
  about_image: ${JSON.stringify(images.about)},

  services_list: ${JSON.stringify(servicesList, null, 2)},

  gallery_images: ${JSON.stringify(images.gallery, null, 2)},

  instagram_feed: ${JSON.stringify(images.instagram, null, 2)},

  about_text: ${JSON.stringify(aboutText, null, 2)},

  testimonials: ${JSON.stringify(testimonials, null, 2)},
};
`;

  fs.writeFileSync(path.join(projectDir, "src/app/config.ts"), configText);
}

function writeBrief(projectDir, business) {
  const placeholders = Array.isArray(business?.placeholders?.missingFields) ? business.placeholders.missingFields : [];
  const services = Array.isArray(business?.services) ? business.services.slice(0, 6) : [];
  const brief = `# BRIEF.md

## Project Status

- Stage: Build
- Build Path: Figma Make import (batch clone)
- Preset ID:
- Vercel URL:
- Last Updated: February 26, 2026

## Client Details

- Business name: ${safeString(business.businessName)}
- Trade: ${safeString(business.trade)}
- Location: ${safeString(business?.location?.display)}
- Phone: ${safeString(business?.contact?.phoneDisplay) || "// PLACEHOLDER"}
- Email: ${safeString(business?.contact?.email) || "// PLACEHOLDER"}

## Brand

- Primary colour: ${safeString(business?.brand?.primaryColor) || "// PLACEHOLDER"}
- Colour suggestion basis: research batch / social presence
- Logo: text-based (template)

## Services (up to 6)

${services.map((s, i) => `${i + 1}. ${s}`).join("\n")}

## Trust Points

${(Array.isArray(business?.trustPoints) ? business.trustPoints : []).map((t) => `- ${t}`).join("\n") || "- // PLACEHOLDER"}

## Images

- Stock (template batch set)

## Placeholders Used

${placeholders.length ? placeholders.map((p) => `- ${p}`).join("\n") : "- None"}

## Notes

- Generated from research batch JSON
- Refine copy/images/contact details before deploy
`;
  fs.writeFileSync(path.join(projectDir, "BRIEF.md"), brief);
}

function copyBase(src, dest) {
  fs.cpSync(src, dest, {
    recursive: true,
    filter: (entry) => {
      const name = path.basename(entry);
      if (["node_modules", "dist", ".git", ".DS_Store", "guidelines"].includes(name)) return false;
      return true;
    },
  });
}

const results = [];

for (const [index, business] of batch.businesses.entries()) {
  const clientId = normalizeClientId(business.clientId || business.businessName);
  if (!clientId) {
    results.push({ status: "skipped", reason: "missing clientId/businessName" });
    continue;
  }

  const outDir = path.join(destRoot, clientId);
  if (fs.existsSync(outDir)) {
    if (!args.overwrite) {
      results.push({ clientId, status: "skipped", reason: "folder exists" });
      continue;
    }
    fs.rmSync(outDir, { recursive: true, force: true });
  }

  copyBase(baseDir, outDir);
  ensureReactDeps(outDir);
  writeConfigTs(outDir, business, index);
  writeBrief(outDir, business);
  results.push({ clientId, status: "created", outDir });
}

const created = results.filter((r) => r.status === "created");
const skipped = results.filter((r) => r.status !== "created");

console.log(`Created ${created.length} project(s) in ${destRoot}`);
for (const r of created) console.log(`  + ${r.clientId}`);
if (skipped.length) {
  console.log(`Skipped ${skipped.length} project(s):`);
  for (const r of skipped) console.log(`  - ${r.clientId ?? "unknown"} (${r.reason})`);
}
