import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const faqs = [
  {
    q: "How long until I see results?",
    a: "Most businesses start seeing initial engagement within the first 1-2 weeks, with more meaningful results (leads, bookings, sales) building over the first month as we optimize the campaign based on real data.",
  },
  {
    q: "Who pays for the ad budget?",
    a: "You pay Meta (Facebook/Instagram) directly through your own ad account for the ad spend. Our fee is separate and covers strategy, setup, creative, and ongoing management — this keeps everything transparent and fully in your control.",
  },
  {
    q: "Do I need my own Facebook/Instagram ad account?",
    a: "Yes — we manage campaigns through your business's own ad account. This means you always retain full ownership and access to your data, audiences, and ad history.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "No long-term contracts required. We recommend at least a 4-week initial period to gather enough data to optimize properly, but you're never locked in beyond that.",
  },
  {
    q: "Why don't you show fixed pricing?",
    a: "Every business has different goals, budget, and competition levels. We study your specific situation first in a free discussion, then recommend a plan that actually makes sense — instead of a one-size-fits-all package that may not fit your business.",
  },
  {
    q: "What information do you need to get started?",
    a: "Just fill out the campaign plan form above or message us on WhatsApp — we'll ask a few quick questions about your business, then set up a free discussion to map out your strategy.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-section py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Everything you need to know before getting started
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="rounded-2xl border border-border bg-card shadow-sm shadow-navy/5">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="text-sm font-semibold text-navy sm:text-base">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-red transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
