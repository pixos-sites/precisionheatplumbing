import { ArrowRight } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServicesProps {
  preset: BusinessPreset;
}

export function Services({ preset }: ServicesProps) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span
            className="uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-accent-ink)" }}
          >
            {preset.services.badge}
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
            {preset.services.title}
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            {preset.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {preset.services.items.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-[#1A1A1A] mb-2"
                  style={{ fontSize: "1.1875rem", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#6B7280] mb-4"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-accent)" }} />
                      <span className="text-[#1A1A1A]" style={{ fontSize: "0.875rem" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--brand-accent-ink)" }}
                >
                  {preset.services.enquireLabel}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
