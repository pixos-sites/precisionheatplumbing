import { MessageSquare, ClipboardList, HardHat, KeyRound } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Get in Touch",
    description:
      "Call us or fill in our form. We'll have a friendly chat about what you need and arrange a convenient time to visit.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Free Site Visit & Quote",
    description:
      "We'll visit your property to discuss your ideas. For larger jobs, our architect can produce structural drawings. You'll receive a clear, no-obligation quote.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "We Get to Work",
    description:
      "The start date is agreed by both parties. All work is managed by our Company Director and carried out to Building Control standards.",
  },
  {
    icon: KeyRound,
    step: "04",
    title: "Handover & Aftercare",
    description:
      "We walk you through the finished project. We rely on each job speaking for itself — with no questions asked. We're always just a phone call away.",
  },
];

export function Process() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span
            className="text-[#C8102E] uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600 }}
          >
            How It Works
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
            From first call to finished project
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            We make the process straightforward and stress-free. Here's what to expect when you
            work with us.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-[#E0DDD9]" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex">
                    <div className="w-14 h-14 rounded-xl bg-[#C8102E]/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#C8102E]" />
                    </div>
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#C8102E] text-white flex items-center justify-center"
                      style={{ fontSize: "0.6875rem", fontWeight: 700 }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3
                    className="text-[#1A1A1A] mb-2"
                    style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.3 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}