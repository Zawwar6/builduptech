import Button from "../ui/Button.jsx";
import MagneticButton from "../animations/MagneticButton.jsx";
import { scrollToId } from "../../lib/utils.js";
export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-36 text-center sm:px-8">
      <div className="grid-bg grid-move absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[140px]" aria-hidden="true" />
      <div className="relative">
        <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-8xl">Have an idea?<br />Let's build it.</h2>
        <p className="mx-auto mt-8 max-w-md text-lg text-muted">Tell us what you're working on and let's turn the idea into something real.</p>
        <div className="h-btn mt-10">
                  <Button
                    onClick={() =>
                      window.open("https://wa.me/923321360570?text=Hi%2C%20I%20want%20to%20start%20a%20project%20with%20BuiltUp%20Tech.", "_blank")
                    }
                  >
                    Start a Project →
                  </Button>
                </div>
      </div>
    </section>
  );
}
