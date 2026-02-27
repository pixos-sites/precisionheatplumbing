/**
 * Hero Variant C — Centred / No Image
 * Full-width gradient background using brand colours.
 * Bold centred headline. Works perfectly for cold outreach
 * where you might not have a hero photo yet.
 */
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";

interface HeroCProps {
  preset: BusinessPreset;
}

export function HeroC({ preset }: HeroCProps) {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)`,
      }}
    >
      {/* Background texture pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--brand-accent)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm px-5 py-2.5 mb-8">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--brand-accent)" }}
          />
          <span className="text-white/85" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
            {preset.hero.badge}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white mb-6"
          style={{
            fontFamily: "var(--brand-heading-font)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: "var(--brand-heading-weight, 700)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
          }}
        >
          {preset.hero.titleLine1}
          <br />
          <span style={{ color: "var(--brand-accent)" }}>{preset.hero.titleLine2}</span>
        </h1>

        <p
          className="text-white/65 mb-10 max-w-2xl mx-auto"
          style={{ fontSize: "clamp(1.0625rem, 2vw, 1.25rem)", lineHeight: 1.7 }}
        >
          {preset.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={preset.hero.primaryCtaHref}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.99] group"
            style={{
              fontSize: "1.0625rem",
              fontWeight: 600,
              backgroundColor: "var(--brand-accent)",
              color: "var(--brand-accent-on)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
            }}
          >
            {preset.hero.primaryCtaLabel}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={preset.contact.phoneHref}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl border border-white/20 text-white hover:bg-white/8 transition-all"
            style={{ fontSize: "1.0625rem", fontWeight: 500 }}
          >
            <Phone className="w-4 h-4" />
            {preset.contact.phoneDisplay}
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          <div className="flex items-center gap-2 text-white/60">
            <MapPin className="w-4 h-4" style={{ color: "var(--brand-accent)" }} />
            <span style={{ fontSize: "0.9375rem" }}>{preset.contact.location}</span>
          </div>
          <div className="w-px h-5 bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-white/60 ml-1.5" style={{ fontSize: "0.875rem" }}>
              {preset.hero.ratingLabel}
            </span>
          </div>
          <div className="w-px h-5 bg-white/15 hidden sm:block" />
          <span className="text-white/60" style={{ fontSize: "0.9375rem" }}>
            {preset.contact.openingHours}
          </span>
        </div>
      </div>
    </section>
  );
}
