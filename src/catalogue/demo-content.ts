/**
 * Generic demo preset used by the Catalogue Viewer.
 * Content is deliberately trade-neutral so it reads cleanly
 * regardless of which palette or section variant is selected.
 */
import type { BusinessPreset } from "@/config/template.types";

export const DEMO_PRESET: BusinessPreset = {
  id: "catalogue-demo",
  brand: {
    companyName: "Horizon Builders",
    shortName: "HB",
    fontBody: "'Inter', system-ui, sans-serif",
    fontHeading: "'DM Serif Display', Georgia, serif",
    accent: "#EA580C",
    accentHover: "#C2410C",
    accentSoft: "#FFF1E8",
    accentInk: "#C2410C",
    accentOnAccent: "#FFFFFF",
    heroOverlayStart: "rgba(30,41,59,0.90)",
    heroOverlayMid: "rgba(30,41,59,0.65)",
    heroOverlayEnd: "rgba(30,41,59,0.10)",
    useBsLogo: false,
  },
  contact: {
    phoneDisplay: "0141 496 0000",
    phoneHref: "tel:01414960000",
    email: "hello@horizonbuilders.co.uk",
    emailHref: "mailto:hello@horizonbuilders.co.uk",
    location: "Glasgow & Central Scotland",
    serviceAreaLine: "Covering Glasgow, Paisley & Surrounds",
    openingHours: "Mon–Fri 7am–6pm, Sat 8am–2pm",
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Our Work", href: "#portfolio" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    desktopCtaLabel: "Free Quote",
    mobileCallLabel: "Call Us",
    mobileCtaLabel: "Get a Free Quote",
  },
  hero: {
    badge: "Glasgow's Trusted Builders Since 2004",
    titleLine1: "Built Right.",
    titleLine2: "Built to Last.",
    description:
      "From extensions to full renovations, we deliver quality workmanship on time and on budget — with a 10-year guarantee on every project.",
    primaryCtaLabel: "Get a Free Quote",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "See Our Work",
    secondaryCtaHref: "#portfolio",
    callLabel: "Call anytime",
    ratingLabel: "4.9/5 from 180+ reviews",
    backgroundImage:
      "/images/builders/site-hero.jpg",
    backgroundAlt: "Builder working on construction site",
  },
  trustBar: [
    { icon: "award", value: "20+", label: "Years Experience" },
    { icon: "check-circle", value: "600+", label: "Projects Completed" },
    { icon: "shield", value: "10yr", label: "Workmanship Guarantee" },
    { icon: "users", value: "4.9★", label: "Google Rating" },
  ],
  services: {
    badge: "What We Do",
    title: "Services Tailored to Every Project",
    description:
      "Whether it's a single room or a full home transformation, we have the skills and crew to deliver.",
    enquireLabel: "Enquire about this service",
    items: [
      {
        title: "Home Extensions",
        description:
          "Single and double-storey extensions designed to maximise space and add long-term value to your home.",
        image:
          "/images/builders/extension.jpg",
        features: ["Full planning support", "Structural engineers", "10yr guarantee"],
      },
      {
        title: "Loft Conversions",
        description:
          "Transform unused attic space into a beautiful bedroom, office, or playroom — fully permitted and finished to spec.",
        image:
          "/images/builders/loft-conversion.jpg",
        features: ["Velux & dormer styles", "Staircase design", "Building regs handled"],
      },
      {
        title: "Full Renovations",
        description:
          "End-to-end project management from strip-out to final finish, keeping you informed at every stage.",
        image:
          "/images/builders/renovation.jpg",
        features: ["Project manager assigned", "Weekly updates", "Fixed-price contracts"],
      },
      {
        title: "Kitchen & Bathroom Fits",
        description:
          "Supply and fit or fit-only — we work with your chosen units or source quality options at trade prices.",
        image:
          "/images/builders/kitchen.jpg",
        features: ["All plumbing & tiling", "Fully certified", "Waste removal included"],
      },
      {
        title: "Groundworks & Driveways",
        description:
          "Block paving, tarmac, resin, and concrete — we prepare the ground and lay it right first time.",
        image:
          "/images/builders/extension.jpg",
        features: ["Free site survey", "SUDS compliant", "10-year surface guarantee"],
      },
      {
        title: "Structural Repairs",
        description:
          "Subsidence, cracked walls, failing lintels — we diagnose and fix structural problems properly.",
        image:
          "/images/builders/renovation.jpg",
        features: ["Engineer-approved methods", "Insurance paperwork", "Written guarantee"],
      },
    ],
  },
  process: {
    badge: "How It Works",
    title: "Simple from Start to Finish",
    description: "No jargon, no surprises — just a clear process that gets the job done.",
    steps: [
      {
        icon: "message-square",
        step: "1",
        title: "Free Consultation",
        description:
          "Tell us what you need. We listen, ask the right questions, and visit the site within 48 hours.",
      },
      {
        icon: "clipboard-list",
        step: "2",
        title: "Detailed Quote",
        description:
          "You receive a fixed-price itemised quote within 3 working days — no hidden extras.",
      },
      {
        icon: "hard-hat",
        step: "3",
        title: "We Build",
        description:
          "Our crew arrives on time and keeps the site clean. You get weekly progress updates.",
      },
      {
        icon: "check-circle",
        step: "4",
        title: "Signed Off",
        description:
          "We don't leave until you're completely satisfied. Certificates and guarantees handed over on completion.",
      },
    ],
  },
  portfolio: {
    badge: "Our Work",
    title: "Projects We're Proud Of",
    description:
      "Every photo is a real project by our team — no stock, no staging, just honest workmanship.",
    categories: ["All", "Extensions", "Loft Conversions", "Renovations", "Groundworks"],
    items: [
      {
        id: 1,
        title: "Double Storey Extension",
        location: "Bearsden, Glasgow",
        description: "Full rear double-storey extension with bifold doors and underfloor heating.",
        image:
          "/images/builders/loft-conversion.jpg",
        category: "Extensions",
      },
      {
        id: 2,
        title: "Dormer Loft Conversion",
        location: "Kelvinside, Glasgow",
        description: "Rear dormer creating a master bedroom suite with en-suite bathroom.",
        image:
          "/images/builders/extension.jpg",
        category: "Loft Conversions",
      },
      {
        id: 3,
        title: "Full Victorian Terrace Renovation",
        location: "Shawlands, Glasgow",
        description:
          "Complete gut and refurb of a 4-bedroom Victorian property back to a stunning finish.",
        image:
          "/images/builders/site-hero.jpg",
        category: "Renovations",
      },
      {
        id: 4,
        title: "Block Paving Driveway",
        location: "Newton Mearns",
        description: "Full excavation and block paving installation with recessed drainage.",
        image:
          "/images/builders/extension.jpg",
        category: "Groundworks",
      },
      {
        id: 5,
        title: "Open-Plan Kitchen Extension",
        location: "Hyndland, Glasgow",
        description:
          "Side-return extension opening the ground floor into a modern open-plan kitchen-diner.",
        image:
          "/images/builders/kitchen.jpg",
        category: "Extensions",
      },
      {
        id: 6,
        title: "Velux Loft Conversion",
        location: "Clarkston",
        description:
          "Three Velux windows bringing in natural light to a converted study and spare bedroom.",
        image:
          "/images/builders/renovation.jpg",
        category: "Loft Conversions",
      },
    ],
  },
  whyChooseUs: {
    badge: "Why Horizon",
    title: "The Builders Clients Come Back To",
    description:
      "We win repeat business by being the kind of company we'd want to hire ourselves.",
    items: [
      {
        icon: "shield",
        title: "10-Year Guarantee",
        description:
          "Every project is backed by a written 10-year workmanship guarantee. We stand behind what we build.",
      },
      {
        icon: "pound-sterling",
        title: "Fixed Prices",
        description:
          "Your quote is your price. We don't inflate scope or hit you with extras after the contract is signed.",
      },
      {
        icon: "clock",
        title: "On Time, Every Time",
        description:
          "We track every project against a schedule and communicate any changes before they happen.",
      },
      {
        icon: "hard-hat",
        title: "Fully Insured & Certified",
        description:
          "£5m public liability, relevant trade certifications, and full building regulations compliance.",
      },
      {
        icon: "users",
        title: "Dedicated Project Manager",
        description:
          "One point of contact from first call to final handover. No confusion, no gaps.",
      },
      {
        icon: "heart-handshake",
        title: "Clean & Respectful",
        description:
          "We treat your home like our own — site swept daily, dust sheets down, tools put away.",
      },
    ],
  },
  testimonials: {
    badge: "Reviews",
    title: "What Our Clients Say",
    description: "Real words from real people. We never filter or curate these.",
    averageRatingValue: "4.9 / 5",
    averageRatingText: "from 180+ Google reviews",
    items: [
      {
        name: "Sarah M.",
        location: "Bearsden",
        project: "Double Storey Extension",
        rating: 5,
        text: "Horizon transformed the back of our house. The team were professional, the site was always clean, and they finished a week ahead of schedule. I've recommended them to three neighbours already.",
      },
      {
        name: "James T.",
        location: "Kelvinside",
        project: "Loft Conversion",
        rating: 5,
        text: "Absolutely faultless from start to finish. Our project manager was responsive and kept us in the loop every week. The quality of the finish is exceptional — we'd use Horizon again without hesitation.",
      },
      {
        name: "Claire & David R.",
        location: "Shawlands",
        project: "Full Home Renovation",
        rating: 5,
        text: "We were nervous about a project this size. Horizon put our minds at ease from day one. Fixed price, no surprises, and the results are better than we imagined. Couldn't be happier.",
      },
      {
        name: "Mark P.",
        location: "Newton Mearns",
        project: "Driveway & Landscaping",
        rating: 5,
        text: "Quick, tidy and professional. The driveway looks fantastic and the drainage they put in has solved a water problem we've had for years. Great value for money.",
      },
    ],
  },
  contactForm: {
    badge: "Get in Touch",
    title: "Request Your Free Quote",
    description:
      "Fill in the form and we'll get back to you within one working day. Or call us directly — we're always happy to talk.",
    introTitle: "We're Local. We're Available.",
    introDescription:
      "Based in Glasgow, we cover the whole of the central belt. All quotes are free, with no obligation.",
    submitLabel: "Send Enquiry",
    successTitle: "Enquiry Received",
    successBodyPrefix: "Thanks for reaching out,",
    successBodySuffix:
      "We'll be in touch within one working day to arrange your free site visit.",
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
    messageLabel: "Tell Us About Your Project",
    messagePlaceholder: "Describe your project — as much or as little as you like.",
    options: [
      { value: "extension", label: "Home Extension" },
      { value: "loft", label: "Loft Conversion" },
      { value: "renovation", label: "Full Renovation" },
      { value: "kitchen-bathroom", label: "Kitchen / Bathroom" },
      { value: "groundworks", label: "Groundworks / Driveway" },
      { value: "other", label: "Other / Not Sure" },
    ],
    trustBadges: ["Free consultation", "No obligation", "Reply within 24hrs"],
  },
  footer: {
    description:
      "Quality building work across Glasgow and Central Scotland. Established 2004. 10-year workmanship guarantee on every project.",
    servicesTitle: "Services",
    services: [
      "Home Extensions",
      "Loft Conversions",
      "Full Renovations",
      "Kitchen & Bathroom",
      "Groundworks",
      "Structural Repairs",
    ],
    areasTitle: "Areas We Cover",
    areas: [
      "Glasgow City",
      "Bearsden & Milngavie",
      "Newton Mearns",
      "East Renfrewshire",
      "Paisley & Renfrew",
      "Lanarkshire",
    ],
    ctaTitle: "Ready to Start?",
    ctaDescription: "Request your free no-obligation site visit today.",
    ctaLabel: "Get a Free Quote",
    reviewsLabel: "4.9 from 180+ Google reviews",
    legalName: "Horizon Builders Ltd",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
  },
};
