/**
 * Portfolio Variant B — Horizontal Scroll Strip
 * Wide cards in a horizontal scrollable track.
 * Great for mobile — feels native.
 * Shows more projects at once on desktop.
 */
import { useState } from "react";
import type { BusinessPreset } from "@/config/template.types";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioBProps {
  preset: BusinessPreset;
}

export function PortfolioB({ preset }: PortfolioBProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? preset.portfolio.items
      : preset.portfolio.items.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-xl">
            <span
              className="uppercase tracking-wider mb-3 block"
              style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-accent-ink)" }}
            >
              {preset.portfolio.badge}
            </span>
            <h2
              className="text-[#1A1A1A] mb-3"
              style={{
                fontFamily: "var(--brand-heading-font)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: "var(--brand-heading-weight, 700)",
                lineHeight: 1.2,
              }}
            >
              {preset.portfolio.title}
            </h2>
            <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              {preset.portfolio.description}
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {preset.portfolio.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2 rounded-full border transition-all"
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  backgroundColor: activeCategory === category ? "var(--brand-accent)" : "transparent",
                  color: activeCategory === category ? "var(--brand-accent-on)" : "#6B7280",
                  borderColor: activeCategory === category ? "var(--brand-accent)" : "#E0DDD9",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll track — full bleed */}
      <div className="pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        <div
          className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative flex-none w-[280px] sm:w-[340px] lg:w-[380px] rounded-xl overflow-hidden snap-start cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay — always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent" />

              {/* Category tag */}
              <div className="absolute top-4 left-4">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: "var(--brand-accent)",
                    color: "var(--brand-accent-on)",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-white mb-1"
                  style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {project.title}
                </h3>
                <p className="text-white/65" style={{ fontSize: "0.8125rem", marginBottom: "0.5rem" }}>
                  {project.location}
                </p>
                <p
                  className="text-white/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2"
                  style={{ fontSize: "0.875rem", lineHeight: 1.55 }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}

          {/* Trailing spacer so last card doesn't hug the edge */}
          <div className="flex-none w-4 sm:w-6 lg:w-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-4">
        <span className="text-[#9CA3AF] flex items-center gap-1.5" style={{ fontSize: "0.8125rem" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          Scroll to see more projects
        </span>
      </div>
    </section>
  );
}
