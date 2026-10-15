import useGsap from "../../hooks/useGsap.js";
import { projects } from "../../data/projects.js";
import { reduce } from "../../lib/utils.js";
export default function Work() {
  const ref = useGsap((gsap) => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const track = ".work-track";
      const dist = () => document.querySelector(track).scrollWidth - window.innerWidth;
      gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: ".work-pin", pin: true, scrub: 1, end: () => "+=" + dist(), invalidateOnRefresh: true } });
      if (!reduce()) gsap.utils.toArray(".work-visual").forEach((el) => gsap.fromTo(el, { scale: 1 }, { scale: 1.12, ease: "none", scrollTrigger: { trigger: ".work-pin", scrub: true, start: "top top", end: () => "+=" + dist() } }));
    });
  });
  return (
    <section ref={ref} id="work" aria-label="Selected work">
      <div className="work-pin flex min-h-screen flex-col justify-center overflow-hidden py-20 md:py-0">
        <header className="mb-10 px-5 sm:px-8 md:mb-8">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-accent">Selected Work</p>
          <h2 className="text-4xl font-bold leading-[1.02] tracking-tighter sm:text-6xl">Ideas we've<br />brought to life.</h2>
        </header>
        <div className="work-track flex flex-col gap-6 px-5 sm:px-8 md:w-max md:flex-row md:gap-10">
          {projects.map((p) => (
            <article key={p.number} data-cursor="view" className="group w-full md:w-[55vw] md:max-w-[780px] md:shrink-0">
              <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-card md:h-[46vh]">
                <div className={`work-visual absolute inset-0 bg-gradient-to-br ${p.tint} to-transparent`} />
                <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
                <span className="absolute bottom-4 left-6 text-7xl font-extrabold tracking-tighter text-white/90 sm:text-8xl">{p.name}</span>
                <span className="absolute right-6 top-5 text-xs text-white/60">{p.number}</span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div><h3 className="text-xl font-semibold">{p.type}</h3><p className="mt-1 text-sm text-muted">{p.tags.join(" / ")}</p></div>
                <span className="mt-1 h-px w-12 bg-accent transition-all group-hover:w-24" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
