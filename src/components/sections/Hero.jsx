import useGsap from "../../hooks/useGsap.js";
import Button from "../ui/Button.jsx";
import { reduce, scrollToId } from "../../lib/utils.js";
export default function Hero() {
  const ref = useGsap((gsap) => {
    if (reduce()) return;
    gsap.timeline({ delay: 1.9, defaults: { ease: "power3.out" } })
      .from(".h-label", { opacity: 0, y: 12, duration: 0.6 })
      .from(".h-line", { yPercent: 110, duration: 1, stagger: 0.12 }, "-=0.2")
      .from(".h-copy", { opacity: 0, y: 24, duration: 0.8 }, "-=0.5")
      .from(".h-btn", { opacity: 0, y: 20, stagger: 0.1, duration: 0.6 }, "-=0.5")
      .from(".h-grid", { opacity: 0, duration: 1.2 }, "-=0.8")
      .from(".h-scroll", { opacity: 0, duration: 0.6 });
    gsap.to(".h-glow", { x: 90, y: -50, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".h-float", { y: -20, rotation: "+=10", duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.5 });
  });
  const lines = [["We Build ", "Digital"], ["Experiences That"], ["Move Brands ", "Forward."]];
  return (
    <section ref={ref} id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
      <div className="h-grid grid-bg grid-move absolute inset-0" aria-hidden="true" />
      <div className="h-glow absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" aria-hidden="true" />
      <div className="h-float absolute right-[10%] top-[22%] hidden h-24 w-24 rotate-12 border border-white/20 md:block" aria-hidden="true" />
      <div className="h-float absolute bottom-[22%] right-[22%] hidden h-14 w-14 rounded-full border border-accent/60 md:block" aria-hidden="true" />
      <div className="h-float absolute bottom-[30%] left-[8%] hidden h-0 w-0 border-x-[26px] border-b-[44px] border-x-transparent border-b-white/10 md:block" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl">
        <p className="h-label mb-8 text-xs font-medium uppercase tracking-[0.3em] text-muted">Creative Technology Studio</p>
        <h1 className="text-[clamp(2.75rem,9vw,8.5rem)] font-extrabold leading-[0.95] tracking-tighter">
          {lines.map((parts, i) => (
            <span key={i} className="block overflow-hidden pb-2"><span className="h-line block">
              {parts.map((p, j) => <span key={j} className={j === 1 ? "text-accent" : ""}>{p}</span>)}
            </span></span>
          ))}
        </h1>
        <p className="h-copy mt-8 max-w-xl text-lg text-muted">Websites, interfaces, visual content and digital experiences built with creativity and technology.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <div className="h-btn">
          <Button
            onClick={() =>
              window.open("https://wa.me/923321360570?text=Hi%2C%20I%20want%20to%20start%20a%20project%20with%20BuiltUp%20Tech.", "_blank")
            }
          >
            Start a Project →
          </Button>
        </div>
          <div className="h-btn"><Button variant="ghost" onClick={() => scrollToId("work")}>Explore Our Work ↓</Button></div>
        </div>
      </div>
      <div className="h-scroll absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-muted sm:flex" aria-hidden="true">SCROLL<span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" /></div>
    </section>
  );
}
