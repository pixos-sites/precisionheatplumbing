import { MessageSquare, Phone } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";

interface StickyCTAProps {
  preset: BusinessPreset;
}

export function StickyCTA({ preset }: StickyCTAProps) {
  const whatsapp = preset.enhancements?.whatsapp;
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.phoneNumber.replace(/\D/g, "")}${
        whatsapp.prefillMessage ? `?text=${encodeURIComponent(whatsapp.prefillMessage)}` : ""
      }`
    : null;
  const useFloatingWhatsappOnly = preset.id === "precisionheatplumbing";

  if (useFloatingWhatsappOnly) {
    return (
      <a
        href={whatsappHref ?? "#contact"}
        target={whatsappHref ? "_blank" : undefined}
        rel={whatsappHref ? "noopener noreferrer" : undefined}
        className="fixed left-1/2 z-50 flex -translate-x-1/2 lg:hidden items-center justify-center gap-2"
        style={{
          height: 50,
          width: "calc(100% - 28px)",
          maxWidth: 320,
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.14)",
          backgroundColor: "var(--brand-accent)",
          color: "var(--brand-accent-on)",
          fontSize: "0.9375rem",
          fontWeight: 600,
          textDecoration: "none",
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 10px)",
          boxShadow: "0 10px 28px rgba(0,0,0,0.24)",
          transform: "translateZ(0)",
        }}
      >
        <MessageSquare className="w-4 h-4" />
        {whatsapp?.stickyLabel ?? "WhatsApp Chat"}
      </a>
    );
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      style={{
        transform: "translateZ(0)",
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
