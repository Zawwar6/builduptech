export const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: reduce() ? "auto" : "smooth" });
};
