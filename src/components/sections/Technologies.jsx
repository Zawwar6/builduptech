import { technologies } from "../../data/technologies.js";
export default function Technologies() {
  const items = [...technologies, ...technologies];
  return (
    <section aria-label="Tools" className="overflow-hidden border-y border-white/10 py-24">
      <h2 className="mb-14 px-5 text-4xl font-bold tracking-tighter sm:px-8 sm:text-6xl">Tools behind<br />the work.</h2>
      <div className="marquee-track flex gap-12" aria-hidden="true">
        {items.map((t, i) => <span key={i} className="whitespace-nowrap text-5xl font-extrabold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.35)] transition-colors hover:text-accent sm:text-7xl">{t}</span>)}
      </div>
      <ul className="sr-only">{technologies.map((t) => <li key={t}>{t}</li>)}</ul>
    </section>
  );
}
