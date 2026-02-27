/**
 * Central Image Bank
 * All images are stored locally in /public/images/<trade>/
 * Reference these paths in preset files instead of external URLs.
 *
 * To add new images: drop files into public/images/<trade>/ and add entries here.
 */

export const IMAGES = {
  builders: {
    hero:         "/images/builders/hero.png",
    siteHero:     "/images/builders/site-hero.jpg",
    extension:    "/images/builders/extension.jpg",
    loftConversion: "/images/builders/loft-conversion.jpg",
    newbuild:     "/images/builders/newbuild.jpg",
    renovation:   "/images/builders/renovation.jpg",
    bathroom:     "/images/builders/bathroom.jpg",
    kitchen:      "/images/builders/kitchen.jpg",
    plastering:   "/images/builders/plastering.jpg",
    tiling:       "/images/builders/tiling.jpg",
    joinery:      "/images/builders/joinery-detail.jpg",
    decorating:   "/images/builders/decorating.jpg",
    worker:       "/images/builders/worker.png",
  },

  plumbing: {
    hero:            "/images/plumbing/hero.jpg",
    boilerInstall:   "/images/plumbing/boiler-install.jpg",
    systemBoiler:    "/images/plumbing/system-boiler.jpg",
    plumberWorking:  "/images/plumbing/plumber-working.jpg",
    bathroom:        "/images/plumbing/bathroom-plumbing.jpg",
    radiator:        "/images/plumbing/radiator.jpg",
    smartThermostat: "/images/plumbing/smart-thermostat.jpg",
    powerFlush:      "/images/plumbing/power-flush.jpg",
  },

  electrical: {
    hero:         "/images/electrical/hero.jpg",
    electrician:  "/images/electrical/electrician.jpg",
  },

  roofing: {
    hero:        "/images/roofing/hero.jpg",
    roofingWork: "/images/roofing/roofing-work.jpg",
  },

  landscaping: {
    hero:   "/images/landscaping/hero.jpg",
    garden: "/images/landscaping/garden.jpg",
  },

  generic: {
    tradesperson: "/images/generic/tradesperson.jpg",
  },
} as const;

/** Flat lookup by path string — useful for catalogue previews */
export type ImagePath = typeof IMAGES[keyof typeof IMAGES][string];
