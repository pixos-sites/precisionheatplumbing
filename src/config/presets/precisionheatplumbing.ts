import type { BusinessPreset } from "../template.types";

export const precisionheatplumbingPreset: BusinessPreset = {
  id: "precisionheatplumbing",
  brand: {
    companyName: "Precision Heat Plumbing",
    shortName: "PHP",
    fontBody: "'Inter', system-ui, sans-serif",
    fontHeading: "'Inter', system-ui, sans-serif",
    accent: "#5B4BCF",
    accentHover: "#4A3AAE",
    accentSoft: "#F3F0FF",
    accentInk: "#4A3AAE",
    accentOnAccent: "#FFFFFF",
    heroOverlayStart: "rgba(45,35,110,0.91)",
    heroOverlayMid: "rgba(45,35,110,0.65)",
    heroOverlayEnd: "rgba(45,35,110,0.08)",
    useBsLogo: false,
    logoImage: "/images/plumbing/precision-logo.png",
  },
  contact: {
    phoneDisplay: "07805 565421",
    phoneHref: "tel:07805565421",
    email: "lee@precisionheatplumbing.co.uk",
    emailHref: "mailto:lee@precisionheatplumbing.co.uk",
    location: "Houston, Johnstone, PA6",
    serviceAreaLine: "Covering Glasgow & Renfrewshire",
    openingHours: "Mon–Fri 7am–6pm",
  },
  enhancements: {
    whatsapp: {
      phoneNumber: "447805565421",
      prefillMessage: "Hi Lee, I'd like a quote for plumbing/heating work.",
      buttonLabel: "Message Lee on WhatsApp",
      stickyLabel: "WhatsApp Quote",
    },
    reviews: {
      url: "https://www.google.com/search?q=Precision+Heat+Plumbing+reviews",
      label: "Read our Google reviews",
    },
    socials: {
      instagram: "https://www.instagram.com/precisionheatplumbing/",
      facebook: "https://www.facebook.com/LJBheatingandplumbing",
    },
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Why Us", href: "#why-us" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    desktopCtaLabel: "Get a Quote",
    mobileCallLabel: "Call Lee",
    mobileCtaLabel: "Get a Quote",
  },
  hero: {
    badge: "Worcester Bosch Approved · Nest Certified",
    titleLine1: "Where Precision",
    titleLine2: "Meets Performance.",
    description:
      "Expert plumbing and heating services across Glasgow and Renfrewshire. Boiler installations, gas safety checks, and smart heating — done right, first time.",
    primaryCtaLabel: "Get a Free Quote",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "Our Services",
    secondaryCtaHref: "#services",
    callLabel: "Call Lee direct",
    ratingLabel: "5-star rated on Google",
    backgroundImage:
      "/images/plumbing/hero.jpg",
    backgroundAlt: "Plumber working on boiler installation",
  },
  trustBar: [
    { icon: "shield", value: "Gas Safe", label: "Reg No. 529072" },
    { icon: "award", value: "5-Star", label: "Google Rating" },
    { icon: "hard-hat", value: "7+", label: "Approved Installers" },
    { icon: "clock", value: "Same Day", label: "Response Available" },
  ],
  services: {
    badge: "What We Do",
    title: "Plumbing & Heating, Done Properly",
    description:
      "From new boiler installs to landlord gas safety certificates — fully certified, fully insured, no hidden charges.",
    enquireLabel: "Enquire about this service",
    items: [
      {
        title: "Boiler Installation & Replacement",
        description:
          "Approved installer for Worcester Bosch, Vaillant, Ideal, Glow-Worm, and Potterton. We'll recommend the right boiler for your home and install it to manufacturer spec.",
        image: "/images/plumbing/boiler-install.jpg",
        features: ["All leading brands", "Full commissioning", "Manufacturer warranty"],
      },
      {
        title: "Boiler Servicing",
        description:
          "Annual servicing keeps your boiler running efficiently, maintains your warranty, and catches problems before they become expensive.",
        image: "/images/plumbing/smart-thermostat.jpg",
        features: ["Full safety check", "Gas appliance inspection", "Service record provided"],
      },
      {
        title: "Gas Safety Certificates",
        description:
          "Landlord gas safety checks (CP12) carried out by our Gas Safe registered engineer (Reg No. 529072). Quick turnaround, fully compliant documentation.",
        image: "/images/plumbing/bathroom-plumbing.jpg",
        features: ["Homeowners & landlords", "CP12 certificates", "Gas Safe 529072"],
      },
      {
        title: "Plumbing Repairs & Services",
        description:
          "Leaks, burst pipes, dripping taps, radiator issues — we fix it properly. Charged by the hour, no call-out fee, no hidden costs.",
        image: "/images/plumbing/plumber-working.jpg",
        features: ["No hidden charges", "No parking fees", "1hr minimum charge"],
      },
      {
        title: "Smart Heating Controls",
        description:
          "Nest Certified Professional and Honeywell evohome approved installer. Smart controls that cut energy bills and let you control your heating from anywhere.",
        image: "/images/plumbing/system-boiler.jpg",
        features: ["Nest Certified Pro", "Honeywell evohome", "Remote app control"],
      },
      {
        title: "Power Flushing & System Upgrades",
        description:
          "MagnaCleanse power flushing removes sludge and debris, restoring your heating system to full efficiency. Radiator upgrades and full system rewires also available.",
        image: "/images/plumbing/power-flush.jpg",
        features: ["MagnaCleanse certified", "Full system flush", "Radiator upgrades"],
      },
    ],
  },
  process: {
    badge: "How It Works",
    title: "Straightforward from First Call to Finished Job",
    description:
      "No fuss, no hidden costs, no surprises. Just reliable heating and plumbing work done properly.",
    steps: [
      {
        icon: "message-square",
        step: "1",
        title: "Call or Message",
        description:
          "Contact Lee directly. Describe what you need and we'll arrange a convenient time to visit.",
      },
      {
        icon: "clipboard-list",
        step: "2",
        title: "Clear Quote",
        description:
          "You get a straight price before we start — no hidden charges, no parking fees, no surprises.",
      },
      {
        icon: "hard-hat",
        step: "3",
        title: "Work Done Right",
        description:
          "We arrive on time, work cleanly, and leave your home exactly as we found it.",
      },
      {
        icon: "check-circle",
        step: "4",
        title: "Certified & Guaranteed",
        description:
          "All gas work is certified. You receive your paperwork same day and a guarantee on all workmanship.",
      },
    ],
  },
  portfolio: {
    badge: "Recent Work", // PLACEHOLDER - no portfolio images available
    title: "Jobs We're Proud Of",
    description:
      "A selection of recent installations and service work across Glasgow and Renfrewshire.",
    categories: ["All", "Boiler Installs", "Smart Heating", "Plumbing"],
    items: [
      {
        id: 1,
        title: "Worcester Bosch Combi Install",
        location: "Paisley, Renfrewshire",
        description: "Full boiler replacement including new controls and updated pipework.",
        image: "/images/plumbing/boiler-install.jpg",
        category: "Boiler Installs",
      },
      {
        id: 2,
        title: "Vaillant System Boiler",
        location: "Bearsden, Glasgow",
        description: "Vaillant system boiler with unvented cylinder — full installation and commissioning.",
        image: "/images/plumbing/smart-thermostat.jpg",
        category: "Boiler Installs",
      },
      {
        id: 3,
        title: "Nest Smart Thermostat Install",
        location: "Houston, Renfrewshire",
        description: "Nest Learning Thermostat with full app setup and homeowner walkthrough.",
        image: "/images/plumbing/system-boiler.jpg",
        category: "Smart Heating",
      },
      {
        id: 4,
        title: "Honeywell evohome System",
        location: "Johnstone",
        description: "Multi-zone evohome smart heating system across 6-bedroom property.",
        image: "/images/plumbing/radiator.jpg",
        category: "Smart Heating",
      },
      {
        id: 5,
        title: "MagnaCleanse Power Flush",
        location: "Renfrew",
        description: "Full system power flush on 12-radiator property, restoring full heat output.",
        image: "/images/plumbing/power-flush.jpg",
        category: "Plumbing",
      },
      {
        id: 6,
        title: "Bathroom Plumbing Refit",
        location: "Clarkston, Glasgow",
        description: "Complete bathroom plumbing refit including new shower, basin, and soil stack work.",
        image: "/images/plumbing/bathroom-plumbing.jpg",
        category: "Plumbing",
      },
    ],
  },
  whyChooseUs: {
    badge: "Why Precision Heat",
    title: "The Engineer Clients Trust and Recommend",
    description:
      "Fully certified, transparent pricing, and work that's done properly — every single time.",
    items: [
      {
        icon: "shield",
        title: "Gas Safe Registered (529072)",
        description:
          "All gas work is carried out by our Gas Safe registered engineer (Reg No. 529072). Your safety is never compromised.",
      },
      {
        icon: "award",
        title: "7+ Manufacturer Approvals",
        description:
          "Approved by Worcester Bosch, Vaillant, Ideal, Glow-Worm, Potterton, Honeywell, and Nest. Your warranty stays valid.",
      },
      {
        icon: "pound-sterling",
        title: "Transparent Pricing",
        description:
          "No hidden charges, no parking fees, no call-out fee. You know the price before we start.",
      },
      {
        icon: "clock",
        title: "Responsive & Reliable",
        description:
          "We pick up the phone, we turn up on time, and we finish what we start. No chasing, no excuses.",
      },
      {
        icon: "hard-hat",
        title: "Fully Insured",
        description:
          "Comprehensive public liability and professional indemnity insurance on every job.",
      },
      {
        icon: "check-circle",
        title: "Certified Same Day",
        description:
          "All gas certificates and paperwork issued on the day. Landlords — no waiting around for your CP12.",
      },
    ],
  },
  testimonials: {
    badge: "Reviews",
    title: "What Customers Say",
    description:
      "5-star rated across Google and Checkatrade. Here's what clients say about working with Lee.",
    averageRatingValue: "5.0 / 5",
    averageRatingText: "Google Reviews",
    items: [
      {
        name: "Sarah T.",
        location: "Paisley",
        project: "Boiler Replacement",
        rating: 5,
        text: "5 stars all around. Very responsive, efficient and extremely knowledgeable. Lee explained everything clearly and the new boiler was fitted perfectly. Wouldn't hesitate to recommend.",
      },
      {
        name: "David M.",
        location: "Bearsden",
        project: "Boiler Service & Gas Safety Check",
        rating: 5,
        text: "Outstanding service from start to finish. Turned up on time, professional throughout, and the price was exactly as quoted. Already booked him in for next year's service.",
      },
      {
        name: "Karen L.",
        location: "Johnstone",
        project: "Nest Thermostat Installation",
        rating: 5,
        text: "Lee installed our Nest and took the time to show us how to use it properly. Heating bills have already dropped. Genuinely brilliant service — highly recommend.",
      }, // PLACEHOLDER — additional reviews to be sourced from Google/Checkatrade
      {
        name: "James R.",
        location: "Renfrew",
        project: "Emergency Plumbing",
        rating: 5,
        text: "Called Lee on a Saturday morning with a burst pipe. He was with us within the hour and sorted it quickly. Fair price, no drama. Exactly what you need in a stressful situation.",
      },
    ],
  },
  contactForm: {
    badge: "Get in Touch",
    title: "Request a Quote or Book a Visit",
    description:
      "Call Lee directly on 07805 565421, or fill in the form and we'll get back to you the same day.",
    introTitle: "Based in Houston, Covering Glasgow & Renfrewshire",
    introDescription:
      "Gas Safe registered, fully insured, transparent pricing. No call-out fee.",
    submitLabel: "Send Enquiry",
    successTitle: "Enquiry Received",
    successBodyPrefix: "Thanks for getting in touch,",
    successBodySuffix:
      "Lee will be in touch the same day to discuss your requirements.",
    resetLabel: "Send another enquiry",
    privacyNote: "Your details are never shared with third parties.",
    nameLabel: "Your Name",
    namePlaceholder: "e.g. John Smith",
    phoneLabel: "Phone Number",
    phonePlaceholder: "e.g. 07700 900000",
    emailLabel: "Email Address",
    emailPlaceholder: "e.g. john@example.com",
    serviceLabel: "Service Required",
    servicePlaceholder: "Select a service",
    messageLabel: "Tell Us More",
    messagePlaceholder:
      "e.g. boiler make/model, property type, or any other useful details.",
    options: [
      { value: "boiler-install", label: "Boiler Installation / Replacement" },
      { value: "boiler-service", label: "Boiler Service" },
      { value: "gas-safety", label: "Gas Safety Certificate (CP12)" },
      { value: "plumbing", label: "Plumbing Repair / Service" },
      { value: "smart-heating", label: "Smart Heating Controls" },
      { value: "power-flush", label: "Power Flush / System Upgrade" },
      { value: "other", label: "Other / Not Sure" },
    ],
    trustBadges: [],
    web3formsKey: "ca9c9fe3-7e54-4750-b5f3-dab5153f81ea",
  },
  footer: {
    description:
      "Expert plumbing and heating across Glasgow and Renfrewshire. Gas Safe registered, fully insured, transparent pricing on every job.",
    servicesTitle: "Services",
    services: [
      "Boiler Installation",
      "Boiler Servicing",
      "Gas Safety Certificates",
      "Plumbing Repairs",
      "Smart Heating Controls",
      "Power Flushing",
    ],
    areasTitle: "Areas Covered",
    areas: [
      "Glasgow",
      "Paisley & Renfrew",
      "Johnstone & Houston",
      "Bearsden & Milngavie",
      "East Renfrewshire",
      "Renfrewshire",
    ],
    ctaTitle: "Need a Plumber or Gas Engineer?",
    ctaDescription:
      "Call Lee direct or send an enquiry — same-day response guaranteed.",
    ctaLabel: "Get a Quote",
    reviewsLabel: "5.0 — Google Reviews",
    legalName: "Precision Heat Plumbing",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
  },
};
