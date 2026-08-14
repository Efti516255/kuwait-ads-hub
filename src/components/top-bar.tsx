import { cn } from "@/lib/utils";

export type Language = "en" | "ar";

export function TopBar({
  language,
  onChange,
}: {
  language: Language;
  onChange: (lang: Language) => void;
}) {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-9 border-b border-[color:var(--color-navbar-border)] bg-navy text-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 p-0.5">
          {(["en", "ar"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => onChange(lang)}
              aria-label={lang === "en" ? "English" : "Arabic"}
              aria-pressed={language === lang}
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-semibold transition-colors",
                language === lang
                  ? "bg-white text-navy"
                  : "text-white/70 hover:text-white"
              )}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
