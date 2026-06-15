import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { LinkedinIcon, GithubIcon } from "../ui/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-px mx-auto max-w-6xl py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-ink-900">{profile.name}</p>
            <p className="mt-1 max-w-sm text-sm text-ink-500">
              {profile.title} at {profile.university}, specializing in{" "}
              {profile.specializations.join(", ")}. Based in {profile.location}.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="rounded-md p-2 text-ink-500 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                <Mail size={18} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-md p-2 text-ink-500 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-md p-2 text-ink-500 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                <GithubIcon size={18} />
              </a>
            </div>
            <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-500">
              <Link to="/about" className="hover:text-brand-700">About</Link>
              <Link to="/skills" className="hover:text-brand-700">Skills</Link>
              <Link to="/portfolio" className="hover:text-brand-700">Portfolio</Link>
              <Link to="/contact" className="hover:text-brand-700">Contact</Link>
            </nav>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-ink-400">
          © {year} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
