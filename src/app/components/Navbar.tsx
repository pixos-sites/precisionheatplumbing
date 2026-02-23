import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";
import { BSLogo } from "./BSLogo";

interface NavbarProps {
  preset: BusinessPreset;
}

export function Navbar({ preset }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2 shrink-0">
            {preset.brand.useBsLogo ? (
              <BSLogo className="h-10 lg:h-12 w-auto" />
            ) : (
              <div className="flex items-center gap-2.5">
                <span
                  className="inline-flex items-center justify-center h-10 lg:h-11 px-3 rounded-md border"
                  style={{
                    minWidth: "3.25rem",
                    backgroundColor: "var(--brand-accent)",
                    color: "var(--brand-accent-on)",
                    borderColor: "rgba(0,0,0,0.08)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  {preset.brand.shortName}
                </span>
                <span
                  className="hidden sm:block text-[#1A1A1A] leading-tight"
                  style={{ fontSize: "0.95rem", fontWeight: 700 }}
                >
                  {preset.brand.companyName}
                </span>
              </div>
            )}
            <span
              className={`${preset.brand.useBsLogo ? "lg:hidden" : "sm:hidden"} text-[#1A1A1A] font-bold tracking-tight`}
              style={{ fontSize: "1rem" }}
            >
              {preset.brand.mobileNavLabel ?? preset.brand.companyName}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {preset.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
                style={{ fontSize: "0.875rem", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={preset.contact.phoneHref}
              className="flex items-center gap-2 text-[#1A1A1A]"
              style={{ fontSize: "0.875rem", fontWeight: 600 }}
            >
              <Phone className="w-4 h-4" style={{ color: "var(--brand-accent-ink)" }} />
              {preset.contact.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="text-white px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90"
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                backgroundColor: "var(--brand-accent)",
                color: "var(--brand-accent-on)",
              }}
            >
              {preset.nav.desktopCtaLabel}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1A1A1A]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {preset.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-[#1A1A1A] hover:bg-[#F0EDEA] rounded-lg transition-colors"
                style={{ fontSize: "1rem", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border mt-2 space-y-3">
              <a
                href={preset.contact.phoneHref}
                className="flex items-center gap-2 px-4 py-3 text-[#1A1A1A]"
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                <Phone className="w-5 h-5" style={{ color: "var(--brand-accent-ink)" }} />
                {preset.nav.mobileCallLabel}
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center text-white px-5 py-3 rounded-lg transition-colors mx-4"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  backgroundColor: "var(--brand-accent)",
                  color: "var(--brand-accent-on)",
                }}
              >
                {preset.nav.mobileCtaLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
