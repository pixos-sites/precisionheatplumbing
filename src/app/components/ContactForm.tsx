import { useState } from "react";
import { CheckCircle2, Clock, ExternalLink, Mail, MapPin, MessageSquare, Phone, Send, Star } from "lucide-react";
import type { BusinessPreset } from "@/config/template.types";

interface ContactFormProps {
  preset: BusinessPreset;
}

export function ContactForm({ preset }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const whatsapp = preset.enhancements?.whatsapp;
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.phoneNumber.replace(/\D/g, "")}${
        whatsapp.prefillMessage ? `?text=${encodeURIComponent(whatsapp.prefillMessage)}` : ""
      }`
    : null;
  const reviews = preset.enhancements?.reviews;
  const mapEmbed = preset.enhancements?.map;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const key = preset.contactForm.web3formsKey;
    if (!key) { setSubmitted(true); return; }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `New enquiry from ${formData.name} — ${preset.brand.companyName}`,
          from_name: preset.brand.companyName,
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <span
              className="uppercase tracking-wider mb-3 block"
              style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-accent-ink)" }}
            >
              {preset.contactForm.badge}
            </span>
            <h2
              className="text-[#1A1A1A] mb-4"
              style={{
                fontFamily: "var(--brand-heading-font)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: "var(--brand-heading-weight, 700)",
                lineHeight: 1.2,
              }}
            >
              {preset.contactForm.title}
            </h2>
            <p className="text-[#6B7280] mb-8" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              {preset.contactForm.description}
            </p>

            <div className="space-y-4 sm:space-y-5">
              <a href={preset.contact.phoneHref} className="flex items-start gap-3 sm:gap-4 group">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--brand-accent-soft)" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "var(--brand-accent-ink)" }} />
                </div>
                <div>
                  <span
                    className="block text-[#1A1A1A] transition-colors"
                    style={{ fontSize: "1rem", fontWeight: 600 }}
                  >
                    {preset.contact.phoneDisplay}
                  </span>
                  <span className="hidden sm:block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                    {preset.contact.openingHours}
                  </span>
                </div>
              </a>

              <a href={preset.contact.emailHref} className="flex items-start gap-3 sm:gap-4 group">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--brand-accent-soft)" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "var(--brand-accent-ink)" }} />
                </div>
                <div>
                  <span
                    className="block text-[#1A1A1A] transition-colors"
                    style={{ fontSize: "1rem", fontWeight: 600 }}
                  >
                    {preset.contact.email}
                  </span>
                  <span className="hidden sm:block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                    We aim to reply within 24 hours
                  </span>
                </div>
              </a>

              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--brand-accent-soft)" }}
                  >
                    <MessageSquare className="w-5 h-5" style={{ color: "var(--brand-accent-ink)" }} />
                  </div>
                  <div>
                    <span
                      className="block text-[#1A1A1A] transition-colors"
                      style={{ fontSize: "1rem", fontWeight: 600 }}
                    >
                      {whatsapp.buttonLabel ?? "Message us on WhatsApp"}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                      Quick quote messages welcome
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ) : null}

              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--brand-accent-soft)" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "var(--brand-accent-ink)" }} />
                </div>
                <div>
                  <span className="block text-[#1A1A1A]" style={{ fontSize: "1rem", fontWeight: 600 }}>
                    {preset.contact.location}
                  </span>
                  <span className="hidden sm:block text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                    {preset.contact.serviceAreaLine}
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--brand-accent-soft)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "var(--brand-accent-ink)" }} />
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

              {reviews ? (
                <a
                  href={reviews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-start gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--brand-accent-soft)" }}
                  >
                    <Star className="w-5 h-5" style={{ color: "var(--brand-accent-ink)" }} />
                  </div>
                  <div>
                    <span
                      className="block text-[#1A1A1A] transition-colors"
                      style={{ fontSize: "1rem", fontWeight: 600 }}
                    >
                      {reviews.label ?? "Read our Google reviews"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                      Opens in a new tab
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ) : null}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-4">
                {preset.contactForm.trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-border"
                  >
                    <CheckCircle2 className="w-4 h-4" style={{ color: "var(--brand-accent-ink)" }} />
                    <span className="text-[#1A1A1A]" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl border border-border p-6 lg:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "var(--brand-accent-soft)" }}
                  >
                    <CheckCircle2 className="w-8 h-8" style={{ color: "var(--brand-accent-ink)" }} />
                  </div>
                  <h3
                    className="text-[#1A1A1A] mb-2"
                    style={{ fontSize: "1.375rem", fontWeight: 600, lineHeight: 1.3 }}
                  >
                    {preset.contactForm.successTitle}
                  </h3>
                  <p className="text-[#6B7280] max-w-md mx-auto" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
                    {preset.contactForm.successBodyPrefix}{" "}
                    <a href={preset.contact.phoneHref} style={{ color: "var(--brand-accent-ink)", fontWeight: 600 }}>
                      {preset.contact.phoneDisplay}
                    </a>
                    {preset.contactForm.successBodySuffix}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="mt-6"
                    style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--brand-accent-ink)" }}
                  >
                    {preset.contactForm.resetLabel}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3
                      className="text-[#1A1A1A] mb-1"
                      style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.3 }}
                    >
                      {preset.contactForm.introTitle}
                    </h3>
                    <p className="text-[#6B7280]" style={{ fontSize: "0.875rem" }}>
                      {preset.contactForm.introDescription}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-[#1A1A1A] mb-1.5" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                          {preset.contactForm.nameLabel}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={preset.contactForm.namePlaceholder}
                          className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:bg-white focus:outline-none transition-all"
                          style={{ fontSize: "0.9375rem" }}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-[#1A1A1A] mb-1.5" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                          {preset.contactForm.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={preset.contactForm.phonePlaceholder}
                          className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:bg-white focus:outline-none transition-all"
                          style={{ fontSize: "0.9375rem" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#1A1A1A] mb-1.5" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                        {preset.contactForm.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={preset.contactForm.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:bg-white focus:outline-none transition-all"
                        style={{ fontSize: "0.9375rem" }}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-[#1A1A1A] mb-1.5" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                        {preset.contactForm.serviceLabel}
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:bg-white focus:outline-none transition-all appearance-none"
                        style={{ fontSize: "0.9375rem" }}
                      >
                        <option value="">{preset.contactForm.servicePlaceholder}</option>
                        {preset.contactForm.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[#1A1A1A] mb-1.5" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                        {preset.contactForm.messageLabel}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={preset.contactForm.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-lg bg-[#F5F3EF] border border-transparent focus:bg-white focus:outline-none transition-all resize-none"
                        style={{ fontSize: "0.9375rem" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 text-white px-6 py-4 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-60"
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        backgroundColor: "var(--brand-accent)",
                        color: "var(--brand-accent-on)",
                      }}
                    >
                      <Send className="w-4 h-4" />
                      {submitting ? "Sending…" : preset.contactForm.submitLabel}
                    </button>

                    <p className="text-center text-[#9CA3AF]" style={{ fontSize: "0.8125rem" }}>
                      {preset.contactForm.privacyNote}
                    </p>
                  </form>
                </>
              )}
            </div>

            {mapEmbed ? (
              <div className="bg-white rounded-xl border border-border p-2 shadow-sm">
                <iframe
                  src={mapEmbed.embedUrl}
                  title={mapEmbed.title ?? `${preset.brand.companyName} location map`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[280px] lg:h-[320px] rounded-lg border-0"
                  allowFullScreen
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
