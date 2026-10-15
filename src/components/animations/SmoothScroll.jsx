import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Lightweight: native smooth scrolling (CSS) + refresh ScrollTrigger once fonts/images settle.
export default function SmoothScroll() {
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 500);
    window.addEventListener("load", ScrollTrigger.refresh);
    return () => { clearTimeout(t); window.removeEventListener("load", ScrollTrigger.refresh); };
  }, []);
  return null;
}
