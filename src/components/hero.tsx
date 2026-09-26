import { ArrowRight, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, MapPin } from "lucide-react";

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px] lg:w-[310px]">
      <div className="absolute -inset-10 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[2.6rem] border border-navy/10 bg-navy p-2.5 shadow-[0_40px_80px_-30px_oklch(0.18_0.05_260/0.55)]">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-card">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy" />
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pb-2 pt-3 text-[10px] font-semibold text-navy">
            <span>9:41</span>
            <span className="h-2 w-5 rounded-sm border border-navy/60" />
          </div>
          {/* Post header */}
          <div className="flex items-center gap-2.5 px-3.5 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-[11px] font-bold text-navy">
              DQ
            </div>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="text-[12px] font-semibold text-navy">Dar Al Qahwa</p>
              <p className="text-[10px] text-muted-foreground">Sponsored</p>
            </div>
            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
          </div>
          {/* Creative */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/30 blur-2xl" />
            <svg viewBox="0 0 300 120" className="absolute bottom-0 left-0 w-full text-gold/25" aria-hidden="true">
              <path fill="currentColor" d="M0 120V95h20v-8h12v8h18V80h10v15h25V70h6V40a6 6 0 1 1 0-1V70h8v25h20V88h14v7h22V60l4-30 4 30v35h18V85h16v10h20V78h12v17h22V90h12v30Z" />
              <circle cx="146" cy="36" r="7" className="fill-gold/40" />
              <circle cx="178" cy="52" r="5" className="fill-gold/40" />
            </svg>
            <div className="relative flex h-full flex-col justify-center px-6 text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Salmiya · Now open</p>
              <p className="mt-2 text-xl font-extrabold leading-tight text-card sm:text-2xl">
                Specialty coffee,<br />Kuwaiti hospitality.
              </p>
              <p className="mt-2 text-[11px] text-card/70" dir="rtl">قهوة مختصة بضيافة كويتية</p>
            </div>
          </div>
          {/* CTA strip */}
          <div className="flex items-center justify-between border-b border-border bg-section px-3.5 py-2.5">
            <div className="flex items-center gap-1 text-[11px] text-navy">
              <MapPin className="h-3 w-3 text-gold-dark" /> Visit us today
            </div>
            <span className="rounded-md bg-navy px-3 py-1 text-[11px] font-semibold text-card">Learn more</span>
          </div>
          {/* Actions */}
          <div className="flex items-center gap-3.5 px-3.5 py-2.5 text-navy">
            <Heart className="h-4 w-4" />
            <MessageCircle className="h-4 w-4" />
            <Send className="h-4 w-4" />
            <Bookmark className="ml-auto h-4 w-4" />
          </div>
          <div className="space-y-1.5 px-3.5 pb-5">
            <div className="h-2 w-3/4 rounded-full bg-muted" />
            <div className="h-2 w-1/2 rounded-full bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pb-16 pt-28 lg:pb-24 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--gold-light),transparent_60%)]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cream/60 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/70 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] sm:text-xs sm:tracking-[0.14em] text-gold-dark opacity-0 animate-fade-in-up">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Meta Ads Agency for Kuwait Businesses
          </p>

          <h1 className="mt-6 text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-navy opacity-0 animate-fade-in-up animation-delay-100 sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Helping Kuwait Businesses Get{" "}
            <span className="bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
              More Customers
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-in-up animation-delay-200 lg:mx-0 lg:text-xl">
            Through Facebook &amp; Instagram Ads built for the Kuwait market.
          </p>

          <div className="mt-9 flex flex-col gap-3 opacity-0 animate-fade-in-up animation-delay-300 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#plan"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-navy px-7 py-3.5 text-base font-semibold text-card shadow-lg shadow-navy/20 transition hover:bg-navy-light"
            >
              Get Your Free Growth Plan
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#targeting"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-navy/15 bg-card px-7 py-3.5 text-base font-semibold text-navy transition hover:border-gold hover:text-gold-dark"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-muted-foreground opacity-0 animate-fade-in-up animation-delay-400 lg:justify-start">
            <span>Kuwait Local Market</span>
            <span className="text-gold">•</span>
            <span>Meta Ads</span>
            <span className="text-gold">•</span>
            <span>Arabic &amp; English Campaigns</span>
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-500">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
