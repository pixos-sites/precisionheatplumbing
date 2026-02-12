import {
  MessageSquare,
  Hammer,
  PoundSterling,
  Users,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Hammer,
    title: "All Trades In-House",
    description:
      "Every trade is in-house and never sub-contracted. This allows us to monitor the quality, build, materials and finish on every job we do.",
  },
  {
    icon: Users,
    title: "Family Business, 30+ Years",
    description:
      "Built from the foundations of the family-run Stevenson's Builders, we've built up our trade over a 30 year period — and we've kept the business in the family.",
  },
  {
    icon: CheckCircle2,
    title: "Guaranteed Work",
    description:
      "All our work is guaranteed and carried out to Building Control standards by fully qualified and experienced tradesmen.",
  },
  {
    icon: MessageSquare,
    title: "Come & See for Yourself",
    description:
      "Visit our office to view our portfolio, or we can show you an active or completed site. Our work speaks for itself — we have nothing to hide.",
  },
  {
    icon: PoundSterling,
    title: "Fully Insured",
    description:
      "Fully covered by employer's liability and public liability insurance. All documentation available on reasonable request.",
  },
  {
    icon: HeartHandshake,
    title: "Complete Service",
    description:
      "From planning and design through to build and finish, we handle everything. We also welcome contract and invite-to-tender work.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span
            className="text-[#C8102E] uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600 }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            The kind of builder you've been looking for
          </h2>
          <p className="text-white/60" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            No matter what you are looking to do with your home or property, rest assured — you
            are in capable hands. Here's why customers across Scotland trust us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C8102E]/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#C8102E]" />
                </div>
                <h3
                  className="text-white mb-2"
                  style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {reason.title}
                </h3>
                <p className="text-white/60" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}