import type { BusinessPreset } from "@/config/template.types";
import { iconMap } from "./iconMap";

interface WhyChooseUsProps {
  preset: BusinessPreset;
}

export function WhyChooseUs({ preset }: WhyChooseUsProps) {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span
            className="uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-accent)" }}
          >
            {preset.whyChooseUs.badge}
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--brand-heading-font)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {preset.whyChooseUs.title}
          </h2>
          <p className="text-white/60" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            {preset.whyChooseUs.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {preset.whyChooseUs.items.map((reason) => {
            const Icon = iconMap[reason.icon];
            return (
              <div
                key={reason.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/10 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: "var(--brand-accent)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#1A1A1A" }} />
                </div>
                <h3
                  className="text-white mb-2"
                  style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {reason.title}
                </h3>
                <p className="text-white/60" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
