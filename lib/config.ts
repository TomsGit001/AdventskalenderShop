export const CTA_LABEL = "Jetzt Exemplar sichern";

// Kanonische Produktions-Domain – wird u. a. für Stripe-Redirects (success_url/cancel_url)
// und für metadataBase genutzt. Bewusst hart kodiert, damit eine falsch gesetzte
// Env-Variable nicht zu Redirects auf eine andere Domain (z. B. .store) führt.
export const SITE_URL = "https://bennys-winterraetsel.de";

// Stripe-Produktdaten (Preis in Cent – bitte anpassen!)
export const PRODUCT_NAME = "Bennys Winterrätsel – Das Adventskalenderbuch";
export const PRODUCT_DESCRIPTION = "24 Geschichten & Rätsel für einen magischen Advent";
export const PRODUCT_PRICE_CENTS = 1490;
export const PRODUCT_IMAGE_PATH = "/images/buch_bild1.png";

// Preisangaben-Pflichtangaben (PAngV) – bitte mit der Realität abgleichen!
// Versandkosten in Cent (0 = versandkostenfrei). ANNAHME – bitte anpassen.
export const SHIPPING_CENTS = 0;
export const SHIPPING_COUNTRIES = ["DE", "AT", "CH"];
export const DELIVERY_DAYS_MIN = 2;
export const DELIVERY_DAYS_MAX = 5;
// Hinweis zur Umsatzsteuer. Bei Kleinunternehmerregelung (§ 19 UStG) ändern in:
// "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet."
export const TAX_NOTE = "inkl. gesetzlicher MwSt.";

export const formatEuro = (cents: number) =>
  (cents / 100).toLocaleString("de-DE", { style: "currency", currency: "EUR" });
