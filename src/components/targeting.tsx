import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Heart,
  Users,
  Repeat,
  User,
  UsersRound,
  ChevronDown,
  Check,
} from "lucide-react";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

const interests = ["Fitness", "Healthy Eating", "Restaurants", "Online Shopping"];

const features = [
  {
    icon: MapPin,
    title: "Precise Location Targeting",
    body: "Show your ads only to people in the neighborhoods, cities, or radius around your business where your real customers are.",
  },
  {
    icon: Heart,
    title: "Interest-Based Targeting",
    body: "Reach people who already show interest in things related to your business — food delivery, fitness, beauty, shopping, and more.",
  },
  {
    icon: Users,
    title: "Age & Gender Targeting",
    body: "Make sure your ad budget is spent on the age group and gender most likely to become your customers.",
  },
  {
    icon: Repeat,
    title: "Lookalike & Retargeting Audiences",
    body: "Reach new people who resemble your best existing customers, and bring back people who showed interest but didn't convert yet.",
  },
];

function TargetingPanel() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-xl shadow-navy/5 sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Ads Manager
          </p>
          <p className="text-base font-bold text-navy">Audience</p>
        </div>
        <span className="rounded-md bg-brand-red-light px-2 py-1 text-[10px] font-semibold text-brand-red">
          Editing
        </span>
      </div>

      {/* Location */}
      <div className="mb-5">
        <p className="mb-2 text-xs font-semibold text-navy">Locations</p>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 p-3">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-brand-red/30 bg-brand-red/5" />
            <span className="absolute inset-2 rounded-full border border-brand-red/40 bg-brand-red/10" />
            <MapPin className="relative h-4 w-4 text-brand-red" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-navy">
              Kuwait City · Hawalli · Salmiya
            </p>
            <p className="text-[10px] text-muted-foreground">+10 km radius · People living here</p>
          </div>
        </div>
      </div>

      {/* Age slider */}
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold text-navy">Age</p>
          <p className="text-xs font-semibold text-brand-red">25 – 45</p>
        </div>
        <div className="relative h-1.5 w-full rounded-full bg-muted">
          <div className="absolute left-[20%] right-[30%] top-0 h-1.5 rounded-full bg-brand-red" />
          <span className="absolute left-[20%] top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-red bg-card shadow-sm" />
          <span className="absolute left-[70%] top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-red bg-card shadow-sm" />
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] text-muted-foreground">
          <span>18</span>
          <span>65+</span>
        </div>
      </div>

      {/* Gender */}
      <div className="mb-5">
        <p className="mb-2 text-xs font-semibold text-navy">Gender</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "All", icon: UsersRound, active: true },
            { label: "Male", icon: User, active: false },
            { label: "Female", icon: User, active: false },
          ].map((g) => (
            <div
              key={g.label}
              className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-[11px] font-medium ${
                g.active
                  ? "border-brand-red bg-brand-red-light text-brand-red"
                  : "border-border bg-card text-muted-foreground"
              }`}
            >
              <g.icon className="h-3.5 w-3.5" />
              {g.label}
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold text-navy">Detailed targeting</p>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <div className="flex flex-wrap gap-1.5 rounded-xl border border-border bg-muted/40 p-3">
          {interests.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full border border-brand-red/20 bg-brand-red-light px-2.5 py-1 text-[11px] font-medium text-brand-red"
            >
              <Check className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Audience size */}
      <div className="rounded-xl border border-border bg-muted/40 p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] font-medium text-muted-foreground">Estimated audience size</p>
          <p className="text-[11px] font-bold text-navy">45,000 – 60,000</p>
        </div>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-gradient-to-r from-muted via-muted to-muted">
          <div className="absolute left-[28%] right-[42%] top-0 h-2 rounded-full bg-brand-red" />
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] text-muted-foreground">
          <span>Specific</span>
          <span>Broad</span>
        </div>
      </div>
    </div>
  );
}

export function Targeting() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="targeting" className="bg-section py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            We Don&apos;t Just Run Ads — We Find Your Exact Customer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every ad is targeted with precision, so your budget only reaches people who are actually
            likely to buy.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <TargetingPanel />

          <div className="space-y-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`flex gap-4 transition-all duration-700 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${150 + i * 120}ms` }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red-light">
                  <f.icon className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-base font-medium text-navy-light">
          You focus on your business. We handle finding the right people to bring through your door.
        </p>
      </div>
    </section>
  );
}
