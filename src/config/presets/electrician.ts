import type { BusinessPreset } from "../template.types";

export const electricianPreset: BusinessPreset = {
  id: "electrician",
  brand: {
    companyName: "Northline Electrical",
    shortName: "Northline",
    fontBody: "'Inter', sans-serif",
    fontHeading: "'DM Serif Display', serif",
    accent: "#F59E0B",
    accentHover: "#D97706",
    accentSoft: "#FEF3C7",
    heroOverlayStart: "rgba(17, 24, 39, 0.9)",
    heroOverlayMid: "rgba(17, 24, 39, 0.66)",
    heroOverlayEnd: "rgba(17, 24, 39, 0.35)",
    mobileNavLabel: "Northline Electrical",
    useBsLogo: false,
  },
  contact: {
    phoneDisplay: "0161 496 2002",
    phoneHref: "tel:01614962002",
    email: "hello@northlineelectrical.co.uk",
    emailHref: "mailto:hello@northlineelectrical.co.uk",
    location: "Manchester, England",
    serviceAreaLine: "Serving Manchester, Salford and surrounding areas",
    openingHours: "Mon-Sat, 8am-6pm",
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#portfolio" },
      { label: "Why Us", href: "#why-us" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    desktopCtaLabel: "Book an Electrician",
    mobileCallLabel: "Call Electrician",
    mobileCtaLabel: "Book Quote",
  },
  hero: {
    badge: "Certified electricians for homes and businesses",
    titleLine1: "Safe electrical work",
    titleLine2: "done right first time",
    description:
      "From emergency faults to full rewires and EV charger installs, we deliver compliant, high-quality electrical work with clear communication.",
    primaryCtaLabel: "Get a Free Quote",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "View Recent Projects",
    secondaryCtaHref: "#portfolio",
    callLabel: "Need urgent fault support?",
    ratingLabel: "4.8 rated on Google",
    backgroundImage:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80&fit=crop",
    backgroundAlt: "Electrician working on residential wiring",
  },
  trustBar: [
    { icon: "clock", value: "Same Day", label: "Fault Response" },
    { icon: "map-pin", value: "Manchester", label: "Local Coverage" },
    { icon: "shield", value: "Certified", label: "Compliant & Insured" },
    { icon: "award", value: "NICEIC", label: "Approved Contractor" },
  ],
  services: {
    badge: "What We Do",
    title: "Residential and commercial electrical services",
    description:
      "Reliable electricians for planned works, compliance upgrades, and urgent faults across homes and small commercial spaces.",
    enquireLabel: "Enquire now",
    items: [
      {
        title: "Emergency Fault Finding",
        description:
          "Rapid diagnostics and safe repairs for tripping circuits, power loss, and electrical faults.",
        image:
          "https://images.unsplash.com/photo-1621905252472-e8f7d0f6d6d6?w=800&q=80&fit=crop",
        features: ["Power outages", "Tripping circuits", "Safe temporary fixes"],
      },
      {
        title: "Consumer Unit Upgrades",
        description:
          "Modern fuse board upgrades that improve safety and provide clear circuit management.",
        image:
          "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&q=80&fit=crop",
        features: ["RCD protection", "Surge protection", "Circuit labelling"],
      },
      {
        title: "Full & Partial Rewires",
        description:
          "Carefully planned rewires for older homes, extensions, and major refurbishments.",
        image:
          "https://images.unsplash.com/photo-1623861608520-8c0f4f839b4b?w=800&q=80&fit=crop",
        features: ["Property rewires", "Extension circuits", "Testing and sign-off"],
      },
      {
        title: "EV Charger Installation",
        description:
          "Professional EV charger setup with compliant installation and user handover.",
        image:
          "https://images.unsplash.com/photo-1617886322207-6f504bf38c22?w=800&q=80&fit=crop",
        features: ["Home chargers", "Load checks", "Smart charger setup"],
      },
      {
        title: "Lighting Design & Install",
        description:
          "Indoor and outdoor lighting upgrades for better efficiency, control and ambience.",
        image:
          "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?w=800&q=80&fit=crop",
        features: ["LED upgrades", "Garden lighting", "Dimmer systems"],
      },
      {
        title: "Testing & Certification",
        description:
          "EICR testing and certification for homeowners, landlords, and commercial premises.",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80&fit=crop",
        features: ["EICR reports", "Landlord certs", "Remedial actions"],
      },
    ],
  },
  process: {
    badge: "How It Works",
    title: "From booking to certification",
    description: "Simple scheduling with clear technical communication at each stage.",
    steps: [
      {
        icon: "message-square",
        step: "01",
        title: "Describe the Job",
        description: "Share the issue or project details and any timing requirements.",
      },
      {
        icon: "clipboard-list",
        step: "02",
        title: "Scope & Quote",
        description: "We assess requirements and provide a clear quote with options where relevant.",
      },
      {
        icon: "hard-hat",
        step: "03",
        title: "Certified Installation",
        description: "Work is completed safely, cleanly and to current regulations.",
      },
      {
        icon: "key-round",
        step: "04",
        title: "Test, Certify, Handover",
        description: "Final testing, certification and a practical walkthrough of completed work.",
      },
    ],
  },
  portfolio: {
    badge: "Our Work",
    title: "Recent electrical projects",
    description: "A sample of fault repairs, upgrades, and installations completed across Manchester.",
    categories: ["All", "Faults", "Rewires", "Lighting", "EV Charging", "Certification"],
    items: [
      {
        id: 1,
        title: "Commercial Fault Resolution",
        location: "Salford",
        description: "Out-of-hours diagnostics and corrective work to restore critical circuits.",
        image:
          "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=1080&q=80&fit=crop",
        category: "Faults",
      },
      {
        id: 2,
        title: "Terraced House Rewire",
        location: "Didsbury",
        description: "Partial rewire, new consumer unit and test certification for renovation project.",
        image:
          "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1080&q=80&fit=crop",
        category: "Rewires",
      },
      {
        id: 3,
        title: "Kitchen Lighting Upgrade",
        location: "Chorlton",
        description: "Layered task and ambient lighting with smart dimmer control.",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1080&q=80&fit=crop",
        category: "Lighting",
      },
      {
        id: 4,
        title: "Dual EV Charger Install",
        location: "Stockport",
        description: "Two-home charger install with load balancing and app setup.",
        image:
          "https://images.unsplash.com/photo-1593941707882-a5bba53b438f?w=1080&q=80&fit=crop",
        category: "EV Charging",
      },
      {
        id: 5,
        title: "Landlord EICR Package",
        location: "Ancoats",
        description: "Portfolio testing for six apartments with clear remedial recommendations.",
        image:
          "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1080&q=80&fit=crop",
        category: "Certification",
      },
      {
        id: 6,
        title: "Garden and Security Lighting",
        location: "Altrincham",
        description: "Outdoor lighting redesign with motion activation and efficiency upgrades.",
        image:
          "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=1080&q=80&fit=crop",
        category: "Lighting",
      },
    ],
  },
  whyChooseUs: {
    badge: "Why Choose Us",
    title: "Electrical work with zero shortcuts",
    description: "Safe, certified, and properly documented work for peace of mind.",
    items: [
      {
        icon: "hammer",
        title: "Certified Team",
        description: "Qualified electricians experienced in domestic and small commercial projects.",
      },
      {
        icon: "users",
        title: "Project Clarity",
        description: "Clear scopes, transparent pricing and realistic project timelines.",
      },
      {
        icon: "check-circle",
        title: "Compliance Focused",
        description: "Testing and documentation are built into every relevant job.",
      },
      {
        icon: "message-square",
        title: "Practical Advice",
        description: "Actionable recommendations for safety upgrades and future-proofing.",
      },
      {
        icon: "pound-sterling",
        title: "Transparent Pricing",
        description: "No hidden extras and no work started without your approval.",
      },
      {
        icon: "heart-handshake",
        title: "Ongoing Support",
        description: "Responsive support for maintenance and future additions.",
      },
    ],
  },
  testimonials: {
    badge: "Testimonials",
    title: "Client feedback",
    description: "What local homeowners and businesses say about our electrical work.",
    averageRatingValue: "4.8",
    averageRatingText: "average rating on Google",
    items: [
      {
        name: "Lewis H.",
        location: "Sale",
        project: "Consumer unit upgrade",
        text: "Excellent communication and very tidy work. Everything was clearly explained.",
        rating: 5,
      },
      {
        name: "Amelia J.",
        location: "Salford",
        project: "EICR + remedial works",
        text: "Prompt, professional and fully documented. Great service start to finish.",
        rating: 5,
      },
      {
        name: "Jordan T.",
        location: "Prestwich",
        project: "EV charger install",
        text: "Quick install with clear handover and setup guidance. Highly recommended.",
        rating: 5,
      },
      {
        name: "Mia & Ben R.",
        location: "Didsbury",
        project: "Lighting redesign",
        text: "Smart ideas, fair pricing and great finish quality throughout the house.",
        rating: 5,
      },
    ],
  },
  contactForm: {
    badge: "Get in Touch",
    title: "Plan your electrical work with confidence",
    description: "Send your project details and we will reply quickly with next steps.",
    introTitle: "Request an electrical quote",
    introDescription: "Tell us what you need and we will get back to you promptly.",
    submitLabel: "Send Enquiry",
    successTitle: "Thanks, your enquiry is in",
    successBodyPrefix: "We will be in touch shortly. For urgent support call",
    successBodySuffix: ".",
    resetLabel: "Send another enquiry",
    privacyNote: "Your details are kept private and only used to respond to your enquiry.",
    nameLabel: "Your name *",
    namePlaceholder: "Alex Taylor",
    phoneLabel: "Phone number *",
    phonePlaceholder: "07xxx xxx xxx",
    emailLabel: "Email address",
    emailPlaceholder: "alex@example.com",
    serviceLabel: "What do you need? *",
    servicePlaceholder: "Select an electrical service...",
    messageLabel: "Tell us about your project",
    messagePlaceholder: "Share the scope, timeline, and any known issues...",
    options: [
      { value: "fault", label: "Emergency fault finding" },
      { value: "consumer-unit", label: "Consumer unit upgrade" },
      { value: "rewire", label: "Full/partial rewire" },
      { value: "ev", label: "EV charger installation" },
      { value: "lighting", label: "Lighting installation" },
      { value: "eicr", label: "EICR testing/certification" },
      { value: "commercial", label: "Commercial electrical work" },
      { value: "other", label: "Other / not sure" },
    ],
    trustBadges: ["Certified Electricians", "Compliant Work", "Clear Quotes"],
  },
  footer: {
    description:
      "Safe, certified electrical services for homes and businesses across Manchester.",
    servicesTitle: "SERVICES",
    services: [
      "Emergency Fault Finding",
      "Consumer Unit Upgrades",
      "Full/Partial Rewires",
      "EV Charger Installation",
      "Lighting Installation",
      "EICR Testing & Certification",
    ],
    areasTitle: "AREAS WE COVER",
    areas: [
      "Manchester",
      "Salford",
      "Didsbury",
      "Stockport",
      "Altrincham",
      "Chorlton",
      "Sale",
      "Greater Manchester",
    ],
    ctaTitle: "START YOUR PROJECT",
    ctaDescription: "Book a certified electrician for your next project or urgent repair.",
    ctaLabel: "Get a Free Quote",
    reviewsLabel: "4.8 on Google Reviews",
    legalName: "Northline Electrical Ltd",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
  },
};
