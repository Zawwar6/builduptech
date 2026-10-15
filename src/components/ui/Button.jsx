import { motion } from "framer-motion";
export default function Button({ children, href, onClick, variant = "primary", className = "", ...rest }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-wide transition-colors w-full sm:w-auto";
  const styles = variant === "primary" ? "bg-accent text-white hover:bg-white hover:text-ink" : "border border-white/10 text-white hover:border-white/50";
  const Tag = href ? motion.a : motion.button;
  return <Tag href={href} onClick={onClick} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={`${base} ${styles} ${className}`} {...rest}>{children}</Tag>;
}
