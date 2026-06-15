import { useState } from "react";
import { projects } from "../data/projects";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";

const categories = [
  "All",
  "Operations Management",
  "Marketing",
  "Sustainability",
  "Internship",
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="section">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Project Case Studies"
          description="Academic projects reworked into professional case studies — each applying real business frameworks to a real organization."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-brand-600 text-white"
                  : "bg-white text-ink-600 ring-1 ring-inset ring-ink-200 hover:bg-ink-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-ink-500">
            More case studies in this category are coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
