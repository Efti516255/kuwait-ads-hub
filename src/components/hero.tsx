import { ArrowRight, MessageCircle, TrendingUp, Users, MousePointerClick, Eye } from "lucide-react";

function AdPerformanceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Decorative blurred blobs */}
      <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-gold/20 blur-3xl animate-pulse-soft" />
      <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-cream/60 blur-3xl animate-pulse-soft animation-delay-300" />

      {/* Main dashboard card */}
      <div className="relative rounded-2xl border border-border bg-card p-5 shadow-xl shadow-navy/5 animate-float">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground">Ad Campaign Performance</p>
            <p className="text-lg font-bold text-navy">+124% leads this month</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-gold-light px-2 py-1 text-xs font-semibold text-gold-dark">
            <TrendingUp className="h-3 w-3" />
            Live
          </span>
        </div>

        {/* Mini chart */}
        <div className="mb-4 flex items-end gap-2 rounded-xl bg-muted/50 p-4">
          {[35, 48, 42, 60, 55, 78, 85, 72, 90, 105, 98, 120].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gold transition-all duration-700"
              style={{ height: `${(h / 120) * 100}%`, opacity: 0.7 + (i % 3) * 0.1 }}
            />
          ))}
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-card p-3 shadow-sm">
            <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Eye className="h-3.5 w-3.5 text-gold" />
              Impressions
            </div>
            <p className="text-lg font-bold text-navy">48.2K</p>
            <p className="text-xs font-medium text-gold-dark">+18%</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-3 shadow-sm">
            <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MousePointerClick className="h-3.5 w-3.5 text-gold" />
              Clicks
            </div>
            <p className="text-lg font-bold text-navy">3,840</p>
            <p className="text-xs font-medium text-gold-dark">+24%</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-3 shadow-sm">
            <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="h-3.5 w-3.5 text-gold" />
              Leads
            </div>
            <p className="text-lg font-bold text-navy">312</p>
            <p className="text-xs font-medium text-gold-dark">+41%</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-3 shadow-sm">
            <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5 text-gold" />
              ROI
            </div>
            <p className="text-lg font-bold text-navy">4.8x</p>
            <p className="text-xs font-medium text-gold-dark">+12%</p>
          </div>
        </div>
      </div>

      {/* Floating phone card */}
      <div className="absolute -bottom-6 -left-6 hidden w-44 rounded-2xl border border-border bg-card p-4 shadow-xl shadow-navy/5 sm:block animate-float animation-delay-200">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gold-light" />
          <div>
            <p className="text-xs font-semibold text-navy">New lead</p>
            <p className="text-[10px] text-muted-foreground">Just now</p>
          </div>
        </div>
        <p className="text-[10px] leading-relaxed text-muted-foreground">
          “I found your restaurant through the Instagram ad. Can I book a table for 8?”
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pb-20 pt-32 lg:pb-28 lg:pt-40"
    >
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-cream/50 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="max-w-2xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold-light px-4 py-1.5 text-xs font-semibold text-gold-dark opacity-0 animate-fade-in-up"
            >
              <span className="h-2 w-2 rounded-full bg-gold" />
              Meta Ads Agency for Kuwait Businesses
            </div>

            <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Helping Kuwait&apos;s Local Businesses Get More Customers Through{" "}
              <span className="text-[#1877F2]">Facebook</span> &{" "}
              <span className="text-brand-red">Instagram</span> Ads
            </h1>


            <p className="opacity-0 animate-fade-in-up animation-delay-200 mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Done-for-you Meta Ads management for restaurants, gyms, salons, and cafes across
              Kuwait.
            </p>

            <div className="opacity-0 animate-fade-in-up animation-delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-md shadow-gold/20 transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
              >
                Free Discussion & Plan
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://wa.me/96500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold bg-white px-7 py-3.5 text-base font-semibold text-gold-dark transition-all hover:bg-gold-light"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust row */}
            <div className="opacity-0 animate-fade-in-up animation-delay-400 mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-semibold text-muted-foreground shadow-sm"
                    style={{ backgroundColor: `oklch(${0.85 + i * 0.02} 0.03 ${260 + i * 10})` }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Trusted by local businesses across Kuwait
              </p>
            </div>
          </div>

          {/* Right mockup */}
          <div className="opacity-0 animate-fade-in-up animation-delay-300 relative flex items-center justify-center">
            <AdPerformanceMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
