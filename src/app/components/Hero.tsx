import { ArrowRight, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&fit=crop"
          alt="Modern home exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/70 to-[#1A1A1A]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-5 lg:mb-6">
            <div className="w-2 h-2 bg-[#C8102E] rounded-full" />
            <span className="text-white/90" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
              Family-run builders for over 30 years
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-3 lg:mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            Building homes you'll
            <br />
            love to live in
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/80 mb-6 lg:mb-8 max-w-lg"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6 }}
          >
            Extensions, conversions, new builds and renovations across Scotland.
            All trades in-house — no sub-contractors, just quality you can trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8102E] text-white px-7 py-4 rounded-lg hover:bg-[#A30D25] transition-all hover:shadow-lg hover:shadow-[#C8102E]/20 group"
              style={{ fontSize: "1rem", fontWeight: 600 }}
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/25 px-7 py-4 rounded-lg hover:bg-white/20 transition-all"
              style={{ fontSize: "1rem", fontWeight: 500 }}
            >
              View Our Work
            </a>
          </div>

          {/* Quick contact */}
          <div className="mt-8 lg:mt-10 flex items-center gap-6 flex-wrap">
            <a href="tel:01418805656" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#C8102E]" />
              </div>
              <div>
                <span className="block text-white/60" style={{ fontSize: "0.75rem" }}>Call us today</span>
                <span className="block text-white" style={{ fontSize: "0.9375rem", fontWeight: 600 }}>0141 880 5656</span>
              </div>
            </a>
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-white/70 ml-2" style={{ fontSize: "0.8125rem" }}>
                4.6 rated on Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}