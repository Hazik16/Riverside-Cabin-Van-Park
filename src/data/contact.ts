export const contact = {
  phone: {
    display: "+61 452 185 145",
    localDisplay: "0452 185 145",
    tel: "+61452185145",
  },
  email: {
    address: "bookings@riversidecabinandvanpark.au",
    defaultSubject: "Accommodation Inquiry – Riverside Cabin & Van Park",
  },
  whatsapp: {
    /** Confirmed active WhatsApp inquiry channel */
    isConfirmed: true,
    /** E.164 format without '+' for wa.me links. */
    number: "61452185145",
    defaultMessage:
      "Hello Riverside Cabin and Van Park, I would like to inquire about accommodation availability.",
  },
  address: {
    street: "10 Mill Street",
    locality: "Muswellbrook",
    region: "NSW",
    postcode: "2333",
    country: "Australia",
    full: "10 Mill Street, Muswellbrook NSW 2333, Australia",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=10+Mill+Street,+Muswellbrook+NSW+2333+Australia",
  },
} as const;

/* ── Link builders ─────────────────────────────────────────────── */

export function phoneHref() {
  // Restrict to valid telephone characters (digits and leading plus sign)
  const cleanTel = contact.phone.tel.replace(/[^\d+]/g, "");
  return `tel:${cleanTel}`;
}

export function emailHref(subject?: string) {
  // Strip CR/LF newline characters to prevent mail header injection before URI encoding
  const cleanSubject = (subject ?? contact.email.defaultSubject).replace(/[\r\n]/g, " ").trim();
  const s = encodeURIComponent(cleanSubject);
  return `mailto:${contact.email.address}?subject=${s}`;
}

export function whatsappHref(message?: string) {
  // Restrict number to digits only
  const cleanNumber = contact.whatsapp.number.replace(/\D/g, "");
  const m = encodeURIComponent(message ?? contact.whatsapp.defaultMessage);
  return `https://wa.me/${cleanNumber}?text=${m}`;
}

export function directionsHref() {
  return contact.address.googleMapsUrl;
}
