import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const points = [
  "Custom plans based on your business goals and advertising needs",
  "Ad spend is paid separately from our management / service fee",
  "Clear scope agreed together before anything starts",
  "No long-term commitment required to discuss a plan",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Pricing</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Simple, Custom Pricing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every business is different, so we build a plan around yours.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-xl shadow-navy/5 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
              <ul className="space-y-4">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-navy sm:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-light text-gold-dark">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-navy p-6 text-center">
                <p className="text-lg font-bold text-card">Custom Plan</p>
                <p className="mt-2 text-sm text-card/70">Contact us for a plan tailored to your business.</p>
                <a
                  href="#plan"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-gold/90"
                >
                  Get My Custom Plan <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
