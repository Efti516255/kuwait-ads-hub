import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "96597735701";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.04 4C9.9 4 4.92 8.98 4.92 15.12c0 2.13.6 4.12 1.63 5.82L4.5 28l7.24-1.9a11.06 11.06 0 004.3.86c6.14 0 11.12-4.98 11.12-11.12S22.18 4 16.04 4Zm0 20.28c-1.4 0-2.76-.37-3.95-1.08l-.28-.17-4.3 1.13 1.15-4.19-.18-.29a9.1 9.1 0 01-1.4-4.86c0-5.05 4.11-9.16 9.16-9.16 5.05 0 9.16 4.11 9.16 9.16 0 5.05-4.11 9.16-9.16 9.16Zm5.03-6.86c-.28-.14-1.63-.8-1.88-.9-.25-.09-.44-.13-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.21-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.11-.25-.18-.53-.32Z" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [showBubble, setShowBubble] = useState(true);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Kuwait Ads Hub, I'd like to know more about your Meta Ads services."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {showBubble && (
        <div className="relative max-w-[16rem] rounded-2xl rounded-br-sm border border-border bg-card p-4 pr-8 shadow-lg">
          <button
            type="button"
            onClick={() => setShowBubble(false)}
            aria-label="Close chat message"
            className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="text-sm font-semibold text-navy">Need more customers?</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Chat with us on WhatsApp — we usually reply within minutes.
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </button>
    </div>
  );
}
