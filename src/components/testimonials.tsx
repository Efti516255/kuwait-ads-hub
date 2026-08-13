import { Reveal } from "@/hooks/use-reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  tint: string;
};

const row1: Testimonial[] = [
  {
    quote:
      "We used to rely only on walk-ins. Within a month of running ads with them, our weekend bookings were full and we had to add extra tables.",
    name: "Mohammed Al-Sabah",
    role: "Owner, Bait Al Mandi Restaurant",
    initials: "MA",
    tint: "oklch(0.9 0.06 85)",
  },
  {
    quote:
      "They actually took the time to understand how a gym works in Kuwait. The leads we get now are people ready to sign up, not random clicks.",
    name: "Yousef Al-Ajmi",
    role: "Manager, Iron House Gym",
    initials: "YA",
    tint: "oklch(0.9 0.05 20)",
  },
  {
    quote:
      "Communication is so easy — a quick WhatsApp message and they reply. I never feel like I'm chasing an agency for updates.",
    name: "Fatima Al-Rashid",
    role: "Owner, Lumière Beauty Salon",
    initials: "FA",
    tint: "oklch(0.9 0.05 320)",
  },
  {
    quote:
      "Our cost per booking dropped by more than half after they rebuilt the targeting. Same budget, far better results.",
    name: "Noura Al-Fahad",
    role: "Owner, Kefi Café",
    initials: "NA",
    tint: "oklch(0.9 0.05 200)",
  },
];

const row2: Testimonial[] = [
  {
    quote:
      "I didn't understand anything about Meta Ads before. They explained everything in simple words and showed me exactly where my money goes.",
    name: "Abdullah Al-Mutairi",
    role: "Owner, Salmiya Home Store",
    initials: "AA",
    tint: "oklch(0.9 0.05 140)",
  },
  {
    quote:
      "Our online orders went up steadily every week. What I like most is that they test things instead of guessing.",
    name: "Sara Al-Qahtani",
    role: "Manager, Layali Sweets",
    initials: "SQ",
    tint: "oklch(0.9 0.06 60)",
  },
  {
    quote:
      "Honestly the best part is how responsive they are. They treat the shop like it's their own business.",
    name: "Hessa Al-Enezi",
    role: "Owner, Bloom Boutique",
    initials: "HE",
    tint: "oklch(0.9 0.05 350)",
  },
  {
    quote:
      "New members kept coming in and mentioning the Instagram ad. For a small studio in Hawalli, that changed everything for us.",
    name: "Khaled Al-Otaibi",
    role: "Owner, Pulse Fitness Studio",
    initials: "KO",
    tint: "oklch(0.9 0.05 250)",
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="w-[320px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm shadow-navy/5">
      <blockquote className="text-sm leading-relaxed text-muted-foreground">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-navy"
          style={{ backgroundColor: t.tint }}
          aria-hidden="true"
        >
          {t.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-navy">{t.name}</span>
          <span className="block text-xs text-muted-foreground">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 55,
}: {
  items: Testimonial[];
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max gap-6 py-3 group-hover:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium text-muted-foreground">
            Example testimonials — real client reviews coming soon
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Real feedback from business owners we&apos;ve worked with across Kuwait
          </p>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-12 space-y-2">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse duration={62} />
      </Reveal>
    </section>
  );
}
