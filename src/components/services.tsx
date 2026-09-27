import { Megaphone, MapPin, Palette, Settings2, MessageCircle } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const services = [
  { icon: Megaphone, title: "Facebook & Instagram Ads Management", text: "We plan, launch and manage your Meta ad campaigns so you can focus on running your business." },
  { icon: MapPin, title: "Audience & Location Targeting", text: "Reach the right people by age, interests and area — from Salmiya to Jahra — without wasting budget." },
  { icon: Palette, title: "Ad Creative Strategy & Testing", text: "We shape ad messages and visuals, then test different versions to learn what works for your audience." },
  { icon: Settings2, title: "Campaign Setup & Optimization", text: "Correct account, pixel and campaign setup, followed by ongoing adjustments based on real performance." },
  { icon: MessageCircle, title: "Lead Generation & WhatsApp Inquiry Campaigns", text: "Campaigns designed to bring customer messages and enquiries straight to your WhatsApp." },
];

export function Services() {
  return (
    <section id="services" className="bg-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">Our Services</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              What We Do For Your Business
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Done-for-you Facebook & Instagram advertising for local businesses in Kuwait.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
