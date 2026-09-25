# Reliable WhatsApp click-to-chat

## Changes
- Centralize the Kuwait Ads Hub WhatsApp number and URL creation so every action consistently uses `https://wa.me/96597735701?text=...` with `encodeURIComponent()`.
- Replace scripted popup handlers in the floating widget and closing banner with normal external links, allowing mobile devices and desktop browsers to choose WhatsApp normally.
- Update the campaign form to validate its required fields, build the requested personalized message, and open the generated `wa.me` destination through normal external navigation while retaining the confirmation state.
- Keep footer contact behavior and the existing visual design unchanged while routing it through the same shared URL helper.

## Verification
- Confirm there are no `api.whatsapp.com`, iframe, fetch, proxy, or WhatsApp API implementations.
- Exercise the floating button, closing banner link, footer link, and completed form on mobile and desktop; inspect each destination before WhatsApp redirects it.
- Confirm the current preview builds without errors.

## Technical details
- Add a small browser-safe URL helper containing the normalized number and encoded-message builder.
- Use anchor `href`, `target="_blank"`, and `rel="noopener noreferrer"` for direct external navigation.
- For the form, update the clicked submit control's destination only after validation, then allow its normal link behavior.
