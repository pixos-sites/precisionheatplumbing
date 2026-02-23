import type { BusinessPreset } from "../template.types";

export const plumberPreset: BusinessPreset = {
  id: "plumber",
  brand: {
    companyName: "FlowFix Plumbing",
    shortName: "FlowFix",
    fontBody: "'Inter', sans-serif",
    fontHeading: "'DM Serif Display', serif",
    accent: "#1E40AF",
    accentHover: "#1A3690",
    accentSoft: "#DBEAFE",
    heroOverlayStart: "rgba(15, 23, 42, 0.9)",
    heroOverlayMid: "rgba(15, 23, 42, 0.68)",
    heroOverlayEnd: "rgba(15, 23, 42, 0.35)",
    mobileNavLabel: "FlowFix Plumbing",
    useBsLogo: false,
  },
  contact: {
    phoneDisplay: "020 7946 1001",
    phoneHref: "tel:02079461001",
    email: "help@flowfixplumbing.co.uk",
    emailHref: "mailto:help@flowfixplumbing.co.uk",
    location: "London, England",
    serviceAreaLine: "Serving Greater London and nearby boroughs",
    openingHours: "Mon-Fri, 7am-7pm",
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#portfolio" },
      { label: "Why Us", href: "#why-us" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    desktopCtaLabel: "Book a Plumbing Visit",
    mobileCallLabel: "Call a Plumber",
    mobileCtaLabel: "Book Visit",
  },
  hero: {
    badge: "Trusted local plumbers, 20+ years",
    titleLine1: "Fast, reliable plumbing",
    titleLine2: "for homes and landlords",
    description:
      "From emergency leaks to full bathroom installations, we deliver clean, dependable work with clear pricing and no surprises.",
    primaryCtaLabel: "Get a Free Quote",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "See Recent Jobs",
    secondaryCtaHref: "#portfolio",
    callLabel: "Need urgent help?",
    ratingLabel: "4.9 rated on Google",
    backgroundImage:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80&fit=crop",
    backgroundAlt: "Plumber repairing sink pipework",
  },
  trustBar: [
    { icon: "clock", value: "24/7", label: "Emergency Callouts" },
    { icon: "map-pin", value: "London", label: "Local Coverage" },
    { icon: "shield", value: "Fully", label: "Insured & Guaranteed" },
    { icon: "award", value: "Gas Safe", label: "Registered Engineers" },
  ],
  services: {
    badge: "What We Do",
    title: "Complete plumbing services",
    description:
      "Domestic and light commercial plumbing completed by qualified engineers with clear communication from first call to final check.",
    enquireLabel: "Enquire now",
    items: [
      {
        title: "Emergency Plumbing",
        description:
          "Rapid response for burst pipes, leaks, overflows and no-water situations to protect your property.",
        image:
          "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80&fit=crop",
        features: ["Burst pipes", "Leak repairs", "Emergency diagnostics"],
      },
      {
        title: "Boiler & Heating Plumbing",
        description:
          "Plumbing-side boiler and central heating repairs, balancing and upgrades for consistent home comfort.",
        image:
          "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80&fit=crop",
        features: ["Radiator issues", "Pressure faults", "Pipework upgrades"],
      },
      {
        title: "Bathroom Installations",
        description:
          "Full bathroom plumbing from first fix to final fit, coordinated for a tidy and efficient project.",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&fit=crop",
        features: ["Shower installs", "Pipe rerouting", "Sanitaryware fitting"],
      },
      {
        title: "Kitchen Plumbing",
        description:
          "Appliance hookups, waste systems, sink replacements and water line modifications for modern kitchens.",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&fit=crop",
        features: ["Dishwasher installs", "Sink replacements", "Waste upgrades"],
      },
      {
        title: "Drain & Blockage Solutions",
        description:
          "Fast fault-finding and blockage clearance to restore normal flow and reduce recurring issues.",
        image:
          "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?w=800&q=80&fit=crop",
        features: ["Blocked sinks", "Drain checks", "Preventive advice"],
      },
      {
        title: "Landlord & Letting Support",
        description:
          "Planned maintenance and responsive plumbing support for letting agents, landlords and managed properties.",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop",
        features: ["Routine maintenance", "Tenant callouts", "Compliance support"],
      },
    ],
  },
  process: {
    badge: "How It Works",
    title: "A simple booking process",
    description: "Straightforward from first message to completed job.",
    steps: [
      {
        icon: "message-square",
        step: "01",
        title: "Tell Us the Issue",
        description: "Call or message with your issue and availability, and we will advise next steps.",
      },
      {
        icon: "clipboard-list",
        step: "02",
        title: "Quote & Time Slot",
        description: "We provide a clear estimate and confirm a time slot that works for you.",
      },
      {
        icon: "hard-hat",
        step: "03",
        title: "Engineer Visit",
        description: "Our plumber arrives on time, protects work areas, and completes the repair or install.",
      },
      {
        icon: "key-round",
        step: "04",
        title: "Sign-Off & Support",
        description: "We test everything, explain what was done, and remain available for follow-up questions.",
      },
    ],
  },
  portfolio: {
    badge: "Our Work",
    title: "Recent plumbing projects",
    description: "A sample of completed jobs for homeowners, landlords, and local businesses.",
    categories: ["All", "Emergency", "Bathrooms", "Heating", "Kitchens", "Maintenance"],
    items: [
      {
        id: 1,
        title: "Emergency Burst Pipe Repair",
        location: "Islington, London",
        description: "Rapid burst pipe isolation and pipe section replacement completed same day.",
        image:
          "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=1080&q=80&fit=crop",
        category: "Emergency",
      },
      {
        id: 2,
        title: "Victorian Bathroom Repipe",
        location: "Clapham, London",
        description: "Complete hot/cold pipe reroute and new shower plumbing in period property.",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1080&q=80&fit=crop",
        category: "Bathrooms",
      },
      {
        id: 3,
        title: "Radiator Balancing Upgrade",
        location: "Ealing, London",
        description: "System balancing and valve replacement to improve whole-home heat consistency.",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1080&q=80&fit=crop",
        category: "Heating",
      },
      {
        id: 4,
        title: "Kitchen Utility Refit",
        location: "Wimbledon, London",
        description: "New appliance lines, waste improvements and sink plumbing for kitchen refit.",
        image:
          "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?w=1080&q=80&fit=crop",
        category: "Kitchens",
      },
      {
        id: 5,
        title: "Apartment Stack Leak Fix",
        location: "Canary Wharf, London",
        description: "Leak source identification and stack pipe repair with minimal tenant disruption.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1080&q=80&fit=crop",
        category: "Emergency",
      },
      {
        id: 6,
        title: "Managed Property Maintenance",
        location: "Camden, London",
        description: "Planned maintenance across 12 rental units including valves and drainage checks.",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1080&q=80&fit=crop",
        category: "Maintenance",
      },
    ],
  },
  whyChooseUs: {
    badge: "Why Choose Us",
    title: "Plumbing done properly",
    description: "Reliable communication, quality workmanship, and jobs completed cleanly.",
    items: [
      {
        icon: "hammer",
        title: "Qualified Engineers",
        description: "Skilled plumbing professionals with broad residential and landlord experience.",
      },
      {
        icon: "users",
        title: "Clear Communication",
        description: "You get updates, arrival windows, and honest advice before any work starts.",
      },
      {
        icon: "check-circle",
        title: "Guaranteed Work",
        description: "Work is completed to high standards with practical aftercare support.",
      },
      {
        icon: "message-square",
        title: "No Jargon",
        description: "We explain issues and options in plain language so you can decide quickly.",
      },
      {
        icon: "pound-sterling",
        title: "Fair Pricing",
        description: "Clear quotes and no hidden extras. You approve before we proceed.",
      },
      {
        icon: "heart-handshake",
        title: "Long-Term Support",
        description: "Many clients stay with us for yearly maintenance and future upgrades.",
      },
    ],
  },
  testimonials: {
    badge: "Testimonials",
    title: "What customers say",
    description: "Recent feedback from homeowners and landlords across London.",
    averageRatingValue: "4.9",
    averageRatingText: "average rating on Google",
    items: [
      {
        name: "Rachel W.",
        location: "Hackney",
        project: "Emergency leak repair",
        text: "Fast response, clear communication, and the leak was sorted in one visit.",
        rating: 5,
      },
      {
        name: "Daniel K.",
        location: "Fulham",
        project: "Bathroom plumbing",
        text: "Professional and tidy throughout. Everything was tested and explained properly.",
        rating: 5,
      },
      {
        name: "Priya S.",
        location: "Kensington",
        project: "Radiator upgrade",
        text: "Great service from booking to completion. Heating works better than ever.",
        rating: 5,
      },
      {
        name: "Tom & Lucy M.",
        location: "Greenwich",
        project: "Kitchen refit plumbing",
        text: "Reliable team, punctual and honest. We will use them again.",
        rating: 5,
      },
    ],
  },
  contactForm: {
    badge: "Get in Touch",
    title: "Need a plumber you can rely on?",
    description: "Share the details and we will get back quickly with practical next steps.",
    introTitle: "Request a plumbing quote",
    introDescription: "Fill in the form and we will reply promptly.",
    submitLabel: "Send Request",
    successTitle: "Thanks, we have your request",
    successBodyPrefix: "We will reply shortly. If urgent, call us on",
    successBodySuffix: ".",
    resetLabel: "Send another request",
    privacyNote: "Your details stay private and are used only to respond to your enquiry.",
    nameLabel: "Your name *",
    namePlaceholder: "Jane Smith",
    phoneLabel: "Phone number *",
    phonePlaceholder: "07xxx xxx xxx",
    emailLabel: "Email address",
    emailPlaceholder: "jane@example.com",
    serviceLabel: "What do you need? *",
    servicePlaceholder: "Select a plumbing service...",
    messageLabel: "Tell us about the issue",
    messagePlaceholder: "Describe the problem, urgency, and any relevant details...",
    options: [
      { value: "emergency", label: "Emergency plumbing" },
      { value: "leak", label: "Leak detection and repair" },
      { value: "bathroom", label: "Bathroom installation" },
      { value: "kitchen", label: "Kitchen plumbing" },
      { value: "heating", label: "Heating/radiator plumbing" },
      { value: "drainage", label: "Drainage/blockage" },
      { value: "landlord", label: "Landlord maintenance" },
      { value: "other", label: "Other / not sure" },
    ],
    trustBadges: ["Fully Insured", "Clear Quotes", "Guaranteed Work"],
  },
  footer: {
    description:
      "Reliable plumbing services for homes, landlords, and local businesses across London.",
    servicesTitle: "SERVICES",
    services: [
      "Emergency Plumbing",
      "Leak Repairs",
      "Bathroom Installations",
      "Kitchen Plumbing",
      "Heating Plumbing",
      "Landlord Maintenance",
    ],
    areasTitle: "AREAS WE COVER",
    areas: [
      "Islington",
      "Camden",
      "Clapham",
      "Wimbledon",
      "Ealing",
      "Kensington",
      "Greenwich",
      "Greater London",
    ],
    ctaTitle: "BOOK A VISIT",
    ctaDescription: "Need a reliable plumber? Request a quote and we will get back fast.",
    ctaLabel: "Get a Free Quote",
    reviewsLabel: "4.9 on Google Reviews",
    legalName: "FlowFix Plumbing Ltd",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
  },
};
