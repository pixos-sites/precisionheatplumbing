/**
 * Design Catalogue — Internal tool for Gavin
 * Browse all section variants + colour palettes side by side.
 * Select a palette on the left — all sections update instantly.
 * Toggle variants per section with the tab bar above each one.
 *
 * Run with: npm run dev:catalogue
 */

import { useState, useMemo } from "react";
import { PALETTES, type Palette } from "./palettes";
import { DEMO_PRESET } from "./demo-content";
import type { BusinessPreset } from "@/config/template.types";

// Section components — A variants (existing)
import { Hero } from "@/app/components/Hero";
import { TrustBar } from "@/app/components/TrustBar";
import { Services } from "@/app/components/Services";
import { Process } from "@/app/components/Process";
import { Portfolio } from "@/app/components/Portfolio";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";
import { Testimonials } from "@/app/components/Testimonials";

// Section components — B/C variants (new)
import { HeroB } from "@/app/components/HeroB";
import { HeroC } from "@/app/components/HeroC";
import { ServicesB } from "@/app/components/ServicesB";
import { TestimonialsB } from "@/app/components/TestimonialsB";
import { PortfolioB } from "@/app/components/PortfolioB";
import { ProcessB } from "@/app/components/ProcessB";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type SectionKey = "hero" | "trustBar" | "services" | "process" | "portfolio" | "whyChooseUs" | "testimonials";

interface SectionDef {
  key: SectionKey;
  label: string;
  variants: { id: string; label: string; component: React.ComponentType<{ preset: BusinessPreset }> }[];
}

// ─────────────────────────────────────────────
// Section registry
// ─────────────────────────────────────────────

const SECTIONS: SectionDef[] = [
  {
    key: "hero",
    label: "Hero",
    variants: [
      { id: "A", label: "A — Full Screen", component: Hero },
      { id: "B", label: "B — Split Panel", component: HeroB },
      { id: "C", label: "C — Centred / No Image", component: HeroC },
    ],
  },
  {
    key: "trustBar",
    label: "Trust Bar",
    variants: [
      { id: "A", label: "A — Stats Bar", component: TrustBar },
    ],
  },
  {
    key: "services",
    label: "Services",
    variants: [
      { id: "A", label: "A — Card Grid", component: Services },
      { id: "B", label: "B — Icon List", component: ServicesB },
    ],
  },
  {
    key: "process",
    label: "Process",
    variants: [
      { id: "A", label: "A — Horizontal Steps", component: Process },
      { id: "B", label: "B — Vertical Timeline", component: ProcessB },
    ],
  },
  {
    key: "portfolio",
    label: "Portfolio",
    variants: [
      { id: "A", label: "A — Grid", component: Portfolio },
      { id: "B", label: "B — Scroll Strip", component: PortfolioB },
    ],
  },
  {
    key: "whyChooseUs",
    label: "Why Choose Us",
    variants: [
      { id: "A", label: "A — Dark Cards", component: WhyChooseUs },
    ],
  },
  {
    key: "testimonials",
    label: "Testimonials",
    variants: [
      { id: "A", label: "A — Card Grid", component: Testimonials },
      { id: "B", label: "B — Featured Quote", component: TestimonialsB },
    ],
  },
];

// ─────────────────────────────────────────────
// Build a preset merged with the active palette
// ─────────────────────────────────────────────

function applyPaletteToPreset(preset: BusinessPreset, palette: Palette): BusinessPreset {
  return {
    ...preset,
    brand: {
      ...preset.brand,
      accent: palette.accent,
      accentHover: palette.accentHover,
      accentSoft: palette.accentSoft,
      accentInk: palette.accentInk,
      accentOnAccent: palette.accentOnAccent,
      heroOverlayStart: palette.heroOverlayStart,
      heroOverlayMid: palette.heroOverlayMid,
      heroOverlayEnd: palette.heroOverlayEnd,
      fontHeading: palette.fontHeading,
      fontBody: palette.fontBody,
    },
  };
}

// ─────────────────────────────────────────────
// Section Block component
// ─────────────────────────────────────────────

interface SectionBlockProps {
  section: SectionDef;
  preset: BusinessPreset;
  activeVariant: string;
  onVariantChange: (variantId: string) => void;
}

function SectionBlock({ section, preset, activeVariant, onVariantChange }: SectionBlockProps) {
  const variant = section.variants.find((v) => v.id === activeVariant) ?? section.variants[0];
  const Component = variant.component;

  return (
    <div className="catalogue-section-block">
      {/* Section header */}
      <div
        className="flex items-center justify-between px-4 py-2.5 sticky top-[56px] z-20"
        style={{
          backgroundColor: "#1A1F2E",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#4ADE80" }}
          />
          <span className="text-white/70 font-mono" style={{ fontSize: "0.8125rem", letterSpacing: "0.04em" }}>
            {section.label.toUpperCase()}
          </span>
        </div>

        {section.variants.length > 1 && (
          <div className="flex items-center gap-1">
            {section.variants.map((v) => (
              <button
                key={v.id}
                onClick={() => onVariantChange(v.id)}
                className="px-3 py-1.5 rounded-md transition-all"
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  backgroundColor: activeVariant === v.id ? "rgba(255,255,255,0.12)" : "transparent",
                  color: activeVariant === v.id ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                  border: activeVariant === v.id ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
                }}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Rendered section */}
      <div className="relative">
        <Component preset={preset} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Sidebar palette item
// ─────────────────────────────────────────────

interface PaletteItemProps {
  palette: Palette;
  isActive: boolean;
  onClick: () => void;
}

function PaletteItem({ palette, isActive, onClick }: PaletteItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-3 py-2.5 rounded-lg transition-all group"
      style={{
        backgroundColor: isActive ? "rgba(255,255,255,0.10)" : "transparent",
        border: isActive ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
      }}
    >
      <div className="flex items-center gap-3">
        {/* Colour swatches */}
        <div className="flex items-center gap-1 shrink-0">
          <div
            className="w-7 h-7 rounded-md shadow-sm"
            style={{ backgroundColor: palette.accent }}
          />
          <div
            className="w-4 h-4 rounded-sm -ml-1.5 mt-1.5 border border-black/10"
            style={{ backgroundColor: palette.accentSoft }}
          />
        </div>

        <div className="min-w-0">
          <span
            className="block truncate"
            style={{
              fontSize: "0.875rem",
              fontWeight: isActive ? 600 : 500,
              color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.70)",
              lineHeight: 1.3,
            }}
          >
            {palette.name}
          </span>
          <span
            className="block truncate"
            style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginTop: "0.1rem" }}
          >
            {palette.tags.slice(0, 3).join(", ")}
          </span>
        </div>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────
// Palette Token Snippet (shown on selection)
// ─────────────────────────────────────────────

function PaletteSnippet({ palette }: { palette: Palette }) {
  const [copied, setCopied] = useState(false);

  const snippet = `palette: "${palette.key}",`;

  const copy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="mx-3 mb-3 rounded-lg p-3 flex items-center justify-between gap-2"
      style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <code className="text-green-400 font-mono truncate" style={{ fontSize: "0.75rem" }}>
        {snippet}
      </code>
      <button
        onClick={copy}
        className="shrink-0 px-2 py-1 rounded text-white/50 hover:text-white transition-colors"
        style={{
          fontSize: "0.75rem",
          backgroundColor: copied ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.07)",
          color: copied ? "#4ADE80" : undefined,
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main App
// ─────────────────────────────────────────────

export default function CatalogueApp() {
  const [selectedPaletteKey, setSelectedPaletteKey] = useState(PALETTES[0].key);
  const [activeVariants, setActiveVariants] = useState<Record<SectionKey, string>>(
    () => Object.fromEntries(SECTIONS.map((s) => [s.key, s.variants[0].id])) as Record<SectionKey, string>
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const selectedPalette = PALETTES.find((p) => p.key === selectedPaletteKey) ?? PALETTES[0];

  const activePreset = useMemo(
    () => applyPaletteToPreset(DEMO_PRESET, selectedPalette),
    [selectedPalette]
  );

  const cssVars = {
    "--brand-accent": selectedPalette.accent,
    "--brand-accent-hover": selectedPalette.accentHover,
    "--brand-accent-soft": selectedPalette.accentSoft,
    "--brand-accent-ink": selectedPalette.accentInk,
    "--brand-accent-on": selectedPalette.accentOnAccent,
    "--brand-body-font": selectedPalette.fontBody,
    "--brand-heading-font": selectedPalette.fontHeading,
  } as React.CSSProperties;

  const setVariant = (key: SectionKey, variantId: string) => {
    setActiveVariants((prev) => ({ ...prev, [key]: variantId }));
  };

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#0D1117", fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* ── Sidebar ── */}
      <aside
        className="flex flex-col shrink-0 overflow-hidden transition-all"
        style={{
          width: sidebarOpen ? "272px" : "0px",
          backgroundColor: "#161B27",
          borderRight: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Sidebar header */}
        <div
          className="px-4 py-4 shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-white font-semibold tracking-tight" style={{ fontSize: "0.9375rem" }}>
              Design Catalogue
            </span>
          </div>
          <p className="text-white/35" style={{ fontSize: "0.75rem" }}>
            {PALETTES.length} palettes · {SECTIONS.length} sections
          </p>
        </div>

        {/* Section quick-jump */}
        <div
          className="px-3 py-2 shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/35 uppercase tracking-widest mb-2 px-1" style={{ fontSize: "0.625rem" }}>
            Sections
          </p>
          <div className="flex flex-wrap gap-1.5">
            {SECTIONS.map((s) => (
              <a
                key={s.key}
                href={`#section-${s.key}`}
                className="px-2 py-0.5 rounded text-white/45 hover:text-white/80 hover:bg-white/5 transition-colors"
                style={{ fontSize: "0.75rem" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Palette list */}
        <div className="flex-1 overflow-y-auto">
          <p className="text-white/35 uppercase tracking-widest px-4 pt-3 pb-2" style={{ fontSize: "0.625rem" }}>
            Colour Palettes
          </p>
          <div className="space-y-0.5 px-1.5 pb-2">
            {PALETTES.map((p) => (
              <PaletteItem
                key={p.key}
                palette={p}
                isActive={p.key === selectedPaletteKey}
                onClick={() => setSelectedPaletteKey(p.key)}
              />
            ))}
          </div>
        </div>

        {/* Copy snippet */}
        <div className="shrink-0 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-white/35 uppercase tracking-widest px-4 py-2" style={{ fontSize: "0.625rem" }}>
            Use in preset
          </p>
          <PaletteSnippet palette={selectedPalette} />
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top bar */}
        <div
          className="flex items-center gap-4 px-4 h-14 shrink-0"
          style={{
            backgroundColor: "#161B27",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="text-white/50 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/5"
            title="Toggle sidebar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>

          <div className="flex items-center gap-2 min-w-0">
            <div
              className="w-3.5 h-3.5 rounded-sm shrink-0"
              style={{ backgroundColor: selectedPalette.accent }}
            />
            <span className="text-white font-semibold truncate" style={{ fontSize: "0.9375rem" }}>
              {selectedPalette.name}
            </span>
            <span className="text-white/35 truncate hidden sm:block" style={{ fontSize: "0.8125rem" }}>
              — {selectedPalette.description}
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            {/* Variant summary */}
            <span className="text-white/35 hidden md:block" style={{ fontSize: "0.8125rem" }}>
              {SECTIONS.reduce((count, s) => count + (s.variants.length > 1 ? 1 : 0), 0)} sections have variants
            </span>
          </div>
        </div>

        {/* Scrollable section area */}
        <div
          className="flex-1 overflow-y-auto"
          style={{ backgroundColor: "#FAFAF8" }}
        >
          {/* Apply CSS vars to the section preview area */}
          <div style={cssVars} className="pb-24">
            {SECTIONS.map((section) => (
              <div key={section.key} id={`section-${section.key}`}>
                <SectionBlock
                  section={section}
                  preset={activePreset}
                  activeVariant={activeVariants[section.key]}
                  onVariantChange={(id) => setVariant(section.key, id)}
                />
              </div>
            ))}
          </div>

          {/* Bottom info */}
          <div
            className="fixed bottom-0 right-0 left-0 flex items-center justify-center gap-6 py-3 px-4 text-center"
            style={{
              backgroundColor: "#161B27",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              marginLeft: sidebarOpen ? "272px" : "0px",
            }}
          >
            <span className="text-white/35" style={{ fontSize: "0.8125rem" }}>
              Active palette: <strong className="text-white/60">{selectedPalette.name}</strong>
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/35" style={{ fontSize: "0.8125rem" }}>
              Demo content: <strong className="text-white/60">Horizon Builders</strong>
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/35" style={{ fontSize: "0.8125rem" }}>
              {SECTIONS.reduce((sum, s) => sum + s.variants.length, 0)} total variants
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
