import { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      )}
      style={{
        borderBottom: scrolled ? "1px solid var(--color-navbar-border)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-navy"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-primary-foreground shadow-sm">
            <TrendingUp className="h-5 w-5" />
          </span>
          <span>Kuwait Ads Hub</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
          >
            Log In
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-gold-dark hover:shadow-md"
          >
            Free Discussion & Plan
          </a>
        </div>

        {/* Mobile toggle + CTA */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-gold-dark"
          >
            Free Plan
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-navy transition-colors hover:bg-muted"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-border bg-card transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 border-t border-border pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-navy"
            >
              Log In
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
