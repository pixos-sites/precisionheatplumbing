import { ArrowRight, Phone } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  preset: BusinessPreset;
}

export function Hero({ preset }: HeroProps) {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center pt-16 lg:pt-20">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={preset.hero.backgroundImage}
          alt={preset.hero.backgroundAlt}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${preset.brand.heroOverlayStart}, ${preset.brand.heroOverlayMid}, ${preset.brand.heroOverlayEnd})`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-5 lg:mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brand-accent)" }} />
            <span className="text-white/90" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
              {preset.hero.badge}
            </span>
          </div>

          <h1
            className="text-white mb-3 lg:mb-4"
            style={{
              fontFamily: "var(--brand-heading-font)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            {preset.hero.titleLine1}
            <br />
            {preset.hero.titleLine2}
          </h1>

          <p
            className="text-white/80 mb-6 lg:mb-8 max-w-lg"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6 }}
          >
            {preset.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={preset.hero.primaryCtaHref}
              className="inline-flex items-center justify-center gap-2 text-white px-7 py-4 rounded-lg transition-all hover:shadow-lg group"
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
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/25 px-7 py-4 rounded-lg hover:bg-white/20 transition-all"
              style={{ fontSize: "1rem", fontWeight: 500 }}
            >
              {preset.hero.secondaryCtaLabel}
            </a>
          </div>

          <div className="mt-8 lg:mt-10 flex items-center gap-6 flex-wrap">
            <a href={preset.contact.phoneHref} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-4 h-4" style={{ color: "var(--brand-accent)" }} />
              </div>
              <div>
                <span className="block text-white/60" style={{ fontSize: "0.75rem" }}>{preset.hero.callLabel}</span>
                <span className="block text-white" style={{ fontSize: "0.9375rem", fontWeight: 600 }}>{preset.contact.phoneDisplay}</span>
              </div>
            </a>
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-white/70 ml-2" style={{ fontSize: "0.8125rem" }}>
                {preset.hero.ratingLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
