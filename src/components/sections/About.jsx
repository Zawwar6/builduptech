import useGsap from "../../hooks/useGsap.js";
import { reduce } from "../../lib/utils.js";
const values = ["Creative Thinking", "Modern Technology", "Detail Driven", "Built for Impact"];
export default function About() {
  const ref = useGsap((gsap) => {
    if (reduce()) return;
    gsap.from(".ab-item", { opacity: 0, y: 40, stagger: 0.12, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".ab-root", start: "top 75%" } });
  });
  return (
    <section ref={ref} id="about" className="px-5 py-28 sm:px-8">
      <div className="ab-root mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <h2 className="ab-item text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-7xl">Design meets<br />technology.</h2>
          <p className="ab-item self-end text-xl leading-relaxed text-muted">BuildUpTech brings together development, design and visual storytelling to create digital experiences that help businesses communicate, connect and grow.</p>
        </div>
        <ul className="mt-20 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => <li key={v} className="ab-item border-b border-white/10 py-8 pr-4 sm:border-b-0"><span className="text-xs text-accent">0{i + 1}</span><p className="mt-2 text-lg font-medium">{v}</p></li>)}
        </ul>
      </div>
    </section>
  );
}
