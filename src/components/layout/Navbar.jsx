import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/timeline", label: "Timeline" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "text-brand-700 bg-brand-50"
        : "text-ink-600 hover:text-brand-700 hover:bg-brand-50"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/80 backdrop-blur-md">
      <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <NavLink to="/" className="font-display text-lg font-bold text-ink-900">
          Sayina<span className="text-brand-600">.</span>Attaf
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}cv/Sayina_Attaf_CV.pdf`}
            download
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <Download size={16} />
            CV
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-ink-700 hover:bg-ink-100 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white md:hidden">
          <div className="container-px mx-auto flex flex-col gap-1 py-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}cv/Sayina_Attaf_CV.pdf`}
              download
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
