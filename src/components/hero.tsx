import { ArrowRight, MessageCircle } from "lucide-react";
import clientPhoto from "@/assets/client-woman.jpg.asset.json";

function MetaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.6 5C3.9 5 2 7.7 2 11.4c0 3.4 1.6 5.6 4 5.6 1.7 0 2.9-1 4.4-3.5l1-1.7c.3-.5.6-1 .8-1.4.3.5.6 1 .9 1.5l1.4 2.4C15.9 16.1 17.1 17 18.7 17c2.3 0 3.6-2.2 3.6-5.7C22.3 7.4 20.3 5 17.6 5c-1.5 0-2.7.8-4 2.5-.9-1.2-1.7-1.9-2.4-2.2-.8-.4-1.7-.3-2.6-.3H6.6Zm.4 2c.9 0 1.6.4 2.5 1.7-.6.9-1.3 2-2.1 3.4l-.8 1.4C5.7 14.7 5.2 15 4.6 15c-.9 0-1.5-1.2-1.5-3.3C3.1 9 4.6 7 7 7Zm10.4 0c2.1 0 3.3 1.9 3.3 4.5 0 2.2-.5 3.5-1.5 3.5-.7 0-1.2-.4-2-1.7l-1.4-2.4c-.4-.7-.8-1.3-1.1-1.9C15.9 7.6 16.6 7 17.4 7Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M15.4 15.5l.5-3.5h-3.3V9.7c0-.95.47-1.88 1.97-1.88H16V4.85s-1.33-.23-2.6-.23c-2.65 0-4.38 1.6-4.38 4.5V12H5.98v3.5H9V24a12.1 12.1 0 003.6 0v-8.5h2.8Z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ig-grad" cx="0.3" cy="1.05" r="1.25">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="25%" stopColor="#FF9A3C" />
          <stop offset="50%" stopColor="#FF543E" />
          <stop offset="75%" stopColor="#D62976" />
          <stop offset="100%" stopColor="#962FBF" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="24" height="24" rx="7" fill="url(#ig-grad)" />
      <g fill="none" stroke="#fff" strokeWidth="1.9">
        <rect x="5" y="5" width="14" height="14" rx="4.4" />
        <circle cx="12" cy="12" r="3.4" />
      </g>
      <circle cx="16.7" cy="7.3" r="1.05" fill="#fff" />
    </svg>
  );
}

function FloatingBadge({
  className,
  delay,
  children,
  label,
}: {
  className?: string;
  delay: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div
      aria-label={label}
      className={`pointer-events-none absolute hidden animate-float items-center justify-center overflow-hidden rounded-full border border-border bg-card shadow-md sm:flex ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pb-20 pt-28 lg:pb-28 lg:pt-36"
    >
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-cream/50 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Content */}
          <div className="relative max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold-light px-4 py-1.5 text-xs font-semibold text-gold-dark opacity-0 animate-fade-in-up">
              <span className="h-2 w-2 rounded-full bg-gold" />
              Meta Ads Agency for Kuwait Businesses
            </div>

            <div className="relative">
            {/* Floating platform badges hugging the headline */}
            <FloatingBadge
              label="Meta"
              delay="0s"
              className="-left-4 top-0 h-11 w-11 lg:-left-14 lg:h-14 lg:w-14"
            >
              <MetaIcon className="h-6 w-6 text-[#0668E1] lg:h-7 lg:w-7" />
            </FloatingBadge>
            <FloatingBadge
              label="Happy client"
              delay="1.4s"
              className="-right-4 top-0 h-11 w-11 lg:-right-14 lg:h-14 lg:w-14"
            >
              <img
                src={clientPhoto.url}
                alt="Happy client"
                loading="lazy"
                width={512}
                height={512}
                className="h-full w-full object-cover"
              />
            </FloatingBadge>
            <FloatingBadge
              label="Facebook"
              delay="0.7s"
              className="-left-4 bottom-0 h-11 w-11 lg:-left-16 lg:h-14 lg:w-14"
            >
              <FacebookIcon className="h-full w-full" />
            </FloatingBadge>
            <FloatingBadge
              label="Instagram"
              delay="2.1s"
              className="-right-4 bottom-0 h-11 w-11 lg:-right-16 lg:h-14 lg:w-14"
            >
              <InstagramIcon className="h-full w-full" />
            </FloatingBadge>

            <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Helping Kuwait&apos;s Local Businesses Get More{" "}
              <span className="relative inline-block">
                Customers
                <svg
                  viewBox="0 0 300 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-4 -inset-y-3 h-[calc(100%+1.5rem)] w-[calc(100%+2rem)] overflow-visible text-brand-red"
                >
                  <path
                    d="M154 8C104 4 44 12 20 32 2 47 6 70 32 82c30 14 96 16 150 10 42-5 84-16 96-33 9-13 1-27-24-36C231 13 196 8 154 8c-8 0-16 .3-24 .9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>{" "}
              Through{" "}
              <span className="relative inline-block">
                <span className="text-[#1877F2]">Facebook</span> &{" "}
                <span className="text-brand-red">Instagram</span>
                <svg
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-2 w-full overflow-visible text-brand-red/70"
                >
                  <path
                    d="M2 8C60 3 120 2 180 4c40 1 80 3 118 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>{" "}
              Ads
            </h1>
            </div>


            <p className="opacity-0 animate-fade-in-up animation-delay-200 mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Done-for-you Meta Ads management for restaurants, gyms, salons, and cafes across
              Kuwait.
            </p>

            <div className="opacity-0 animate-fade-in-up animation-delay-300 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-md shadow-gold/20 transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25 sm:w-auto"
              >
                Free Discussion & Plan
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://wa.me/96597735701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-gold bg-white px-7 py-3.5 text-base font-semibold text-gold-dark transition-all hover:bg-gold-light sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust row */}
            <div className="opacity-0 animate-fade-in-up animation-delay-400 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
        </div>
      </div>
    </section>
  );
}
