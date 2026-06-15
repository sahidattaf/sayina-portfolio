import { skillCategories, skillLevelValue } from "../data/skills";
import SectionHeading from "../components/ui/SectionHeading";

export default function Skills() {
  return (
    <div className="section">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Frameworks"
          description="A breakdown of the skills developed through coursework, projects, and part-time work — spanning marketing, operations, sustainability, and the tools and frameworks that support them."
        />

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.id} className="rounded-2xl border border-ink-100 bg-white p-6">
              <h3 className="text-lg font-bold text-ink-900">{category.title}</h3>
              <p className="mt-1 text-sm text-ink-500">{category.description}</p>

              <ul className="mt-5 space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink-800">{skill.name}</span>
                      <span className="text-ink-400">{skill.level}</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-ink-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                        style={{ width: `${skillLevelValue[skill.level]}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
