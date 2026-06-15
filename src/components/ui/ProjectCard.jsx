import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Badge from "./Badge";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className={`h-32 w-full bg-gradient-to-br ${project.coverGradient}`} />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2">
          <Badge variant="brand">{project.category}</Badge>
          <span className="text-xs text-ink-400">{project.date}</span>
        </div>
        <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-700">
          {project.title}
        </h3>
        <p className="text-sm text-ink-500">{project.subtitle}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
          Read case study <ArrowRight size={16} className="transition-transform" />
        </span>
      </div>
    </Link>
  );
}
