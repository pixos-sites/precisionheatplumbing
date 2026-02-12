import { Phone, Mail, MapPin } from "lucide-react";
import { BSLogo } from "./BSLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <BSLogo className="h-12 w-auto" variant="white" />
            </div>
            <p className="text-white/50 mb-6" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
              Family-run building and construction services across Scotland. Built from the
              foundations of Stevenson's Builders — over 30 years of quality craftsmanship.
            </p>
            <div className="space-y-3">
              <a href="tel:01418805656" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#C8102E]" />
                <span style={{ fontSize: "0.875rem" }}>0141 880 5656</span>
              </a>
              <a href="mailto:bsbuildersltd@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#C8102E]" />
                <span style={{ fontSize: "0.875rem" }}>bsbuildersltd@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-[#C8102E]" />
                <span style={{ fontSize: "0.875rem" }}>Glasgow, Scotland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}>
              SERVICES
            </h4>
            <ul className="space-y-2.5">
              {[
                "Extensions & Conversions",
                "Kitchens & Bathrooms",
                "New Builds",
                "Roofing & Joinery",
                "Interior Trades",
                "Landscaping & Groundworks",
                "UPVC Windows & Doors",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-white transition-colors"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas We Cover */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}>
              AREAS WE COVER
            </h4>
            <ul className="space-y-2.5">
              {[
                "Glasgow",
                "Paisley",
                "Newton Mearns",
                "Barrhead",
                "East Kilbride",
                "Hamilton",
                "Lanarkshire",
                "Ayrshire",
              ].map((area) => (
                <li key={area}>
                  <span className="text-white/50" style={{ fontSize: "0.875rem" }}>
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}>
              START YOUR PROJECT
            </h4>
            <p className="text-white/50 mb-5" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
              Ready to discuss your plans? Get in touch for a free, no-obligation quote.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full bg-[#C8102E] text-white px-5 py-3 rounded-lg hover:bg-[#A30D25] transition-colors"
              style={{ fontSize: "0.9375rem", fontWeight: 600 }}
            >
              Get a Free Quote
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
                4.6 on Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40" style={{ fontSize: "0.8125rem" }}>
            &copy; {currentYear} BS Builders Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors" style={{ fontSize: "0.8125rem" }}>
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors" style={{ fontSize: "0.8125rem" }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}