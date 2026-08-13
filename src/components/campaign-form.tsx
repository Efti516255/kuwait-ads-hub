import { useCallback, useEffect, useRef, useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";

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
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

const MIN_AGE = 18;
const MAX_AGE = 65;

function AgeSlider({
  value,
  onChange,
}: {
  value: [number, number];
  onChange: (v: [number, number]) => void;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef<null | 0 | 1>(null);

  const pct = (n: number) => ((n - MIN_AGE) / (MAX_AGE - MIN_AGE)) * 100;

  const valueFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return MIN_AGE;
    const rect = el.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return Math.round(MIN_AGE + ratio * (MAX_AGE - MIN_AGE));
  }, []);

  useEffect(() => {
    const move = (clientX: number) => {
      if (dragging.current === null) return;
      const next = valueFromClientX(clientX);
      if (dragging.current === 0) {
        onChange([Math.min(next, value[1] - 1), value[1]]);
      } else {
        onChange([value[0], Math.max(next, value[0] + 1)]);
      }
    };
    const onMouseMove = (e: MouseEvent) => move(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (dragging.current !== null) e.preventDefault();
      const t = e.touches[0];
      if (t) move(t.clientX);
    };
    const onUp = () => {
      dragging.current = null;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [onChange, value, valueFromClientX]);

  const startDrag = (handle: 0 | 1) => () => {
    dragging.current = handle;
  };

  const onKeyDown = (handle: 0 | 1) => (e: React.KeyboardEvent) => {
    const delta = e.key === "ArrowLeft" ? -1 : e.key === "ArrowRight" ? 1 : 0;
    if (!delta) return;
    e.preventDefault();
    if (handle === 0) {
      onChange([Math.min(Math.max(MIN_AGE, value[0] + delta), value[1] - 1), value[1]]);
    } else {
      onChange([value[0], Math.max(Math.min(MAX_AGE, value[1] + delta), value[0] + 1)]);
    }
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">Age range</span>
        <span className="text-sm font-bold text-brand-red">
          {value[0]} – {value[1] === MAX_AGE ? "65+" : value[1]}
        </span>
      </div>
      <div
        ref={trackRef}
        className="relative h-10 w-full touch-none select-none"
        onMouseDown={(e) => {
          const next = valueFromClientX(e.clientX);
          const closest =
            Math.abs(next - value[0]) <= Math.abs(next - value[1]) ? (0 as const) : (1 as const);
          dragging.current = closest;
          if (closest === 0) onChange([Math.min(next, value[1] - 1), value[1]]);
          else onChange([value[0], Math.max(next, value[0] + 1)]);
        }}
      >
        <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-muted" />
        <div
          className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-brand-red"
          style={{ left: `${pct(value[0])}%`, right: `${100 - pct(value[1])}%` }}
        />
        {([0, 1] as const).map((h) => (
          <button
            key={h}
            type="button"
            role="slider"
            aria-label={h === 0 ? "Minimum age" : "Maximum age"}
            aria-valuemin={MIN_AGE}
            aria-valuemax={MAX_AGE}
            aria-valuenow={value[h]}
            onMouseDown={startDrag(h)}
            onTouchStart={startDrag(h)}
            onKeyDown={onKeyDown(h)}
            className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-brand-red bg-card shadow-md outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-brand-red active:cursor-grabbing"
            style={{ left: `${pct(value[h])}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>18</span>
        <span>65+</span>
      </div>
    </div>
  );
}

function Pills({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  ariaLabel: string;
}) {
  return (
    <div role="group" aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={active}
            className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
              active
                ? "border-brand-red bg-brand-red text-white"
                : "border-border bg-card text-navy-light hover:border-brand-red/40 hover:bg-brand-red-light"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-muted-foreground">
      {children}
    </label>
  );
}

const inputBase =
  "w-full rounded-xl border bg-card px-4 py-3 text-sm text-navy placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-navy">{children}</h3>
  );
}

export function CampaignForm() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const [age, setAge] = useState<[number, number]>([18, 65]);
  const [gender, setGender] = useState("All");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<{ businessName?: string; whatsapp?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = "96597735701";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!businessName.trim()) next.businessName = "Please enter your business name";
    if (!whatsapp.trim()) next.whatsapp = "Please enter your WhatsApp number";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const ageLabel = `${age[0]} – ${age[1] === MAX_AGE ? "65+" : age[1]}`;

    const message = [
      "New Campaign Plan Request — Kuwait Ads Hub",
      "",
      `Business Name: ${businessName.trim()}`,
      `Business Type: ${businessType || "Not specified"}`,
      `WhatsApp: ${whatsapp.trim()}`,
      "",
      "Target Audience:",
      `- Age: ${ageLabel}`,
      `- Gender: ${gender}`,
      `- Location: ${location.trim() || "Not specified"}`,
      `- Interests: ${interests.trim() || "Not specified"}`,
      "",
      `Campaign Duration: ${duration || "Not specified"}`,
      `Monthly Budget: ${budget || "Not specified"}`,
      "",
      `Additional Notes: ${notes.trim() || "None"}`,
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="plan" className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-4 transition-all duration-500 ease-out sm:px-6 lg:px-8 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Build Your Campaign Plan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Answer a few quick questions and we&apos;ll prepare a tailored plan for your business —
            no commitment, no pressure.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-xl shadow-navy/5 sm:p-9">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red-light">
                <CheckCircle2 className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">Thanks!</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                We&apos;ve received your plan details. We&apos;ll reach out on WhatsApp within 24
                hours to discuss your custom strategy.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              {/* Audience */}
              <div>
                <SectionTitle>Who do you want to reach?</SectionTitle>
                <div className="space-y-6">
                  <AgeSlider value={age} onChange={setAge} />

                  <div>
                    <Label>Gender</Label>
                    <Pills
                      ariaLabel="Gender"
                      options={["All", "Male", "Female"]}
                      value={gender}
                      onChange={setGender}
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      maxLength={120}
                      placeholder="e.g. Kuwait City, Hawalli, Salmiya"
                      className={`${inputBase} border-border`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="interests">Interests / audience description</Label>
                    <textarea
                      id="interests"
                      value={interests}
                      onChange={(e) => setInterests(e.target.value)}
                      maxLength={500}
                      rows={3}
                      placeholder="e.g. people interested in fitness, healthy food, restaurants near me"
                      className={`${inputBase} resize-none border-border`}
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Duration */}
              <div>
                <SectionTitle>How long do you want to run ads?</SectionTitle>
                <Pills
                  ariaLabel="Campaign duration"
                  options={["1 Week", "2 Weeks", "1 Month", "3 Months", "Ongoing / Not Sure"]}
                  value={duration}
                  onChange={setDuration}
                />
              </div>

              <div className="h-px bg-border" />

              {/* Budget */}
              <div>
                <SectionTitle>What&apos;s your monthly ad budget? (KWD)</SectionTitle>
                <Pills
                  ariaLabel="Monthly budget"
                  options={[
                    "Under 50 KWD",
                    "50-100 KWD",
                    "100-200 KWD",
                    "200+ KWD",
                    "Not Sure Yet",
                  ]}
                  value={budget}
                  onChange={setBudget}
                />
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  This is just to help us recommend a realistic plan — final numbers are always
                  discussed together.
                </p>
              </div>

              <div className="h-px bg-border" />

              {/* Business */}
              <div>
                <SectionTitle>Tell us about your business</SectionTitle>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="businessName">Business name</Label>
                    <input
                      id="businessName"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      maxLength={100}
                      aria-invalid={!!errors.businessName}
                      placeholder="Your business name"
                      className={`${inputBase} ${
                        errors.businessName ? "border-brand-red" : "border-border"
                      }`}
                    />
                    {errors.businessName && (
                      <p className="mt-1.5 text-xs font-medium text-brand-red">
                        {errors.businessName}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>Business type</Label>
                    <Pills
                      ariaLabel="Business type"
                      options={["Restaurant", "Gym", "Salon", "Cafe", "Retail Shop", "Other"]}
                      value={businessType}
                      onChange={setBusinessType}
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp">WhatsApp number</Label>
                    <input
                      id="whatsapp"
                      type="tel"
                      inputMode="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      maxLength={25}
                      aria-invalid={!!errors.whatsapp}
                      placeholder="+965 XXXXXXXX"
                      className={`${inputBase} ${
                        errors.whatsapp ? "border-brand-red" : "border-border"
                      }`}
                    />
                    {errors.whatsapp && (
                      <p className="mt-1.5 text-xs font-medium text-brand-red">{errors.whatsapp}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="notes">
                      Anything else you&apos;d like us to know{" "}
                      <span className="text-muted-foreground/70">(optional)</span>
                    </Label>
                    <textarea
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={1000}
                      rows={4}
                      placeholder="Any specific goals, ideas, or questions?"
                      className={`${inputBase} resize-none border-border`}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1877F2] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#1877F2]/25 transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <Check className="h-5 w-5" />
                Get My Free Plan
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
