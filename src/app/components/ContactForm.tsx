import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { BSLogo } from "./BSLogo";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would submit to a backend
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <span
              className="text-[#C8102E] uppercase tracking-wider mb-3 block"
              style={{ fontSize: "0.8125rem", fontWeight: 600 }}
            >
              Get in Touch
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
              Ready to start your project?
            </h2>
            <p className="text-[#6B7280] mb-8" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              Tell us what you have in mind and we'll get back to you within 24 hours. No obligation,
              no hard sell — just honest, helpful advice from a local team you can trust.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              <a href="tel:01418805656" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-[#C8102E]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C8102E]" />
                </div>
                <div>
                  <span className="block text-[#1A1A1A] group-hover:text-[#C8102E] transition-colors" style={{ fontSize: "1rem", fontWeight: 600 }}>
                    0141 880 5656
                  </span>
                  <span className="block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                    Mon–Fri, 8am–6pm
                  </span>
                </div>
              </a>

              <a href="mailto:bsbuildersltd@gmail.com" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-[#C8102E]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C8102E]" />
                </div>
                <div>
                  <span className="block text-[#1A1A1A] group-hover:text-[#C8102E] transition-colors" style={{ fontSize: "1rem", fontWeight: 600 }}>
                    bsbuildersltd@gmail.com
                  </span>
                  <span className="block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                    We aim to reply within 24 hours
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#C8102E]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C8102E]" />
                </div>
                <div>
                  <span className="block text-[#1A1A1A]" style={{ fontSize: "1rem", fontWeight: 600 }}>
                    Glasgow, Scotland
                  </span>
                  <span className="block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                    Serving Glasgow, Lanarkshire, Ayrshire & all of Scotland
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#C8102E]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#C8102E]" />
                </div>
                <div>
                  <span className="block text-[#1A1A1A]" style={{ fontSize: "1rem", fontWeight: 600 }}>
                    Free Estimates
                  </span>
                  <span className="block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                    No-obligation quotes for all projects
                  </span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-border">
                  <CheckCircle2 className="w-4 h-4 text-[#C8102E]" />
                  <span className="text-[#1A1A1A]" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                    Fully Insured
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-border">
                  <CheckCircle2 className="w-4 h-4 text-[#C8102E]" />
                  <span className="text-[#1A1A1A]" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                    Free Quotes
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-border">
                  <CheckCircle2 className="w-4 h-4 text-[#C8102E]" />
                  <span className="text-[#1A1A1A]" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                    No Hard Sell
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-border p-6 lg:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#C8102E]/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-[#C8102E]" />
                  </div>
                  <h3
                    className="text-[#1A1A1A] mb-2"
                    style={{ fontSize: "1.375rem", fontWeight: 600, lineHeight: 1.3 }}
                  >
                    Thank you for your enquiry
                  </h3>
                  <p className="text-[#6B7280] max-w-md mx-auto" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
                    We've received your message and will be in touch within 24 hours. If it's urgent,
                    please give us a ring on{" "}
                    <a href="tel:01418805656" className="text-[#C8102E]" style={{ fontWeight: 600 }}>
                      0141 880 5656
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="mt-6 text-[#C8102E]"
                    style={{ fontSize: "0.875rem", fontWeight: 600 }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3
                      className="text-[#1A1A1A] mb-1"
                      style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.3 }}
                    >
                      Request a free quote
                    </h3>
                    <p className="text-[#6B7280]" style={{ fontSize: "0.875rem" }}>
                      Fill in the form below and we'll get back to you promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-[#1A1A1A] mb-1.5"
                          style={{ fontSize: "0.875rem", fontWeight: 500 }}
                        >
                          Your name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:border-[#C8102E] focus:bg-white focus:outline-none transition-all"
                          style={{ fontSize: "0.9375rem" }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[#1A1A1A] mb-1.5"
                          style={{ fontSize: "0.875rem", fontWeight: 500 }}
                        >
                          Phone number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="07xxx xxx xxx"
                          className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:border-[#C8102E] focus:bg-white focus:outline-none transition-all"
                          style={{ fontSize: "0.9375rem" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[#1A1A1A] mb-1.5"
                        style={{ fontSize: "0.875rem", fontWeight: 500 }}
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.co.uk"
                        className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:border-[#C8102E] focus:bg-white focus:outline-none transition-all"
                        style={{ fontSize: "0.9375rem" }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-[#1A1A1A] mb-1.5"
                        style={{ fontSize: "0.875rem", fontWeight: 500 }}
                      >
                        What do you need? *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:border-[#C8102E] focus:bg-white focus:outline-none transition-all appearance-none"
                        style={{ fontSize: "0.9375rem" }}
                      >
                        <option value="">Select a service...</option>
                        <option value="extension">House Extension</option>
                        <option value="loft">Loft Conversion</option>
                        <option value="garage">Garage Conversion</option>
                        <option value="kitchen">Kitchen Fitting</option>
                        <option value="bathroom">Bathroom Renovation</option>
                        <option value="newbuild">New Build</option>
                        <option value="roofing">Roofing & Joinery</option>
                        <option value="interior">Plastering / Tiling / Electrical / Plumbing</option>
                        <option value="landscaping">Landscaping / Mono-blocking</option>
                        <option value="upvc">UPVC Windows & Doors</option>
                        <option value="other">Other / Not sure</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[#1A1A1A] mb-1.5"
                        style={{ fontSize: "0.875rem", fontWeight: 500 }}
                      >
                        Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe what you'd like to do, your rough timeline, and any other details..."
                        className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:border-[#C8102E] focus:bg-white focus:outline-none transition-all resize-none"
                        style={{ fontSize: "0.9375rem" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#C8102E] text-white px-6 py-4 rounded-lg hover:bg-[#A30D25] transition-colors"
                      style={{ fontSize: "1rem", fontWeight: 600 }}
                    >
                      <Send className="w-4 h-4" />
                      Send Enquiry
                    </button>

                    <p className="text-center text-[#9CA3AF]" style={{ fontSize: "0.8125rem" }}>
                      No obligation. We'll respond within 24 hours. Your details are kept private and never shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}