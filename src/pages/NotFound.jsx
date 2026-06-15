import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="section text-center">
      <div className="container-px mx-auto max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">404</p>
        <h1 className="mt-2 text-3xl font-bold text-ink-900">Page not found</h1>
        <p className="mt-3 text-ink-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
