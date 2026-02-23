import { Quote } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";

interface TestimonialsProps {
  preset: BusinessPreset;
}

export function Testimonials({ preset }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span
            className="uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-accent-ink)" }}
          >
            {preset.testimonials.badge}
          </span>
          <h2
            className="text-[#1A1A1A] mb-4"
            style={{
              fontFamily: "var(--brand-heading-font)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {preset.testimonials.title}
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            {preset.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {preset.testimonials.items.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-xl p-6 lg:p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--brand-accent-soft)" }}
                >
                  <Quote className="w-4 h-4" style={{ color: "var(--brand-accent-ink)" }} />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <svg key={index} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[#1A1A1A]" style={{ fontSize: "0.9375rem", fontWeight: 600 }}>
                    {testimonial.name}
                  </span>
                  <span className="text-[#6B7280] ml-2" style={{ fontSize: "0.8125rem" }}>
                    {testimonial.location}
                  </span>
                </div>
              </div>
              <p className="text-[#4A4F56] mb-4" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                "{testimonial.text}"
              </p>
              <div className="pt-3 border-t border-border">
                <span className="text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                  Project: {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-border">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-[#1A1A1A]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
              {preset.testimonials.averageRatingValue}
            </span>
            <span className="text-[#6B7280]" style={{ fontSize: "0.875rem" }}>
              {preset.testimonials.averageRatingText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
