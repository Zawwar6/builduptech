import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button.jsx";
import { scrollToId } from "../../lib/utils.js";
const links = [["Home", "home"], ["Services", "services"], ["Work", "work"], ["Process", "process"], ["About", "about"], ["Contact", "contact"]];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const go = (id) => { setOpen(false); setTimeout(() => scrollToId(id), 50); };
  return (
    <>
      <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.8, duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "h-16 border-white/10 bg-ink/80 backdrop-blur-md" : "h-20 border-transparent"}`}>
        <nav aria-label="Main" className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => go("home")}
          className="flex items-center"
        >
          <img
            src="/builtuptech.png"
            alt="BuildUpTech"
            className="h-[130px] w-auto object-contain"
          />
        </button>
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map(([l, id]) => (
              <li key={id}><button onClick={() => go(id)} className="group relative text-sm text-muted transition-colors hover:text-white">{l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all group-hover:w-full" /></button></li>
            ))}
          </ul>
          <div className="hidden lg:block"><Button onClick={() => go("contact")} className="!px-5 !py-2.5 text-xs">START A PROJECT</Button></div>
          <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex flex-col justify-center gap-5 bg-ink px-8 lg:hidden">
            {links.map(([l, id], i) => (
              <motion.button key={id} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}
                onClick={() => go(id)} className="text-left text-5xl font-bold tracking-tighter">{l}</motion.button>
            ))}
            <Button onClick={() => go("contact")} className="mt-6">Start a Project</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
