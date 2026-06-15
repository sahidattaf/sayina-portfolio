import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="section">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Case Studies"
            title="Featured Projects"
            description="Academic projects transformed into professional case studies, applying business frameworks to real organizations."
          />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:gap-2"
          >
            View full portfolio <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
