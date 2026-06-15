import { Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "../components/ui/SectionHeading";
import { LinkedinIcon, GithubIcon } from "../components/ui/icons";

export default function Contact() {
  return (
    <div className="section">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's connect"
          description="Open to internships, collaborations, and opportunities in marketing, operations, and sustainability. Reach out through any of the channels below."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-colors hover:border-brand-300"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <Mail size={20} />
            </span>
            <div>
              <p className="font-semibold text-ink-900">Email</p>
              <p className="text-sm text-ink-500">{profile.email}</p>
            </div>
          </a>

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-colors hover:border-brand-300"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <LinkedinIcon size={20} />
            </span>
            <div>
              <p className="font-semibold text-ink-900">LinkedIn</p>
              <p className="text-sm text-ink-500">Connect professionally</p>
            </div>
          </a>

          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-colors hover:border-brand-300"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <GithubIcon size={20} />
            </span>
            <div>
              <p className="font-semibold text-ink-900">GitHub</p>
              <p className="text-sm text-ink-500">View my projects</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <MapPin size={20} />
            </span>
            <div>
              <p className="font-semibold text-ink-900">Location</p>
              <p className="text-sm text-ink-500">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
