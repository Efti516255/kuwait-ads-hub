export const WHATSAPP_NUMBER = "96597735701";

export function buildWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}