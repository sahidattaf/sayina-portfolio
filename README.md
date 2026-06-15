# Sayina Attaf — Portfolio

A modern, responsive, mobile-first portfolio website for **Sayina Attaf**,
International Business student at HAN University of Applied Sciences,
specializing in **Marketing, Operations Management, and Sustainability**.

Built with **React 19 + JavaScript (JSX) + Vite + Tailwind CSS v4 + React Router**.

## ✨ Features

- Responsive, mobile-first design
- Home, About, Skills, Career Timeline, Portfolio, Project case studies, and Contact pages
- Academic reports transformed into structured **case study pages** (e.g. the
  Operations Management analysis of Smullers Arnhem)
- Downloadable CV link wired into the Navbar, Hero, and About page
- Ready for deployment to **GitHub Pages** and **Vercel**

## 📁 Folder Structure

```text
portfolio/
├── public/
│   ├── cv/                     # Place Sayina_Attaf_CV.pdf here
│   ├── favicon.svg
│   └── .nojekyll               # Disables Jekyll processing on GitHub Pages
├── scripts/
│   └── copy-spa-fallback.js    # Creates 404.html for SPA routing on GitHub Pages
├── src/
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, Layout (page shell)
│   │   ├── sections/            # Reusable homepage sections (Hero, AboutPreview, etc.)
│   │   └── ui/                  # Small shared UI primitives (Badge, Card, ProjectCard, icons)
│   ├── data/                    # Content as plain JS data (profile, skills, timeline, projects)
│   ├── pages/                   # Route-level pages
│   │   └── portfolio/
│   │       └── ProjectDetail.jsx
│   ├── App.jsx                  # Router setup
│   ├── main.jsx                 # App entry point
│   └── index.css                # Tailwind v4 theme & global styles
├── .github/workflows/deploy.yml # GitHub Pages CI/CD
├── vercel.json                  # SPA rewrite rules for Vercel
├── vite.config.js
└── package.json
```

## 🧱 Architecture Overview

### Routing (`src/App.jsx`)

Client-side routing via `react-router-dom`, wrapped in a shared `Layout`
(Navbar + Footer):

| Route              | Page                       |
| ------------------ | -------------------------- |
| `/`                | Home (hero, previews, CTA) |
| `/about`           | About                      |
| `/skills`          | Skills                     |
| `/timeline`        | Career Timeline            |
| `/portfolio`       | Project list (filterable)  |
| `/portfolio/:slug` | Project case study detail  |
| `/contact`         | Contact                    |
| `*`                | 404 Not Found              |

### Component Architecture

- **`components/layout`** — `Navbar`, `Footer`, and `Layout` (the page shell
  rendered around every route via `<Outlet />`).
- **`components/sections`** — composable sections used on the Home page:
  `Hero`, `AboutPreview`, `SkillsPreview`, `FeaturedProjects`, `ContactCta`.
- **`components/ui`** — small, reusable primitives: `SectionHeading`, `Badge`,
  `ProjectCard`, and brand icons (`icons.jsx`).
- **`pages`** — one component per route. `portfolio/ProjectDetail.jsx` renders
  any project from `data/projects.js` generically (summary, rich sections,
  bullet lists, optional KPI table, optional references) so new case studies
  only require adding a data entry — no new components.

### Data Layer (`src/data`)

All content lives in plain JavaScript modules so the site can be updated
without touching JSX:

- `profile.js` — name, tagline, bio, specializations, contact/social links
- `skills.js` — skill categories + proficiency levels (rendered as progress bars)
- `timeline.js` — education/work/project timeline entries
- `projects.js` — case studies. Each project has `summary`, an array of
  `sections` (heading + paragraphs + optional bullet list), and optional
  `kpis` (rendered as a table) and `references`.

#### Adding a new project / case study

1. Open `src/data/projects.js`.
2. Add a new object to the `projects` array with a unique `slug`.
3. Break the report into `sections` (one per heading), each with
   `paragraphs` and optional `bullets`.
4. Optionally add a `kpis` table and `references` list.
5. Set `featured: true` to surface it on the homepage.

The new case study is automatically available at `/portfolio/<slug>` and in
the `/portfolio` listing — no component changes needed.

## 🖥️ Local Development

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

```bash
npm run build      # production build (outputs to dist/)
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

## 📄 Adding the CV

The Navbar, Hero, and About page all link to `/cv/Sayina_Attaf_CV.pdf`. Add
the real CV file to `public/cv/Sayina_Attaf_CV.pdf` before deploying — see
`public/cv/README.md`.

## 🚀 Deployment

### GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
the `dist/` folder to GitHub Pages on every push to `main`.

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. In `.github/workflows/deploy.yml`, set `VITE_BASE_PATH` to match your
   repository name, e.g. for `github.com/<user>/portfolio` use:
   ```yaml
   VITE_BASE_PATH: /portfolio/
   ```
   (If deploying to a custom domain or a `<user>.github.io` repo, use `/`.)
4. Push to `main` — the workflow builds the site and publishes it.
   The build also runs `scripts/copy-spa-fallback.js`, which copies
   `index.html` to `404.html` so deep links like `/portfolio/...` work after a
   page refresh on GitHub Pages.

You can also build manually for a specific base path:

```bash
VITE_BASE_PATH=/portfolio/ npm run build
```

### Vercel

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite** (auto-detected).
3. Build command: `npm run build`, Output directory: `dist`.
4. Leave `VITE_BASE_PATH` unset (defaults to `/`) since Vercel serves from the
   domain root.
5. `vercel.json` is already configured with a catch-all rewrite to
   `index.html` so client-side routes resolve correctly.

## 🛠️ Tech Stack

- [React 19](https://react.dev/) + JavaScript (JSX)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [React Router 7](https://reactrouter.com/)
- [Lucide](https://lucide.dev/) icons
