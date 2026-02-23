export type IconKey =
  | "clock"
  | "map-pin"
  | "shield"
  | "award"
  | "message-square"
  | "clipboard-list"
  | "hard-hat"
  | "key-round"
  | "hammer"
  | "pound-sterling"
  | "users"
  | "check-circle"
  | "heart-handshake";

export interface BrandTokens {
  companyName: string;
  shortName: string;
  fontBody: string;
  fontHeading: string;
  accent: string;
  accentHover: string;
  accentSoft: string;
  accentInk?: string;
  accentOnAccent?: string;
  heroOverlayStart: string;
  heroOverlayMid: string;
  heroOverlayEnd: string;
  mobileNavLabel?: string;
  useBsLogo?: boolean;
}

export interface ContactInfo {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  location: string;
  serviceAreaLine: string;
  openingHours: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  callLabel: string;
  ratingLabel: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface ProcessStep {
  icon: IconKey;
  step: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

export interface ReasonItem {
  icon: IconKey;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  project: string;
  text: string;
  rating: number;
}

export interface TrustItem {
  icon: IconKey;
  value: string;
  label: string;
}

export interface FormOption {
  value: string;
  label: string;
}

export interface FormContent {
  badge: string;
  title: string;
  description: string;
  introTitle: string;
  introDescription: string;
  submitLabel: string;
  successTitle: string;
  successBodyPrefix: string;
  successBodySuffix: string;
  resetLabel: string;
  privacyNote: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  options: FormOption[];
  trustBadges: string[];
}

export interface FooterContent {
  description: string;
  servicesTitle: string;
  services: string[];
  areasTitle: string;
  areas: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  reviewsLabel: string;
  legalName: string;
  privacyLabel: string;
  termsLabel: string;
}

export interface BusinessPreset {
  id: string;
  brand: BrandTokens;
  contact: ContactInfo;
  nav: {
    links: NavLink[];
    desktopCtaLabel: string;
    mobileCallLabel: string;
    mobileCtaLabel: string;
  };
  hero: HeroContent;
  trustBar: TrustItem[];
  services: {
    badge: string;
    title: string;
    description: string;
    items: ServiceItem[];
    enquireLabel: string;
  };
  process: {
    badge: string;
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  portfolio: {
    badge: string;
    title: string;
    description: string;
    categories: string[];
    items: PortfolioItem[];
  };
  whyChooseUs: {
    badge: string;
    title: string;
    description: string;
    items: ReasonItem[];
  };
  testimonials: {
    badge: string;
    title: string;
    description: string;
    items: Testimonial[];
    averageRatingValue: string;
    averageRatingText: string;
  };
  contactForm: FormContent;
  footer: FooterContent;
}
