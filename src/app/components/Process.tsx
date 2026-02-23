import type { BusinessPreset } from "@/config/template.types";
import { iconMap } from "./iconMap";

interface ProcessProps {
  preset: BusinessPreset;
}

export function Process({ preset }: ProcessProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span
            className="uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-accent-ink)" }}
          >
            {preset.process.badge}
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
            {preset.process.title}
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            {preset.process.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {preset.process.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={step.title} className="relative">
                {index < preset.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-[#E0DDD9]" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: "var(--brand-accent-soft)" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "var(--brand-accent-ink)" }} />
                    </div>
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-white flex items-center justify-center"
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        backgroundColor: "var(--brand-accent)",
                        color: "var(--brand-accent-on)",
                      }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3
                    className="text-[#1A1A1A] mb-2"
                    style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.3 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
