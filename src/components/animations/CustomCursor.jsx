import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useMediaQuery from "../../hooks/useMediaQuery.js";
export default function CustomCursor() {
  const enabled = useMediaQuery("(hover: hover) and (min-width: 1024px)");
  const dot = useRef(null);
  const [label, setLabel] = useState("");
  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-cursor");
    const x = gsap.quickTo(dot.current, "x", { duration: 0.35, ease: "power3" });
    const y = gsap.quickTo(dot.current, "y", { duration: 0.35, ease: "power3" });
    const move = (e) => { x(e.clientX); y(e.clientY); };
    const over = (e) => {
      const t = e.target.closest("[data-cursor], a, button");
      const kind = t?.dataset?.cursor || (t ? "link" : "");
      setLabel(kind === "view" ? "VIEW" : "");
      gsap.to(dot.current.firstChild, { scale: kind === "view" ? 6 : kind ? 2.5 : 1, duration: 0.3 });
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { document.body.classList.remove("has-cursor"); window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [enabled]);
  if (!enabled) return null;
  return (
    <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[95]" aria-hidden="true">
      <div className="-ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-white mix-blend-difference" />
      {label && <span className="absolute -left-4 -top-2 text-[10px] font-bold tracking-widest text-ink">{label}</span>}
    </div>
  );
}
