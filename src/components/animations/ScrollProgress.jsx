import useGsap from "../../hooks/useGsap.js";
export default function ScrollProgress() {
  const ref = useGsap((gsap) => {
    gsap.to(".sp-bar", { scaleX: 1, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.2 } });
  });
  return <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-[80] h-[2px] w-full" aria-hidden="true"><div className="sp-bar h-full origin-left scale-x-0 bg-accent" /></div>;
}
