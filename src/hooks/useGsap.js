import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Runs build(gsap) inside a gsap.context scoped to the returned ref; reverted on unmount.
export default function useGsap(build, deps = []) {
  const scope = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => build(gsap), scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return scope;
}
