import type { BusinessPreset } from "../template.types";

export const sclbuildersltdPreset: BusinessPreset = {
  id: "sclbuildersltd",
  brand: {
    companyName: "SCL Builders LTD",
    shortName: "SCL",
    fontBody: "'Inter', sans-serif",
    fontHeading: "'DM Serif Display', serif",
    accent: "#C6A34A",
    accentHover: "#AE8B36",
    accentSoft: "#F7F1E2",
    accentInk: "#221B0A",
    accentOnAccent: "#221B0A",
    heroOverlayStart: "rgba(6, 6, 6, 0.92)",
    heroOverlayMid: "rgba(6, 6, 6, 0.72)",
    heroOverlayEnd: "rgba(6, 6, 6, 0.40)",
    mobileNavLabel: "SCL Builders",
    useBsLogo: false,
  },
  contact: {
    phoneDisplay: "01698 711162 / 07866 939 663",
    phoneHref: "tel:01698711162",
    email: "stephen@sclbuilders.com",
    emailHref: "mailto:stephen@sclbuilders.com",
    location: "Hamilton, Scotland",
    // PLACEHOLDER: Areas covered were not confirmed during intake.
    serviceAreaLine: "Serving Hamilton and surrounding areas",
    // PLACEHOLDER: Opening hours were not confirmed by the client.
    openingHours: "Mon-Fri, 8am-5pm",
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#portfolio" },
      { label: "Why Us", href: "#why-us" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    desktopCtaLabel: "Request a Quote",
    mobileCallLabel: "Call SCL",
    mobileCtaLabel: "Get Quote",
  },
  hero: {
    badge: "Hamilton builders for domestic and commercial construction projects",
    titleLine1: "Let's build it better",
    titleLine2: "with quality, value and reliability",
    // PLACEHOLDER: Hero sales copy written from client intake notes and service list.
    description:
      "Family-run builders in Hamilton delivering quality construction work for homes and commercial projects, from extensions and conversions to full builds and planning-to-completion support.",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "View Projects",
    secondaryCtaHref: "#portfolio",
    callLabel: "Want to talk through your project first?",
    ratingLabel: "Family-run building company",
    backgroundImage:
      "/images/gallery-extension.jpg",
    backgroundAlt: "Rear home extension with modern glazing and patio area",
  },
  trustBar: [
    { icon: "users", value: "Family-Run", label: "Trusted Team" },
    { icon: "map-pin", value: "Hamilton", label: "Local Base" },
    { icon: "clipboard-list", value: "Planning", label: "To Completion" },
    { icon: "hammer", value: "All Builds", label: "Home & Commercial" },
  ],
  services: {
    badge: "What We Do",
    title: "Construction and renovation services tailored to each project",
    // PLACEHOLDER: Service section summary generated from client-provided service list.
    description:
      "SCL Builders supports homeowners and commercial clients with new builds, structural improvements and energy-saving upgrades, with practical planning support from the first conversation through final completion.",
    enquireLabel: "Enquire now",
    items: [
      {
        title: "Full House Builds",
        // PLACEHOLDER: Service description/features generated for demo preset.
        description:
          "Complete new-build construction managed from early planning and groundwork through structural works, finishing stages and final handover.",
        image:
          "/images/sclbuildersltd/full-house-builds.jpg",
        features: ["New build homes", "Build phase coordination", "End-to-end delivery"],
      },
      {
        title: "Office & Commercial Building",
        // PLACEHOLDER: Service description/features generated for demo preset.
        description:
          "Commercial building and office construction works delivered with a focus on programme management, workmanship and dependable site standards.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop",
        features: ["Commercial building works", "Office projects", "Sub-contractor support"],
      },
      {
        title: "Solar Panel Installation",
        // PLACEHOLDER: Service description/features generated for demo preset.
        description:
          "Energy-saving upgrade support including solar panel installation as part of wider renovation or construction projects.",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&fit=crop",
        features: ["Energy-saving upgrades", "Solar panel installs", "Integrated project planning"],
      },
      {
        title: "Home Extensions",
        // PLACEHOLDER: Service description/features generated for demo preset.
        description:
          "Single-storey and larger extension projects designed to add valuable living space while matching the character of the existing property.",
        image:
          "/images/sclbuildersltd/home-extensions.jpg",
        features: ["Single-storey extensions", "Structural alterations", "Finish-ready builds"],
      },
      {
        title: "Garage Conversions",
        // PLACEHOLDER: Service description/features generated for demo preset.
        description:
          "Convert underused garages into practical rooms such as offices, family spaces or guest accommodation with a high-quality finish.",
        image:
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80&fit=crop",
        features: ["Garage-to-room conversion", "Layout upgrades", "Insulation and finishing"],
      },
      {
        title: "Design to Completion Service",
        // PLACEHOLDER: Service description/features generated for demo preset.
        description:
          "A coordinated design-and-build approach that helps clients move from planning ideas through construction and completion with one team.",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80&fit=crop",
        features: ["Planning support", "Project coordination", "One-team delivery"],
      },
    ],
  },
  process: {
    badge: "How We Work",
    title: "A clear process from first conversation to completed build",
    // PLACEHOLDER: Process copy generated for demo preset.
    description:
      "SCL Builders keeps projects organised with straightforward communication, practical planning and a focus on doing the job properly.",
    steps: [
      {
        icon: "message-square",
        step: "01",
        title: "Initial Discussion",
        description: "Tell us about the work you need, your property or site, and what outcome you want to achieve.",
      },
      {
        icon: "clipboard-list",
        step: "02",
        title: "Planning & Quotation",
        description: "We review the job, discuss options and provide a clear quotation with the right scope for the project.",
      },
      {
        icon: "hard-hat",
        step: "03",
        title: "Build Phase",
        description: "Work is carried out with attention to workmanship, safety, efficiency and respectful site management.",
      },
      {
        icon: "key-round",
        step: "04",
        title: "Completion & Handover",
        description: "Final checks are completed and the finished work is handed over once everything is ready.",
      },
    ],
  },
  portfolio: {
    badge: "Projects",
    title: "Recent building projects delivered by SCL Builders",
    // PLACEHOLDER: Portfolio projects are demo examples until real project titles/details are confirmed.
    description:
      "A selection of domestic and commercial project work, including new builds, extensions, conversions and energy-saving upgrades delivered with a focus on quality workmanship and reliable project management.",
    categories: ["All", "New Builds", "Commercial", "Extensions", "Conversions", "Energy Saving"],
    items: [
      {
        id: 1,
        title: "Custom Family Home Build",
        location: "Hamilton",
        description: "Full house build project from planning support through structural build and final finishing stages.",
        image:
          "/images/sclbuildersltd/full-house-builds.jpg",
        category: "New Builds",
      },
      {
        id: 2,
        title: "Commercial Office Fit-Out & Build Works",
        location: "Lanarkshire",
        description: "Commercial construction and upgrade works delivered around business requirements and programme timelines.",
        image:
          "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1080&q=80&fit=crop",
        category: "Commercial",
      },
      {
        id: 3,
        title: "Rear Home Extension",
        location: "Hamilton",
        description: "Extension project creating additional living space with structural and finishing work coordinated by one team.",
        image:
          "/images/gallery-extension.jpg",
        category: "Extensions",
      },
      {
        id: 4,
        title: "Garage Conversion to Living Space",
        location: "South Lanarkshire",
        description: "Garage converted into a usable internal room with upgraded insulation, layout and finish specification.",
        image:
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1080&q=80&fit=crop",
        category: "Conversions",
      },
      {
        id: 5,
        title: "Solar Panel Upgrade Project",
        location: "Hamilton",
        description: "Solar panel installation integrated into wider property improvement works for long-term energy savings.",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1080&q=80&fit=crop",
        category: "Energy Saving",
      },
      {
        id: 6,
        title: "Design-to-Completion Build Package",
        location: "Central Scotland",
        description: "Planning-led build package showing the full design, coordination and construction journey in one service.",
        image:
          "/images/sclbuildersltd/home-extensions.jpg",
        category: "Commercial",
      },
    ],
  },
  whyChooseUs: {
    badge: "Why Choose SCL",
    title: "Why homeowners and businesses choose SCL Builders",
    description:
      "SCL Builders LTD combines family-run values with practical building experience across domestic and commercial work, delivering reliable project management, quality workmanship and clear communication from start to finish.",
    items: [
      {
        icon: "users",
        title: "Family-Run Company",
        description:
          "A family-run team that values trust, clear communication and doing the job properly on every project, large or small.",
      },
      {
        icon: "check-circle",
        title: "Quality Workmanship",
        description:
          "High standards across every stage of the build, with a focus on strong finishes, practical detailing and long-term results.",
      },
      {
        icon: "shield",
        title: "Safety-Focused Approach",
        description:
          "Health and safety is taken seriously on every job, with responsible working practices and respect for your property or site.",
      },
      {
        icon: "hammer",
        title: "All Trades Under One Roof",
        description:
          "A broad range of building trades and experience under one company helps keep your project organised and moving smoothly.",
      },
      {
        icon: "clipboard-list",
        title: "Planning to Completion",
        description:
          "From early planning and design support through to final handover, SCL Builders can manage the process under one roof.",
      },
      {
        icon: "heart-handshake",
        title: "Built on Trust",
        description:
          "Repeat customers and word-of-mouth recommendations reflect the trust SCL Builders has built through reliable service.",
      },
    ],
  },
  testimonials: {
    badge: "Testimonials",
    title: "What clients say about working with SCL Builders",
    // PLACEHOLDER: No testimonials were provided during intake, so demo reviews are generic placeholders.
    description:
      "SCL Builders is built on repeat work, recommendations and trust. This section highlights the kind of customer feedback that helps new clients feel confident when choosing the right builder.",
    averageRatingValue: "5.0",
    averageRatingText: "Google Rating",
    items: [
      {
        // PLACEHOLDER: Demo testimonial content.
        name: "John M.",
        location: "Hamilton",
        project: "Home extension",
        text: "Great communication from start to finish and the workmanship was excellent. The team kept the job moving and delivered a quality finish.",
        rating: 5,
      },
      {
        // PLACEHOLDER: Demo testimonial content.
        name: "Sarah L.",
        location: "Lanarkshire",
        project: "Garage conversion",
        text: "Reliable team and a very professional job. We were pleased with the result and would use SCL Builders again.",
        rating: 5,
      },
      {
        // PLACEHOLDER: Demo testimonial content.
        name: "David R.",
        location: "Hamilton",
        project: "Commercial building work",
        text: "SCL Builders were easy to work with, clear on the scope and delivered the work to a high standard.",
        rating: 5,
      },
      {
        // PLACEHOLDER: Demo testimonial content.
        name: "Emma K.",
        location: "South Lanarkshire",
        project: "Design to completion project",
        text: "Helpful from the planning stage through to completion. The process was well organised and the finish was excellent.",
        rating: 5,
      },
    ],
  },
  contactForm: {
    badge: "Contact Us",
    title: "Tell us about your building project",
    // PLACEHOLDER: Contact form intro copy generated from intake notes.
    description:
      "Whether you are planning a house build, extension, commercial project or garage conversion, send your details and SCL Builders can get back to discuss the next steps.",
    introTitle: "Request a quote",
    introDescription: "Share the type of work, location and any timings you have in mind.",
    submitLabel: "Send Enquiry",
    successTitle: "Thanks, your enquiry has been sent",
    successBodyPrefix: "We will get back to you shortly. If urgent, call us on",
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
    messagePlaceholder: "Tell us about the job, property/site location, and your target timescale...",
    options: [
      { value: "full-house-builds", label: "Full house builds" },
      { value: "commercial-construction", label: "Office building / commercial" },
      { value: "solar-panels", label: "Installing solar panels" },
      { value: "home-extensions", label: "Home extensions" },
      { value: "garage-conversions", label: "Garage conversions" },
      { value: "design-to-completion", label: "Design service to completion" },
      { value: "multiple", label: "Multiple services" },
      { value: "other", label: "Other / not sure" },
    ],
    trustBadges: ["Hamilton Based", "Domestic & Commercial", "Design to Completion"],
  },
  footer: {
    // PLACEHOLDER: Footer copy and area list generated for demo preset.
    description:
      "SCL Builders LTD provides domestic and commercial construction services including full house builds, extensions, garage conversions, solar panel installation and design-to-completion support.",
    servicesTitle: "SERVICES",
    services: [
      "Full House Builds",
      "Commercial Construction",
      "Solar Panel Installation",
      "Home Extensions",
      "Garage Conversions",
      "Design to Completion",
    ],
    areasTitle: "AREAS WE COVER",
    // PLACEHOLDER: Areas coverage list not confirmed during intake.
    areas: ["Hamilton", "South Lanarkshire", "Glasgow", "Central Scotland"],
    ctaTitle: "REQUEST A QUOTE",
    ctaDescription: "Why not give us a call and see how we can help with your project?",
    ctaLabel: "Send Enquiry",
    reviewsLabel: "Family-run builder focused on quality and reliability",
    legalName: "SCL Builders LTD",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
  },
};
