import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
export default function Loader() {
  const root = useRef(null);
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const counter = { v: 0 };
    const tl = gsap.timeline();
    tl.to(counter, { v: 100, duration: 1.2, ease: "power2.inOut", onUpdate: () => setPercent(Math.round(counter.v)) })
      .to(root.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" })
      .add(() => setDone(true));
    return () => tl.kill();
  }, []);
  if (done) return null;
  return (
    <div ref={root} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black" role="status" aria-label="Loading">
      <p className="text-2xl font-bold tracking-[0.4em] sm:text-4xl">BUILTUPTECH</p>
      <p className="mt-6 text-sm tabular-nums text-accent">{percent}%</p>
    </div>
  );
}
