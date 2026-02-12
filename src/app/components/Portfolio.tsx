import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Two-Storey Rear Extension",
    location: "Newton Mearns, Glasgow",
    description: "A complete two-storey extension adding a large kitchen-diner and master bedroom suite, managed from planning to handover.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080&q=80&fit=crop",
    category: "Extensions",
  },
  {
    id: 2,
    title: "Complete Kitchen Renovation",
    location: "Paisley, Renfrewshire",
    description: "Full kitchen strip-out and refit with bespoke cabinetry, quartz worktops, and underfloor heating.",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1080&q=80&fit=crop",
    category: "Kitchens",
  },
  {
    id: 3,
    title: "Luxury Bathroom Suite",
    location: "Eaglesham, East Renfrewshire",
    description: "A high-end bathroom renovation featuring walk-in rain shower, freestanding bath, and wet wall system installation.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1080&q=80&fit=crop",
    category: "Bathrooms",
  },
  {
    id: 4,
    title: "Loft Conversion with En-Suite",
    location: "Barrhead, East Renfrewshire",
    description: "A dormer loft conversion creating a spacious fourth bedroom with en-suite shower room and Velux windows.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1080&q=80&fit=crop",
    category: "Conversions",
  },
  {
    id: 5,
    title: "Whole House Refurbishment",
    location: "Hamilton, South Lanarkshire",
    description: "A complete interior renovation including structural alterations, new electrics, plastering throughout, and a full painting and decorating service.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1080&q=80&fit=crop",
    category: "Renovations",
  },
  {
    id: 6,
    title: "Mono-blocking & Landscaping",
    location: "East Kilbride, South Lanarkshire",
    description: "A complete driveway and garden transformation with mono-blocking, landscaping, and new fencing throughout.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1080&q=80&fit=crop",
    category: "Landscaping",
  },
];

const categories = ["All", "Extensions", "Kitchens", "Bathrooms", "Conversions", "Renovations", "Landscaping"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 lg:mb-14">
          <span
            className="text-[#C8102E] uppercase tracking-wider mb-3 block"
            style={{ fontSize: "0.8125rem", fontWeight: 600 }}
          >
            Our Work
          </span>
          <h2
            className="text-[#1A1A1A] mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Projects we're proud of
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Every project is different, but our standards never change. Browse a selection of
            completed work across Scotland.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all ${
                activeCategory === cat
                  ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                  : "bg-transparent text-[#6B7280] border-[#E0DDD9] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
              }`}
              style={{ fontSize: "0.8125rem", fontWeight: 500 }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span
                    className="inline-block bg-[#C8102E] text-white px-3 py-1 rounded-full mb-2"
                    style={{ fontSize: "0.75rem", fontWeight: 500 }}
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