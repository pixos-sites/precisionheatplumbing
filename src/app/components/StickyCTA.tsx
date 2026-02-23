import { MessageSquare, Phone } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";

interface StickyCTAProps {
  preset: BusinessPreset;
}

export function StickyCTA({ preset }: StickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch">
        <a
          href={preset.contact.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[#1A1A1A] border-r border-border active:bg-[#F0EDEA] transition-colors"
          style={{ fontSize: "0.875rem", fontWeight: 600 }}
        >
          <Phone className="w-4 h-4" style={{ color: "var(--brand-accent-ink)" }} />
          {preset.nav.mobileCallLabel}
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white transition-opacity active:opacity-90"
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            backgroundColor: "var(--brand-accent)",
            color: "var(--brand-accent-on)",
          }}
        >
          <MessageSquare className="w-4 h-4" />
          {preset.nav.mobileCtaLabel}
        </a>
      </div>
    </div>
  );
}
