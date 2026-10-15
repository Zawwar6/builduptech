import { useState } from "react";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";
import { services } from "../../data/services.js";
const empty = { name: "", email: "", company: "", service: "", message: "" };
const field = "w-full border-b border-white/15 bg-black py-4 text-white outline-none transition-colors placeholder:text-muted focus:border-accent";
// Swap this for a real API call (fetch/axios) when a backend is available.
const submitInquiry = async (data) => new Promise((r) => setTimeout(() => r(data), 600));
export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setValues({ ...values, [k]: e.target.value });
  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = "Enter a valid email address.";
    if (!values.service) e.service = "Choose a service.";
    if (values.message.trim().length < 10) e.message = "Tell us a little more (10+ characters).";
    return e;
  };
  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    await submitInquiry(values);
    setStatus("sent");
    setValues(empty);
  };
  const Err = ({ k }) => (errors[k] ? <p id={`${k}-err`} role="alert" className="mt-1 text-xs text-accent">{errors[k]}</p> : null);
  return (
    <section id="contact" className="px-5 py-28 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <SectionHeading label="Contact" lines={["Let's create", "something great."]} />
        {status === "sent" ? (
          <div role="status" className="self-center rounded-2xl border border-white/10 bg-card p-10">
            <h3 className="text-3xl font-bold tracking-tighter">Inquiry sent.</h3>
            <p className="mt-3 text-muted">Thanks for reaching out. We'll reply to your email soon.</p>
            <Button variant="ghost" className="mt-8" onClick={() => setStatus("idle")}>Send another</Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div><label className="sr-only" htmlFor="name">Name</label><input id="name" className={field} placeholder="Name" value={values.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby="name-err" /><Err k="name" /></div>
            <div><label className="sr-only" htmlFor="email">Email</label><input id="email" type="email" className={field} placeholder="Email" value={values.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby="email-err" /><Err k="email" /></div>
            <div><label className="sr-only" htmlFor="company">Company</label><input id="company" className={field} placeholder="Company (optional)" value={values.company} onChange={set("company")} /></div>
            <div><label className="sr-only" htmlFor="service">Service</label>
              <select id="service" className={`${field} bg-ink`} value={values.service} onChange={set("service")} aria-invalid={!!errors.service} aria-describedby="service-err">
                <option value="">Service</option>{services.map((s) => <option key={s.number} value={s.title}>{s.title}</option>)}
              </select><Err k="service" /></div>
            <div><label className="sr-only" htmlFor="message">Message</label><textarea id="message" rows={4} className={field} placeholder="Message" value={values.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby="message-err" /><Err k="message" /></div>
            <Button type="submit" disabled={status === "sending"} className="mt-4">{status === "sending" ? "SENDING…" : "SEND INQUIRY →"}</Button>
          </form>
        )}
      </div>
    </section>
  );
}
