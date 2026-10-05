import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects, categories } from "../data/projects";

const categoryColors: Record<string, string> = {
  thumbnails: "project-pattern-thumbs",
  minecraft: "project-pattern-minecraft",
  discord: "project-pattern-discord",
  websites: "project-pattern-websites",
};

const categoryIcons: Record<string, string> = {
  thumbnails: "🎨",
  minecraft: "⛏️",
  discord: "💬",
  websites: "🌐",
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work across different services and
            platforms.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-light rounded-2xl overflow-hidden card-hover group"
            >
              {/* Project image placeholder */}
              <div
                className={`relative h-48 ${
                  categoryColors[project.category]
                } border-b border-white/5 flex items-center justify-center overflow-hidden`}
              >
                {/* Decorative grid overlay */}
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform">
                  {categoryIcons[project.category]}
                </span>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white/80 font-medium capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className="flex items-center gap-2 text-primary-light text-sm font-medium hover:text-white transition-colors group/link">
                  View Project
                  <ExternalLink
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
