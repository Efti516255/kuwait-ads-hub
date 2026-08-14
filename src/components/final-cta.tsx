import { useReveal } from "@/hooks/use-reveal";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "96597735701";

export function FinalCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const scrollToPlan = () => {
    const el = document.getElementById("plan");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Kuwait Ads Hub, I'm interested in a free discussion and plan for my business."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-red to-[#A5182F] py-20 lg:py-28">
      {/* Decorative glow shapes */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl px-4 text-center transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] sm:px-6 lg:px-8 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Grow? Let's Talk.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          Get a free discussion and a tailored plan for your business — no pressure, no commitment.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={scrollToPlan}
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-brand-red shadow-lg transition-all hover:bg-white/90 hover:shadow-xl sm:w-auto"
          >
            Free Discussion & Plan
          </button>
          <button
            type="button"
            onClick={openWhatsApp}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
