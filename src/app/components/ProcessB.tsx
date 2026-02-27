/**
 * Process Variant B — Vertical Timeline
 * Left-aligned vertical timeline with connecting line.
 * More editorial, reads better on mobile, works for any number of steps.
 */
import type { BusinessPreset } from "@/config/template.types";
import { iconMap } from "./iconMap";

interface ProcessBProps {
  preset: BusinessPreset;
}

export function ProcessB({ preset }: ProcessBProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <span
              className="uppercase tracking-wider mb-3 block"
              style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-accent-ink)" }}
            >
              {preset.process.badge}
            </span>
            <h2
              className="text-[#1A1A1A] mb-5"
              style={{
                fontFamily: "var(--brand-heading-font)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: "var(--brand-heading-weight, 700)",
                lineHeight: 1.15,
              }}
            >
              {preset.process.title}
            </h2>
            <p className="text-[#6B7280] mb-8" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              {preset.process.description}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white transition-opacity hover:opacity-90"
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                backgroundColor: "var(--brand-accent)",
                color: "var(--brand-accent-on)",
              }}
            >
              Get Started Today
            </a>
          </div>

          {/* Right: timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{ backgroundColor: "#E0DDD9" }}
            />

            <div className="space-y-0">
              {preset.process.steps.map((step, index) => {
                const Icon = iconMap[step.icon];
                const isLast = index === preset.process.steps.length - 1;

                return (
                  <div key={step.title} className={`relative flex gap-6 ${isLast ? "pb-0" : "pb-10"}`}>
                    {/* Icon node */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                        style={{ backgroundColor: "var(--brand-accent-soft)" }}
                      >
                        <Icon className="w-4 h-4" style={{ color: "var(--brand-accent-ink)" }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1.5 pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold shrink-0"
                          style={{ backgroundColor: "var(--brand-accent)", color: "var(--brand-accent-on)" }}
                        >
                          {step.step}
                        </span>
                        <h3
                          className="text-[#1A1A1A]"
                          style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className="text-[#6B7280]"
                        style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
