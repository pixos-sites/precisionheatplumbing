/**
 * Hero Variant B — Split Layout
 * Left: content panel with solid brand-dark bg
 * Right: full-height image, no overlay
 * Modern / editorial feel. Works without a strong hero image.
 */
import { ArrowRight, Phone } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroBProps {
  preset: BusinessPreset;
}

export function HeroB({ preset }: HeroBProps) {
  return (
    <section className="relative min-h-[85vh] flex items-stretch pt-16 lg:pt-20">
      <div className="flex w-full flex-col lg:flex-row">
        {/* Left — content */}
        <div
          className="relative flex items-center lg:w-[52%] py-16 lg:py-24 px-6 sm:px-10 lg:px-16"
          style={{ backgroundColor: "#111827" }}
        >
          {/* Accent bar */}
          <div
            className="absolute top-0 left-0 bottom-0 w-1"
            style={{ backgroundColor: "var(--brand-accent)" }}
          />

          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{
                backgroundColor: "var(--brand-accent)",
                color: "var(--brand-accent-on)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
              <span style={{ fontSize: "0.8125rem", fontWeight: 600 }}>{preset.hero.badge}</span>
            </div>

            <h1
              className="text-white mb-5"
              style={{
                fontFamily: "var(--brand-heading-font)",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: "var(--brand-heading-weight, 700)",
                lineHeight: 1.1,
              }}
            >
              {preset.hero.titleLine1}
              <br />
              <span style={{ color: "var(--brand-accent)" }}>{preset.hero.titleLine2}</span>
            </h1>

            <p
              className="text-white/70 mb-8 max-w-lg"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: 1.7 }}
            >
              {preset.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={preset.hero.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg transition-all hover:opacity-90 group"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  backgroundColor: "var(--brand-accent)",
                  color: "var(--brand-accent-on)",
                }}
              >
                {preset.hero.primaryCtaLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={preset.hero.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all"
                style={{ fontSize: "1rem", fontWeight: 500 }}
              >
                {preset.hero.secondaryCtaLabel}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href={preset.contact.phoneHref}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--brand-accent)" }}
                >
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block text-white/50" style={{ fontSize: "0.75rem" }}>
                    {preset.hero.callLabel}
                  </span>
                  <span className="block text-white" style={{ fontSize: "0.9375rem", fontWeight: 700 }}>
                    {preset.contact.phoneDisplay}
                  </span>
                </div>
              </a>

              <div className="h-px sm:h-8 sm:w-px bg-white/15 w-full sm:w-auto" />

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-white/60 ml-2" style={{ fontSize: "0.8125rem" }}>
                  {preset.hero.ratingLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative lg:w-[48%] min-h-[340px] lg:min-h-0 overflow-hidden">
          <ImageWithFallback
            src={preset.hero.backgroundImage}
            alt={preset.hero.backgroundAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle left fade so it blends into the panel on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/30 via-transparent to-transparent hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
