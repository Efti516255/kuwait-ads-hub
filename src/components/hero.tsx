import { ArrowRight, MessageCircle } from "lucide-react";
import logoFull from "@/assets/logo-full.png.asset.json";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pb-20 pt-36 lg:pb-28 lg:pt-44"
    >
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-cream/50 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Content */}
          <div className="max-w-3xl">
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
