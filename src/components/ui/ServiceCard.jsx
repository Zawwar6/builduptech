import { motion } from "framer-motion";
import * as Icons from "lucide-react";
export default function ServiceCard({ number, title, description, icon }) {
  const Icon = Icons[icon] || Icons.Box;
  return (
    <motion.article initial="rest" whileHover="hover" animate="rest" variants={{ rest: { y: 0 }, hover: { y: -8 } }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="service-card group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-card p-8 transition-colors hover:border-white/30">
      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/25" />
      <div className="relative flex items-start justify-between">
        <span className="text-xs text-muted">{number}</span>
        <motion.span variants={{ rest: { rotate: 0, y: 0 }, hover: { rotate: -8, y: -4 } }}><Icon size={28} strokeWidth={1.25} /></motion.span>
      </div>
      <div className="relative">
        <h3 className="mb-3 text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm leading-relaxed text-muted transition-colors group-hover:text-white/80">{description}</p>
      </div>
      <motion.span className="relative mt-6 self-end text-accent" variants={{ rest: { x: 0, y: 0 }, hover: { x: 6, y: -6 } }} aria-hidden="true"><Icons.ArrowUpRight /></motion.span>
    </motion.article>
  );
}
