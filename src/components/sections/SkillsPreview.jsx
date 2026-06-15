import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";

export default function SkillsPreview() {
  return (
    <section className="section bg-white">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What I bring"
            title="Core Skill Areas"
            description="A blend of marketing, operations, and sustainability competencies, supported by analytical frameworks and professional soft skills."
          />
          <Link
            to="/skills"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:gap-2"
          >
            View all skills <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.slice(0, 3).map((category) => (
            <div key={category.id} className="rounded-2xl border border-ink-100 p-6">
              <h3 className="text-lg font-bold text-ink-900">{category.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{category.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-600">
                {category.skills.slice(0, 4).map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
