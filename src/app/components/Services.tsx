import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: "Extensions & Conversions",
    description:
      "Create the space your family needs. From house extensions to loft and garage conversions, all our trades are in-house so we manage every detail from planning to handover.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop",
    features: ["House extensions", "Loft conversions", "Garage conversions"],
  },
  {
    title: "Kitchens & Bathrooms",
    description:
      "We supply and install high quality kitchens with a choice of laminate, glass and quartz worktops, plus bathroom suites and furniture to suit every budget.",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80&fit=crop",
    features: ["Full kitchen refits", "Bathroom suites", "Wet wall systems"],
  },
  {
    title: "New Builds",
    description:
      "From groundworks to final fix, we build quality new homes. Our architect can visit to discuss the best design and produce the proper structural drawings for you.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&fit=crop",
    features: ["Bespoke new builds", "Planning & design", "Building control standards"],
  },
  {
    title: "Roofing & Joinery",
    description:
      "Protect your biggest investment. From roof repairs and replacements to bespoke joinery, UPVC windows, UPVC doors and bi-fold door installations.",
    image:
      "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80&fit=crop",
    features: ["Roofing", "UPVC windows & doors", "Bi-fold doors"],
  },
  {
    title: "Interior Trades",
    description:
      "All trades carried out in-house by fully qualified and experienced tradesmen — plastering, tiling, electrical work, plumbing, real wood flooring, and a full painting and decorating service.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80&fit=crop",
    features: ["Plastering & tiling", "Electrical & plumbing", "Painting & decorating"],
  },
  {
    title: "Landscaping & Groundworks",
    description:
      "Complete your home from the outside in. Extensive groundworks, alterations and improvements — we work on the outside as well as the inside, including mono-blocking and landscaping.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80&fit=crop",
    features: ["Mono-blocking", "Landscaping", "Groundworks & driveways"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span
            className="text-[#C8102E] uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600 }}
          >
            What We Do
          </span>
          <h2
            className="text-[#1A1A1A] mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Building services tailored to your home
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            All our work is guaranteed and carried out to the highest standard by fully qualified
            and experienced tradesmen. All trades in-house — never sub-contracted.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-[#1A1A1A] mb-2"
                  style={{ fontSize: "1.1875rem", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#6B7280] mb-4"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                      <span className="text-[#1A1A1A]" style={{ fontSize: "0.875rem" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[#C8102E] group-hover:gap-2.5 transition-all"
                  style={{ fontSize: "0.875rem", fontWeight: 600 }}
                >
                  Enquire now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}