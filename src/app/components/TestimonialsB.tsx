/**
 * Testimonials Variant B — Featured Layout
 * First review displayed large and prominent (left/full-width).
 * Remaining reviews in a compact list on the right (desktop) or below (mobile).
 * Creates more visual hierarchy and makes the best review shine.
 */
import { Quote, Star } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";

interface TestimonialsBProps {
  preset: BusinessPreset;
}

export function TestimonialsB({ preset }: TestimonialsBProps) {
  const [featured, ...rest] = preset.testimonials.items;

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <span
            className="uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-accent)" }}
          >
            {preset.testimonials.badge}
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--brand-heading-font)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: "var(--brand-heading-weight, 700)",
              lineHeight: 1.2,
            }}
          >
            {preset.testimonials.title}
          </h2>
          <p className="text-white/55" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            {preset.testimonials.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Featured review — takes 3/5 columns */}
          {featured && (
            <div
              className="lg:col-span-3 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
              style={{
                backgroundColor: "var(--brand-accent)",
                color: "var(--brand-accent-on)",
              }}
            >
              {/* Large quote mark */}
              <div className="absolute -top-4 -right-4 opacity-10">
                <Quote className="w-32 h-32" />
              </div>

              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>

              <p
                className="text-white/95 mb-8"
                style={{
                  fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                }}
              >
                "{featured.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  {featured.name.charAt(0)}
                </div>
                <div>
                  <span className="block text-white font-semibold" style={{ fontSize: "1rem" }}>
                    {featured.name}
                  </span>
                  <span className="block text-white/70" style={{ fontSize: "0.875rem" }}>
                    {featured.location} · {featured.project}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Remaining reviews — 2/5 columns, stacked */}
          <div className="lg:col-span-2 space-y-5">
            {rest.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl p-6 border border-white/10 bg-white/5 hover:bg-white/8 transition-colors"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p
                  className="text-white/75 mb-4"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65, fontStyle: "italic" }}
                >
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      backgroundColor: "var(--brand-accent-soft)",
                      color: "var(--brand-accent-ink)",
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-white" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                      {testimonial.name}
                    </span>
                    <span className="block text-white/50" style={{ fontSize: "0.8125rem" }}>
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Rating summary */}
            <div className="rounded-xl p-5 border border-white/10 bg-white/5 text-center">
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="block text-white font-bold" style={{ fontSize: "1.5rem" }}>
                {preset.testimonials.averageRatingValue}
              </span>
              <span className="block text-white/50" style={{ fontSize: "0.8125rem" }}>
                {preset.testimonials.averageRatingText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
