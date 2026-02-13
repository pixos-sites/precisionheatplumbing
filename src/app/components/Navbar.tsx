import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { BSLogo } from "./BSLogo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#portfolio" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <BSLogo className="h-10 lg:h-12 w-auto" />
            <span className="lg:hidden text-[#1A1A1A] font-bold tracking-tight" style={{ fontSize: "1.125rem" }}>
              BS Builders
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01418805656"
              className="flex items-center gap-2 text-[#1A1A1A]"
              style={{ fontSize: "0.875rem", fontWeight: 600 }}
            >
              <Phone className="w-4 h-4 text-[#C8102E]" />
              0141 880 5656
            </a>
            <a
              href="#contact"
              className="bg-[#C8102E] text-white px-5 py-2.5 rounded-lg hover:bg-[#A30D25] transition-colors"
              style={{ fontSize: "0.875rem", fontWeight: 600 }}
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1A1A1A]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
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
                href="tel:01418805656"
                className="flex items-center gap-2 px-4 py-3 text-[#1A1A1A]"
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                <Phone className="w-5 h-5 text-[#C8102E]" />
                Call Us Now
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#C8102E] text-white px-5 py-3 rounded-lg hover:bg-[#A30D25] transition-colors mx-4"
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}