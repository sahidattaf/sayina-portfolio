import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function ContactCta() {
  return (
    <section className="section bg-gradient-to-br from-brand-600 to-brand-800 text-white">
      <div className="container-px mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Let's work together</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-50">
          Open to internships, projects, and graduate opportunities in marketing, operations, and
          sustainability. Feel free to reach out.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
        >
          <Mail size={16} /> Get in touch
        </Link>
      </div>
    </section>
  );
}
