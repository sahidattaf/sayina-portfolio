import { Download } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";

export default function About() {
  return (
    <div className="section">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow="About me" title={`The story behind ${profile.name}`} />

        <div className="mt-8 space-y-6 text-ink-600">
          <p>{profile.about.intro}</p>
          <p>{profile.about.approach}</p>
          <p>{profile.about.interests}</p>
          <p>{profile.about.goals}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-ink-100 bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-400">
              Education
            </h3>
            <p className="mt-2 font-medium text-ink-900">{profile.program}</p>
            <p className="text-sm text-ink-500">{profile.university}</p>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-400">
              Specializations
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.specializations.map((s) => (
                <Badge key={s} variant="brand">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <a
            href={`${import.meta.env.BASE_URL}cv/Sayina_Attaf_CV.pdf`}
            download
            className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            <Download size={16} /> Download full CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
