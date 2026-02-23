import type { BusinessPreset } from "../template.types";

export const annieslandbuildersgroupPreset: BusinessPreset = {
  id: "annieslandbuildersgroup",
  brand: {
    companyName: "Anniesland Builders Group",
    shortName: "ABG",
    fontBody: "'Inter', sans-serif",
    fontHeading: "'DM Serif Display', serif",
    accent: "#F2C230",
    accentHover: "#D8A91B",
    accentSoft: "#E7F0FF",
    accentInk: "#1E5DB8",
    accentOnAccent: "#123D84",
    heroOverlayStart: "rgba(14, 38, 78, 0.90)",
    heroOverlayMid: "rgba(14, 38, 78, 0.66)",
    heroOverlayEnd: "rgba(14, 38, 78, 0.28)",
    mobileNavLabel: "Anniesland Builders",
    useBsLogo: false,
  },
  contact: {
    phoneDisplay: "0141 954 2265 / 07515 363942",
    phoneHref: "tel:01419542265",
    email: "anniesland_builders@msn.com",
    emailHref: "mailto:anniesland_builders@msn.com",
    location: "Glasgow, Scotland",
    serviceAreaLine: "Serving Glasgow, Clydebank, Paisley & Renfrew",
    // PLACEHOLDER: Opening hours were not confirmed by the client.
    openingHours: "Mon-Fri, 9am-5pm",
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#portfolio" },
      { label: "Why Us", href: "#why-us" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    desktopCtaLabel: "Get a Free Quote",
    mobileCallLabel: "Call Builders",
    mobileCtaLabel: "Get Quote",
  },
  hero: {
    badge: "Glasgow builders for extensions, loft conversions and home improvements",
    titleLine1: "Quality building work",
    titleLine2: "for homes across Glasgow",
    // PLACEHOLDER: Marketing copy for cold outreach demo.
    description:
      "From extensions and loft conversions to kitchens, bathrooms, damp proofing and roofing, we deliver practical building solutions with clear communication from quote to completion.",
    primaryCtaLabel: "Get a Free Quote",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "View Recent Work",
    secondaryCtaHref: "#portfolio",
    callLabel: "Need to discuss a project?",
    ratingLabel: "4.4 rated on Google",
    backgroundImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80&fit=crop",
    backgroundAlt: "Residential brick-style house exterior suitable for local builder marketing",
  },
  trustBar: [
    { icon: "award", value: "4.4", label: "Google Rating" },
    { icon: "users", value: "11", label: "Google Reviews" },
    { icon: "map-pin", value: "Glasgow", label: "Local Coverage" },
    // PLACEHOLDER: Trust proposition generated for outreach demo.
    { icon: "shield", value: "Free", label: "Quotes & Site Visits" },
  ],
  services: {
    badge: "What We Do",
    title: "Building and home improvement services",
    // PLACEHOLDER: Service section copy generated for outreach demo.
    description:
      "Anniesland Builders Group supports homeowners with structural improvements and internal upgrades, with one team coordinating the job from planning through final handover.",
    enquireLabel: "Enquire now",
    items: [
      {
        title: "House Extensions",
        // PLACEHOLDER: Service description/features generated for outreach demo.
        description:
          "Rear, side and wraparound extensions designed to add usable living space while matching the look and feel of your existing home.",
        image:
          "/images/annieslandbuildersgroup/gallery-extension.jpg",
        features: ["Single-storey extensions", "Open-plan layouts", "Build-to-finish coordination"],
      },
      {
        title: "Loft Conversion",
        // PLACEHOLDER: Service description/features generated for outreach demo.
        description:
          "Turn unused loft space into a practical bedroom, office or en-suite area with a well-planned conversion tailored to your property.",
        image:
          "/images/annieslandbuildersgroup/gallery-building.jpg",
        features: ["Loft bedrooms", "Storage solutions", "En-suite-ready layouts"],
      },
      {
        title: "Bathrooms",
        // PLACEHOLDER: Service description/features generated for outreach demo.
        description:
          "Bathroom refurbishments and new installations completed with a focus on layout, finishes and reliable day-to-day performance.",
        image:
          "/images/annieslandbuildersgroup/gallery-bathroom.jpg",
        features: ["Full refits", "Modern suites", "Tiling and finishes"],
      },
      {
        title: "Kitchens",
        // PLACEHOLDER: Service description/features generated for outreach demo.
        description:
          "Kitchen renovations and fitting services to upgrade cooking, storage and family living space with a clean, modern finish.",
        image:
          "/images/annieslandbuildersgroup/gallery-kitchen.jpg",
        features: ["Kitchen fitting", "Layout upgrades", "Worktop and unit installs"],
      },
      {
        title: "Damp Proofing",
        // PLACEHOLDER: Service description/features generated for outreach demo.
        description:
          "Investigation and treatment solutions for damp-related issues to help protect walls, finishes and long-term property condition.",
        image:
          "https://images.unsplash.com/photo-1724230442705-646dc7c86943?w=800&q=80&fit=crop",
        features: ["Damp assessments", "Remedial works", "Property protection advice"],
      },
      {
        title: "Roofing",
        // PLACEHOLDER: Service description/features generated for outreach demo.
        description:
          "Roof repairs and roofing improvement work carried out to keep your home weather-tight and protected year-round.",
        image:
          "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg?cs=srgb&fm=jpg&w=800&h=500&fit=crop",
        features: ["Roof repairs", "Weatherproofing", "Inspection-led recommendations"],
      },
    ],
  },
  process: {
    badge: "How It Works",
    title: "Simple, clear process from quote to completion",
    // PLACEHOLDER: Process copy generated for outreach demo.
    description: "A straightforward approach designed to keep homeowners informed at every stage.",
    steps: [
      {
        icon: "message-square",
        step: "01",
        title: "Tell Us About the Job",
        description: "Call or message with your project details and what you want to improve in your home.",
      },
      {
        icon: "clipboard-list",
        step: "02",
        title: "Site Visit & Quote",
        description: "We discuss options, assess the work required and provide a clear quote for the project.",
      },
      {
        icon: "hard-hat",
        step: "03",
        title: "Build & Install",
        description: "Work is completed with a focus on quality workmanship, communication and a tidy finish.",
      },
      {
        icon: "key-round",
        step: "04",
        title: "Final Checks & Handover",
        description: "We walk through the completed job with you and make sure everything is finished properly.",
      },
    ],
  },
  portfolio: {
    badge: "Our Work",
    title: "Recent projects across Glasgow and nearby areas",
    // PLACEHOLDER: Portfolio section and project examples generated for outreach demo.
    description:
      "A sample of extension, loft conversion, kitchen, bathroom and roofing projects across Glasgow, Clydebank, Paisley and Renfrew.",
    categories: ["All", "Extensions", "Loft Conversion", "Bathrooms", "Kitchens", "Roofing"],
    items: [
      {
        id: 1,
        title: "Rear Family Room Extension",
        location: "Glasgow",
        description: "Single-storey rear extension opening into a modern kitchen and dining area.",
        image:
          "/images/annieslandbuildersgroup/gallery-extension.jpg",
        category: "Extensions",
      },
      {
        id: 2,
        title: "Loft Bedroom Conversion",
        location: "Clydebank",
        description: "Unused loft transformed into a bright bedroom with built-in storage.",
        image:
          "/images/annieslandbuildersgroup/gallery-building.jpg",
        category: "Loft Conversion",
      },
      {
        id: 3,
        title: "Contemporary Bathroom Refit",
        location: "Paisley",
        description: "Bathroom upgrade with new suite, tiling and practical storage improvements.",
        image:
          "/images/annieslandbuildersgroup/gallery-bathroom.jpg",
        category: "Bathrooms",
      },
      {
        id: 4,
        title: "Kitchen Renovation & Fit-Out",
        location: "Renfrew",
        description: "Full kitchen refresh with improved layout, modern cabinetry and worktops.",
        image:
          "/images/annieslandbuildersgroup/gallery-kitchen.jpg",
        category: "Kitchens",
      },
      {
        id: 5,
        title: "Storm Damage Roof Repairs",
        location: "Glasgow",
        description: "Roof repair works to restore weather protection and prevent further ingress.",
        image:
          "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg?cs=srgb&fm=jpg&w=1080&h=810&fit=crop",
        category: "Roofing",
      },
      {
        id: 6,
        title: "Kitchen & Bathroom Upgrade Package",
        location: "Clydebank",
        description: "Coordinated internal upgrade project completed in stages for minimal disruption.",
        image:
          "/images/annieslandbuildersgroup/kitchen-bath-package.jpg",
        category: "Kitchens",
      },
    ],
  },
  whyChooseUs: {
    badge: "Why Choose Us",
    title: "Why homeowners choose Anniesland Builders Group",
    // PLACEHOLDER: Sales copy and trust points generated for outreach demo.
    description:
      "From the first quote to final handover, this section shows the kind of trust-focused messaging a local building company should have on its website.",
    items: [
      {
        icon: "hammer",
        title: "Complete Home Improvement Service",
        description:
          "Extensions, loft conversions, kitchens, bathrooms, damp proofing and roofing handled by one local building team.",
      },
      {
        icon: "users",
        title: "Friendly Local Team",
        description:
          "A family-run approach with straightforward advice, reliable workmanship and respect for your home while work is underway.",
      },
      {
        icon: "check-circle",
        title: "Quality Workmanship",
        description:
          "Careful attention to the finish, practical details and making sure each part of the job is completed properly.",
      },
      {
        icon: "message-square",
        title: "Clear Quotes & Updates",
        description:
          "Clear pricing before work starts and straightforward updates throughout the project so you always know what is happening.",
      },
      {
        icon: "pound-sterling",
        title: "Value for Money",
        description:
          "Practical recommendations and fair pricing focused on getting the right result for your home and budget.",
      },
      {
        icon: "heart-handshake",
        title: "Local Area Coverage",
        description:
          "Glasgow-led service with coverage across Clydebank, Paisley and Renfrew for local site visits and quotations.",
      },
    ],
  },
  testimonials: {
    badge: "Testimonials",
    title: "What local customers are saying",
    // PLACEHOLDER: Review cards are generated for outreach demo; based loosely on themes in the provided screenshot.
    description:
      "A snapshot of the kind of customer feedback that helps homeowners feel confident when choosing a local builder.",
    averageRatingValue: "4.4",
    averageRatingText: "Google Rating",
    items: [
      {
        // PLACEHOLDER: Demo review card generated from themes visible in screenshot.
        name: "Michael M.",
        location: "Clydebank",
        project: "General building work",
        text: "Fantastic family-run business. The work was finished to a very high standard and the team were great to deal with.",
        rating: 5,
      },
      {
        // PLACEHOLDER: Demo review card generated from themes visible in screenshot.
        name: "Brian A.",
        location: "Glasgow",
        project: "Building repairs",
        text: "Work was completed at a fair price and everything was explained clearly throughout the job.",
        rating: 5,
      },
      {
        // PLACEHOLDER: Demo review card generated from themes visible in screenshot.
        name: "Karen K.",
        location: "Renfrew",
        project: "Kitchen fitting",
        text: "Really pleased with the new kitchen fitting work. Great finish and the whole job was handled professionally.",
        rating: 5,
      },
      {
        // PLACEHOLDER: Demo review card generated for outreach preview.
        name: "Pauline R.",
        location: "Paisley",
        project: "Loft conversion",
        text: "Professional team, tidy on site and easy to deal with. The finished loft room has made a huge difference to our home.",
        rating: 5,
      },
    ],
  },
  contactForm: {
    badge: "Get in Touch",
    title: "Planning an extension, conversion or home upgrade?",
    // PLACEHOLDER: Contact form intro copy generated for outreach demo.
    description: "Share your project details and Anniesland Builders Group can get back to discuss the next steps.",
    introTitle: "Request a building quote",
    introDescription: "Tell us what work you need and we will get back to you as soon as possible.",
    submitLabel: "Send Enquiry",
    successTitle: "Thanks, your enquiry has been sent",
    successBodyPrefix: "We will get back to you shortly. If you prefer, call us on",
    successBodySuffix: ".",
    resetLabel: "Send another enquiry",
    privacyNote: "Your details stay private and are only used to reply to your enquiry.",
    nameLabel: "Your name *",
    namePlaceholder: "Jane Smith",
    phoneLabel: "Phone number *",
    phonePlaceholder: "07xxx xxx xxx",
    emailLabel: "Email address",
    emailPlaceholder: "jane@example.com",
    serviceLabel: "Service required *",
    servicePlaceholder: "Select a service...",
    messageLabel: "Project details",
    messagePlaceholder: "Tell us about the job, location, and any timings you have in mind...",
    options: [
      { value: "extensions", label: "Extensions" },
      { value: "loft-conversion", label: "Loft conversion" },
      { value: "bathrooms", label: "Bathrooms" },
      { value: "kitchens", label: "Kitchens" },
      { value: "damp-proofing", label: "Damp proofing" },
      { value: "roofing", label: "Roofing" },
      { value: "multiple", label: "Multiple services" },
      { value: "other", label: "Other / not sure" },
    ],
    trustBadges: ["Glasgow & Surrounding Areas", "Free Quotes", "Wide Range of Services"],
  },
  footer: {
    // PLACEHOLDER: Footer marketing copy generated for outreach demo.
    description:
      "Anniesland Builders Group provides extensions, loft conversions, kitchens, bathrooms, damp proofing and roofing across Glasgow and nearby areas.",
    servicesTitle: "SERVICES",
    services: [
      "Extensions",
      "Loft Conversion",
      "Bathrooms",
      "Kitchens",
      "Damp Proofing",
      "Roofing",
    ],
    areasTitle: "AREAS WE COVER",
    areas: ["Glasgow", "Clydebank", "Paisley", "Renfrew"],
    ctaTitle: "GET A FREE QUOTE",
    ctaDescription: "Planning home improvements? Get in touch to discuss your project.",
    ctaLabel: "Send Enquiry",
    reviewsLabel: "4.4 on Google (11 reviews shown at intake)",
    legalName: "Anniesland Builders Group",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
  },
};
