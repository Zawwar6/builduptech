import useGsap from "../../hooks/useGsap.js";
import { reduce } from "../../lib/utils.js";
// Scroll-triggered line reveal. Pass children as plain text/inline content.
export default function RevealText({ as: Tag = "div", children, className = "" }) {
  const ref = useGsap((gsap) => {
    if (reduce()) return;
    gsap.from(".rt-inner", { yPercent: 110, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".rt-wrap", start: "top 85%" } });
  });
  return <div ref={ref}><Tag className={`rt-wrap overflow-hidden ${className}`}><span className="rt-inner block">{children}</span></Tag></div>;
}
