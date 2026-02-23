import { useState } from "react";
import type { BusinessPreset } from "@/config/template.types";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioProps {
  preset: BusinessPreset;
}

export function Portfolio({ preset }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? preset.portfolio.items
      : preset.portfolio.items.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-14">
          <span
            className="uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-accent-ink)" }}
          >
            {preset.portfolio.badge}
          </span>
          <h2
            className="text-[#1A1A1A] mb-4"
            style={{
              fontFamily: "var(--brand-heading-font)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {preset.portfolio.title}
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            {preset.portfolio.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
          {preset.portfolio.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border transition-all ${
                activeCategory === category
                  ? "text-white"
                  : "bg-transparent text-[#6B7280] border-[#E0DDD9] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
              }`}
              style={{
                fontSize: "0.8125rem",
                fontWeight: 500,
                backgroundColor: activeCategory === category ? "#1A1A1A" : undefined,
                borderColor: activeCategory === category ? "#1A1A1A" : undefined,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer rounded-xl overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span
                    className="inline-block text-white px-3 py-1 rounded-full mb-2"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      backgroundColor: "var(--brand-accent)",
                      color: "var(--brand-accent-on)",
                    }}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-white" style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}>
                    {project.title}
                  </h3>
                  <p className="text-white/80" style={{ fontSize: "0.8125rem", lineHeight: 1.5 }}>
                    {project.location}
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-[#1A1A1A] mb-1" style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p className="text-[#6B7280] mb-1" style={{ fontSize: "0.8125rem" }}>
                  {project.location}
                </p>
                <p className="text-[#6B7280]" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
