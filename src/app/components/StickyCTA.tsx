import { useEffect, useState } from "react";
import { MessageSquare, Phone } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";

interface StickyCTAProps {
  preset: BusinessPreset;
}

export function StickyCTA({ preset }: StickyCTAProps) {
  const [viewportOffset, setViewportOffset] = useState(0);
  const whatsapp = preset.enhancements?.whatsapp;
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.phoneNumber.replace(/\D/g, "")}${
        whatsapp.prefillMessage ? `?text=${encodeURIComponent(whatsapp.prefillMessage)}` : ""
      }`
    : null;

  useEffect(() => {
    const visualViewport = window.visualViewport;
    if (!visualViewport) return;

    const updateOffset = () => {
      const offset = Math.max(
        0,
        window.innerHeight - (visualViewport.height + visualViewport.offsetTop)
      );
      setViewportOffset(offset);
    };

    updateOffset();
    visualViewport.addEventListener("resize", updateOffset);
    visualViewport.addEventListener("scroll", updateOffset);
    window.addEventListener("orientationchange", updateOffset);

    return () => {
      visualViewport.removeEventListener("resize", updateOffset);
      visualViewport.removeEventListener("scroll", updateOffset);
      window.removeEventListener("orientationchange", updateOffset);
    };
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      style={{
        bottom: 0,
        transform: `translate3d(0, ${viewportOffset}px, 0)`,
        willChange: "transform",
      }}
    >
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
          href={whatsappHref ?? "#contact"}
          target={whatsappHref ? "_blank" : undefined}
          rel={whatsappHref ? "noopener noreferrer" : undefined}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white transition-opacity active:opacity-90"
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            backgroundColor: "var(--brand-accent)",
            color: "var(--brand-accent-on)",
          }}
        >
          <MessageSquare className="w-4 h-4" />
          {whatsapp?.stickyLabel ?? preset.nav.mobileCtaLabel}
        </a>
      </div>
    </div>
  );
}
