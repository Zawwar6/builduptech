import useGsap from "../../hooks/useGsap.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import { process } from "../../data/process.js";
export default function Process() {
  const ref = useGsap((gsap) => {
    gsap.to(".pr-fill", { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".pr-list", start: "top 60%", end: "bottom 60%", scrub: true } });
    gsap.utils.toArray(".pr-step").forEach((el) => gsap.timeline({ scrollTrigger: { trigger: el, start: "top 65%", toggleActions: "play none none reverse" } }).to(el, { opacity: 1, duration: 0.5 }).to(el.querySelector(".pr-dot"), { backgroundColor: "#FF2B2B", scale: 1.3, duration: 0.3 }, 0));
  });
  return (
    <section ref={ref} id="process" className="bg-ink2 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Our Process" lines={["From idea", "to execution."]} />
        <ol className="pr-list relative ml-3 space-y-20 pl-10">
          <span className="absolute left-0 top-0 h-full w-px bg-white/10" aria-hidden="true" />
          <span className="pr-fill absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-accent" aria-hidden="true" />
          {process.map((s) => (
            <li key={s.number} className="pr-step relative opacity-30">
              <span className="pr-dot absolute -left-[45px] top-3 h-2.5 w-2.5 rounded-full bg-white/30" aria-hidden="true" />
              <p className="text-sm text-accent">{s.number}</p>
              <h3 className="mt-2 text-4xl font-bold tracking-tighter sm:text-6xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
