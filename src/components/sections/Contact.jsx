
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";
import { services } from "../../data/services.js";

const empty = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const field =
  "w-full border-b border-white/15 bg-black py-4 text-white outline-none transition-colors placeholder:text-muted focus:border-accent";

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => {
    setValues((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const validate = () => {
    const e = {};

    if (!values.name.trim()) {
      e.name = "Enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      e.email = "Enter a valid email address.";
    }

    if (!values.service) {
      e.service = "Choose a service.";
    }

    if (values.message.trim().length < 10) {
      e.message = "Tell us a little more (10+ characters).";
    }

    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const whatsappNumber = "923321360570";

    const message = `
NEW PROJECT INQUIRY - BUILTUP TECH

Name: ${values.name}
Email: ${values.email}
Company: ${values.company.trim() || "Not provided"}
Service: ${values.service}

Project Details:
${values.message}

--------------------------
Sent via BuiltUp Tech Website
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const Err = ({ k }) =>
    errors[k] ? (
      <p
        id={`${k}-err`}
        role="alert"
        className="mt-1 text-xs text-accent"
      >
        {errors[k]}
      </p>
    ) : null;

  return (
    <section id="contact" className="px-5 py-28 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        <SectionHeading
          label="Contact"
          lines={["Let's create", "something great."]}
        />

        <form
          onSubmit={onSubmit}
          noValidate
          className="space-y-4"
        >
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>

            <input
              id="name"
              name="name"
              className={field}
              placeholder="Name"
              value={values.name}
              onChange={set("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-err" : undefined}
            />

            <Err k="name" />
          </div>

          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              className={field}
              placeholder="Email"
              value={values.email}
              onChange={set("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-err" : undefined}
            />

            <Err k="email" />
          </div>

          <div>
            <label className="sr-only" htmlFor="company">
              Company
            </label>

            <input
              id="company"
              name="company"
              className={field}
              placeholder="Company (optional)"
              value={values.company}
              onChange={set("company")}
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="service">
              Service
            </label>

            <select
              id="service"
              name="service"
              className={`${field} bg-ink`}
              value={values.service}
              onChange={set("service")}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? "service-err" : undefined}
            >
              <option value="">Service</option>

              {services.map((s) => (
                <option key={s.number} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>

            <Err k="service" />
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              className={field}
              placeholder="Tell us about your project..."
              value={values.message}
              onChange={set("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-err" : undefined}
            />

            <Err k="message" />
          </div>

          <Button type="submit" className="mt-4">
            SEND INQUIRY →
          </Button>
        </form>

      </div>
    </section>
  );
}
