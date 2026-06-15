import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug } from "../../data/projects";
import Badge from "../../components/ui/Badge";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <article>
      <header className={`bg-gradient-to-br ${project.coverGradient} py-16 text-white`}>
        <div className="container-px mx-auto max-w-4xl">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
          <div className="mt-4 flex items-center gap-2">
            <Badge>{project.category}</Badge>
            <span className="text-sm text-white/80">{project.date}</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{project.title}</h1>
          <p className="mt-3 max-w-2xl text-white/90">{project.subtitle}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="section">
        <div className="container-px mx-auto max-w-4xl">
          <p className="text-lg text-ink-600">{project.summary}</p>

          <div className="mt-10 space-y-12">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-ink-900">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-ink-600">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-ink-600">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {project.kpis && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-ink-900">KPI Dashboard</h2>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-ink-100">
                <table className="w-full text-left text-sm">
                  <thead className="bg-ink-50 text-ink-500">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Performance Objective</th>
                      <th className="px-4 py-3 font-semibold">KPI</th>
                      <th className="px-4 py-3 font-semibold">Current</th>
                      <th className="px-4 py-3 font-semibold">Target</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-100">
                    {project.kpis.map((row, i) => (
                      <tr key={i} className="bg-white">
                        <td className="px-4 py-3 font-medium text-ink-800">{row.objective}</td>
                        <td className="px-4 py-3 text-ink-600">{row.kpi}</td>
                        <td className="px-4 py-3 text-ink-600">{row.current}</td>
                        <td className="px-4 py-3 text-brand-700">{row.target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {project.references && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-ink-900">References</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-500">
                {project.references.map((ref, i) => (
                  <li key={i}>{ref}</li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-12 border-t border-ink-100 pt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:gap-2"
            >
              <ArrowLeft size={16} /> Back to all projects
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
