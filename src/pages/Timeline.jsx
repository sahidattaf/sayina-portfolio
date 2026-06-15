import { GraduationCap, Briefcase, FileText } from "lucide-react";
import { timeline } from "../data/timeline";
import SectionHeading from "../components/ui/SectionHeading";

const icons = {
  education: GraduationCap,
  work: Briefcase,
  project: FileText,
};

const typeLabels = {
  education: "Education",
  work: "Experience",
  project: "Project",
};

export default function Timeline() {
  return (
    <div className="section">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Journey"
          title="Career Timeline"
          description="Education, work experience, and projects that have shaped my path in International Business so far."
        />

        <ol className="mt-12 space-y-10 border-l border-ink-200 pl-8">
          {timeline.map((item) => {
            const Icon = icons[item.type];
            return (
              <li key={item.id} className="relative">
                <span className="absolute -left-[2.55rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-700 ring-4 ring-white">
                  <Icon size={16} />
                </span>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  {item.period} · {typeLabels[item.type]}
                </p>
                <h3 className="mt-1 text-lg font-bold text-ink-900">{item.title}</h3>
                <p className="text-sm text-ink-500">
                  {item.organization}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
                <p className="mt-2 text-ink-600">{item.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
