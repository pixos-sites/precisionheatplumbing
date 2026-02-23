import type { BusinessPreset } from "@/config/template.types";
import { iconMap } from "./iconMap";

interface TrustBarProps {
  preset: BusinessPreset;
}

export function TrustBar({ preset }: TrustBarProps) {
  return (
    <section className="relative z-20 -mt-12 lg:-mt-14 mb-[-3rem] lg:mb-[-3.5rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg shadow-black/8 border border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
            {preset.trustBar.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.label} className="flex items-center gap-4 p-5 lg:p-8">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--brand-accent-soft)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--brand-accent-ink)" }} />
                  </div>
                  <div>
                    <span className="block text-[#1A1A1A]" style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.2 }}>
                      {item.value}
                    </span>
                    <span className="block text-[#6B7280]" style={{ fontSize: "0.8125rem", lineHeight: 1.3 }}>
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
