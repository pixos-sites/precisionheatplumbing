import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James P.",
    location: "Newton Mearns",
    project: "Two-storey extension",
    text: "From the first meeting to the final walkthrough, the team were brilliant. They were tidy, communicative, and the quality of the build is outstanding. We'd recommend them to anyone without hesitation.",
    rating: 5,
  },
  {
    name: "Mark T.",
    location: "Paisley",
    project: "Full kitchen renovation",
    text: "We'd had a bad experience with another builder, so we were nervous. BS Builders completely restored our trust. They did exactly what they said they would, on time and on budget. The kitchen looks incredible.",
    rating: 5,
  },
  {
    name: "Helen R.",
    location: "Barrhead",
    project: "Loft conversion",
    text: "Professional, punctual, and a pleasure to have in the house. They kept everything clean and tidy, and always explained what they were doing. The loft conversion has transformed our home.",
    rating: 5,
  },
  {
    name: "David & Karen M.",
    location: "East Kilbride",
    project: "New build garage",
    text: "Excellent workmanship from start to finish. All trades were in-house which made everything so much smoother. We wouldn't go anywhere else for our building work.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span
            className="text-[#C8102E] uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600 }}
          >
            Testimonials
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
            What our clients say
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Don't just take our word for it. Here's what recent customers have to say about
            working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 lg:p-8 border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#C8102E]/10 flex items-center justify-center shrink-0">
                  <Quote className="w-4 h-4 text-[#C8102E]" />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[#1A1A1A]" style={{ fontSize: "0.9375rem", fontWeight: 600 }}>
                    {t.name}
                  </span>
                  <span className="text-[#6B7280] ml-2" style={{ fontSize: "0.8125rem" }}>
                    {t.location}
                  </span>
                </div>
              </div>
              <p className="text-[#4A4F56] mb-4" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                "{t.text}"
              </p>
              <div className="pt-3 border-t border-border">
                <span className="text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                  Project: {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-border">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-[#1A1A1A]" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
              4.6
            </span>
            <span className="text-[#6B7280]" style={{ fontSize: "0.875rem" }}>
              average rating on Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}