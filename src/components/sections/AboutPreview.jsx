import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="About me" title={`Hi, I'm ${profile.name}`} />
            <p className="mt-4 max-w-2xl text-ink-600">{profile.about.intro}</p>
            <p className="mt-4 max-w-2xl text-ink-600">{profile.about.approach}</p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:gap-2"
            >
              More about me <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-2xl border border-ink-100 bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-400">
              Quick facts
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-ink-400">University</dt>
                <dd className="font-medium text-ink-900">{profile.university}</dd>
              </div>
              <div>
                <dt className="text-ink-400">Program</dt>
                <dd className="font-medium text-ink-900">{profile.program}</dd>
              </div>
              <div>
                <dt className="text-ink-400">Based in</dt>
                <dd className="font-medium text-ink-900">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-ink-400">Specializations</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {profile.specializations.map((s) => (
                    <Badge key={s} variant="brand">
                      {s}
                    </Badge>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
