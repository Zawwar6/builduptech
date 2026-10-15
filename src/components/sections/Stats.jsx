import useGsap from "../../hooks/useGsap.js";
import { reduce } from "../../lib/utils.js";
// DEMO VALUES — replace with real numbers before launch.
const stats = [{ to: 10, suffix: "+", label: "Projects" }, { to: 5, suffix: "", label: "Core Services" }, { to: 3, suffix: "", label: "Creative Disciplines" }, { to: 100, suffix: "%", label: "Commitment" }];
export default function Stats() {
  const ref = useGsap((gsap) => {
    if (reduce()) return;
    gsap.utils.toArray(".count").forEach((el) => {
      const o = { v: 0 };
      gsap.to(o, { v: +el.dataset.to, duration: 1.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 92%", once: true }, onUpdate: () => (el.textContent = Math.round(o.v)) });
    });
  });
  return (
    <section ref={ref} aria-label="Studio stats" className="border-y border-white/10 bg-ink2 px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_2fr]">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">Built for brands<br />that want to move forward.</h2>
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-white/10 pl-5">
              <dd className="order-1 text-5xl font-extrabold tracking-tighter"><span className="count" data-to={s.to}>{s.to}</span><span className="text-accent">{s.suffix}</span></dd>
              <dt className="mt-2 text-sm text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
