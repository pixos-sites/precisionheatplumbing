import { Mail, MapPin, Phone } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";
import { BSLogo } from "./BSLogo";

interface FooterProps {
  preset: BusinessPreset;
}

export function Footer({ preset }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              {preset.brand.useBsLogo ? (
                <BSLogo className="h-12 w-auto" variant="white" />
              ) : (
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center h-11 px-3 rounded-md"
                    style={{
                      minWidth: "3.25rem",
                      backgroundColor: "var(--brand-accent)",
                      color: "var(--brand-accent-on)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {preset.brand.shortName}
                  </span>
                  <span className="text-white" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                    {preset.brand.companyName}
                  </span>
                </div>
              )}
            </div>
            <p className="text-white/50 mb-6" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
              {preset.footer.description}
            </p>
            <div className="space-y-3">
              <a href={preset.contact.phoneHref} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4" style={{ color: "var(--brand-accent-ink)" }} />
                <span style={{ fontSize: "0.875rem" }}>{preset.contact.phoneDisplay}</span>
              </a>
              <a href={preset.contact.emailHref} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4" style={{ color: "var(--brand-accent-ink)" }} />
                <span style={{ fontSize: "0.875rem" }}>{preset.contact.email}</span>
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" style={{ color: "var(--brand-accent-ink)" }} />
                <span style={{ fontSize: "0.875rem" }}>{preset.contact.location}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}>
              {preset.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5">
              {preset.footer.services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: "0.875rem" }}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}>
              {preset.footer.areasTitle}
            </h4>
            <ul className="space-y-2.5">
              {preset.footer.areas.map((area) => (
                <li key={area}>
                  <span className="text-white/50" style={{ fontSize: "0.875rem" }}>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}>
              {preset.footer.ctaTitle}
            </h4>
            <p className="text-white/50 mb-5" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
              {preset.footer.ctaDescription}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full text-white px-5 py-3 rounded-lg transition-opacity hover:opacity-90"
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                backgroundColor: "var(--brand-accent)",
                color: "var(--brand-accent-on)",
              }}
            >
              {preset.footer.ctaLabel}
            </a>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/50" style={{ fontSize: "0.8125rem" }}>
                {preset.footer.reviewsLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40" style={{ fontSize: "0.8125rem" }}>
            &copy; {currentYear} {preset.footer.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors" style={{ fontSize: "0.8125rem" }}>
              {preset.footer.privacyLabel}
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors" style={{ fontSize: "0.8125rem" }}>
              {preset.footer.termsLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
