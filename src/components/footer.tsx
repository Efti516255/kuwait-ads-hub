import { TrendingUp, Facebook, Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "96597735701";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy py-16 text-white lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-5">
            <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-primary-foreground shadow-sm">
                <TrendingUp className="h-5 w-5" />
              </span>
              <span>Kuwait Ads Hub</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Helping Kuwait's local businesses grow through Facebook & Instagram Ads
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1877F2] hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-red hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-green-500 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  +965 9773 5701
                </a>
              </li>
              <li>
                <a
                  href="mailto:kuwaitadshub@gmail.com"
                  className="transition-colors hover:text-gold"
                >
                  kuwaitadshub@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/60 sm:flex-row">
          <p>© 2026 Kuwait Ads Hub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
