import useGsap from "../../hooks/useGsap.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import ServiceCard from "../ui/ServiceCard.jsx";
import { services } from "../../data/services.js";
import { reduce } from "../../lib/utils.js";
export default function Services() {
  const ref = useGsap((gsap) => {
    if (reduce()) return;
    gsap.from(".service-card", { opacity: 0, y: 60, duration: 0.9, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".svc-grid", start: "top 80%" } });
  });
  return (
    <section ref={ref} id="services" className="px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="What we do" lines={["Creative ideas.", "Technical execution."]} description="We combine design, development and visual storytelling to create digital experiences that stand out." />
        <div className="svc-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((s) => <ServiceCard key={s.number} {...s} />)}</div>
      </div>
    </section>
  );
}
