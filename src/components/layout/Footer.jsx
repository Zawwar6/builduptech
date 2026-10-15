import { scrollToId } from "../../lib/utils.js";
const nav = [["Home", "home"], ["Services", "services"], ["Work", "work"], ["Process", "process"], ["About", "about"], ["Contact", "contact"]];
const social = [["LinkedIn", "https://linkedin.com"], ["Instagram", "https://instagram.com"], ["Behance", "https://behance.net"], ["GitHub", "https://github.com"]]; // placeholder URLs
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink2 px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div><p className="font-bold tracking-[0.3em]">BUILDUPTECH</p><p className="mt-4 max-w-xs text-muted">Creative technology for ambitious ideas.</p></div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-3 text-sm text-muted">{nav.map(([l, id]) => <li key={id}><button onClick={() => scrollToId(id)} className="hover:text-white">{l}</button></li>)}</ul></nav>
        <ul className="space-y-3 text-sm text-muted">{social.map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noreferrer" className="hover:text-white">{l}</a></li>)}</ul>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row">
        <p>© 2026 BuildUpTech. All rights reserved.</p>
        <button onClick={() => scrollToId("home")} className="tracking-widest hover:text-accent">BACK TO TOP ↑</button>
      </div>
    </footer>
  );
}
