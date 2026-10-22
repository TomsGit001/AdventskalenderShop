import { NextResponse } from "next/server";
import {
  DELIVERY_DAYS_MAX,
  DELIVERY_DAYS_MIN,
  PRODUCT_DESCRIPTION,
  PRODUCT_IMAGE_PATH,
  PRODUCT_NAME,
  PRODUCT_PRICE_CENTS,
  SHIPPING_CENTS,
  SHIPPING_COUNTRIES,
  SITE_URL,
} from "@/lib/config";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ error: "STRIPE_SECRET_KEY fehlt" }, { status: 500 });
  }

  // In lokaler Entwicklung den tatsächlichen Origin verwenden, in Produktion immer die
  // kanonische Domain – unabhängig davon, was NEXT_PUBLIC_SITE_URL enthält.
  const isLocal = new URL(req.url).hostname === "localhost";
  const siteUrl = (isLocal ? new URL(req.url).origin : SITE_URL).replace(/\/$/, "");

  const p = new URLSearchParams();
  p.set("mode", "payment");
  p.set("locale", "de");
  // Hinweis: Der Text des Bezahl-Buttons ("Bezahlen") wird von Stripe gerendert
  // und kann nur im Stripe-Dashboard unter Einstellungen → Checkout → Anpassen
  // (Custom text / Branding) geändert werden – nicht über die Session-API.
  // submit_type steuert nur die Art der Aktion ("pay" | "book" | "donate"),
  // nicht die exakte Beschriftung. Stripe rendert den Button-Text anhand von
  // locale + submit_type. Für "Jetzt kaufen" müsste der Text im Stripe-Dashboard
  // unter Einstellungen → Checkout → Anpassen (Branding / Custom text) gesetzt werden.
  p.set("submit_type", "pay");
  p.set("success_url", `${siteUrl}/danke?session_id={CHECKOUT_SESSION_ID}`);
  p.set("cancel_url", `${siteUrl}/`);
  // Pflicht-Häkchen direkt im Stripe-Checkout (Stripe speichert die Zustimmung an der Session).
  // Voraussetzung: im Stripe-Dashboard ist unter Einstellungen → Öffentliche Angaben
  // ein Link zu den AGB hinterlegt.
  p.set("consent_collection[terms_of_service]", "required");
  p.set(
    "custom_text[terms_of_service_acceptance][message]",
    `Ich akzeptiere die [AGB](${siteUrl}/agb), habe die [Widerrufsbelehrung](${siteUrl}/widerruf) und die [Datenschutzerklärung](${siteUrl}/datenschutz) gelesen.`
  );
  p.set("billing_address_collection", "auto");
  p.set("allow_promotion_codes", "true");

  p.set("line_items[0][quantity]", "1");
  p.set("line_items[0][adjustable_quantity][enabled]", "true");
  p.set("line_items[0][adjustable_quantity][minimum]", "1");
  p.set("line_items[0][adjustable_quantity][maximum]", "10");
  p.set("line_items[0][price_data][currency]", "eur");
  p.set("line_items[0][price_data][unit_amount]", String(PRODUCT_PRICE_CENTS));
  p.set("line_items[0][price_data][product_data][name]", PRODUCT_NAME);
  p.set("line_items[0][price_data][product_data][description]", PRODUCT_DESCRIPTION);
  // Stripe kann Bilder nur von öffentlich erreichbaren URLs laden
  if (!siteUrl.includes("localhost")) {
    p.set("line_items[0][price_data][product_data][images][0]", `${siteUrl}${PRODUCT_IMAGE_PATH}`);
  }

  // Versand (physisches Buch) inkl. ausgewiesener Versandkosten und Lieferzeit
  SHIPPING_COUNTRIES.forEach((c, i) =>
    p.set(`shipping_address_collection[allowed_countries][${i}]`, c)
  );
  const sr = "shipping_options[0][shipping_rate_data]";
  p.set(`${sr}[type]`, "fixed_amount");
  p.set(`${sr}[display_name]`, SHIPPING_CENTS === 0 ? "Versand (kostenlos)" : "Versand");
  p.set(`${sr}[fixed_amount][amount]`, String(SHIPPING_CENTS));
  p.set(`${sr}[fixed_amount][currency]`, "eur");
  p.set(`${sr}[delivery_estimate][minimum][unit]`, "business_day");
  p.set(`${sr}[delivery_estimate][minimum][value]`, String(DELIVERY_DAYS_MIN));
  p.set(`${sr}[delivery_estimate][maximum][unit]`, "business_day");
  p.set(`${sr}[delivery_estimate][maximum][value]`, String(DELIVERY_DAYS_MAX));

  // Rechtstexte im Checkout (Markdown-Links werden von Stripe unterstützt)
  p.set(
    "custom_text[submit][message]",
    `Mit Klick auf „Bezahlen“ gibst du eine **zahlungspflichtige Bestellung** auf. Es gelten unsere [AGB](${siteUrl}/agb) und die [Widerrufsbelehrung](${siteUrl}/widerruf).`
  );
  // Der Button-Text selbst ("Bezahlen") ist nicht per API änderbar – siehe Kommentar oben.
  p.set("custom_text[after_submit][message]", "Du erhältst deine Bestellbestätigung per E-Mail.");

  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: p.toString(),
  });

  const data = await res.json();
  if (!res.ok || !data.url) {
    console.error("Stripe-Fehler:", data?.error?.message ?? data);
    return NextResponse.redirect(`${siteUrl}/?checkout=error`, 303);
  }

  return NextResponse.redirect(data.url, 303);
}
