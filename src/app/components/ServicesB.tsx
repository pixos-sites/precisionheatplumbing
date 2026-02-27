/**
 * Services Variant B — Icon List
 * No images. Clean two-column list with icon, title, description, and features.
 * Faster to load, works well when you don't have service photos yet.
 * Great for cold outreach.
 */
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";
import { iconMap } from "./iconMap";

// Map trade keywords to icons — falls back to hard-hat
const SERVICE_ICONS = [
  "hard-hat",
  "hammer",
  "key-round",
  "shield",
  "clipboard-list",
  "check-circle",
] as const;

interface ServicesBProps {
  preset: BusinessPreset;
}

export function ServicesB({ preset }: ServicesBProps) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14 lg:mb-18">
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
              fontWeight: "var(--brand-heading-weight, 700)",
              lineHeight: 1.2,
            }}
          >
            {preset.services.title}
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            {preset.services.description}
          </p>
        </div>

        {/* Service list — 2 columns on md+ */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-0 divide-y divide-[#F0EDEA] md:divide-y-0">
          {preset.services.items.map((service, index) => {
            const iconKey = SERVICE_ICONS[index % SERVICE_ICONS.length];
            const Icon = iconMap[iconKey];

            return (
              <div
                key={service.title}
                className="py-8 md:py-7 md:border-b md:border-[#F0EDEA] group"
              >
                <div className="flex gap-5">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--brand-accent-soft)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--brand-accent-ink)" }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-[#1A1A1A] mb-2"
                      style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-[#6B7280] mb-4"
                      style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                    >
                      {service.description}
                    </p>

                    {service.features.length > 0 && (
                      <ul className="space-y-1.5 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle2
                              className="w-4 h-4 shrink-0"
                              style={{ color: "var(--brand-accent)" }}
                            />
                            <span className="text-[#4A4F56]" style={{ fontSize: "0.875rem" }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--brand-accent-ink)",
                      }}
                    >
                      {preset.services.enquireLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
