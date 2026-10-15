export default function SectionHeading({ label, lines, description }) {
  return (
    <header className="mb-14 max-w-3xl">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-accent">{label}</p>
      <h2 className="text-4xl font-bold leading-[1.02] tracking-tighter sm:text-6xl">
        {lines.map((l) => <span key={l} className="block">{l}</span>)}
      </h2>
      {description && <p className="mt-6 max-w-xl text-lg text-muted">{description}</p>}
    </header>
  );
}
