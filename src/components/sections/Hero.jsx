import { Link } from "react-router-dom";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-ink-50" />
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-sm font-medium text-brand-600">
          <MapPin size={16} />
          {profile.location}
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
          Hi, I'm {profile.name.split(" ")[0]} —{" "}
          <span className="text-gradient">{profile.title}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-500">{profile.tagline}</p>
        <p className="mt-2 max-w-2xl text-ink-500">
          Studying at {profile.university}, specializing in{" "}
          {profile.specializations.join(", ")}.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            View Portfolio <ArrowRight size={16} />
          </Link>
          <a
            href={`${import.meta.env.BASE_URL}cv/Sayina_Attaf_CV.pdf`}
            download
            className="inline-flex items-center gap-2 rounded-md border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-ink-700 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            <Download size={16} /> Download CV
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-ink-600 transition-colors hover:text-brand-700"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
