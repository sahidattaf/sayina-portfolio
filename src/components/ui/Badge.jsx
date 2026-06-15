export default function Badge({ children, variant = "neutral" }) {
  const styles =
    variant === "brand"
      ? "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200"
      : "bg-ink-100 text-ink-600 ring-1 ring-inset ring-ink-200";

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles}`}>
      {children}
    </span>
  );
}
