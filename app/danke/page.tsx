import Link from "next/link";
import Stripe from "stripe";
import Snowfall from "@/components/Snowfall";
import { DELIVERY_DAYS_MAX, DELIVERY_DAYS_MIN, formatEuro } from "@/lib/config";

export const dynamic = "force-dynamic";

async function loadSession(sessionId?: string) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret || !sessionId || !sessionId.startsWith("cs_")) return null;
  try {
    const stripe = new Stripe(secret);
    return await stripe.checkout.sessions.retrieve(sessionId, { expand: ["line_items"] });
  } catch (err) {
    console.error("Stripe-Session konnte nicht geladen werden:", err);
    return null;
  }
}

function AddressBlock({
  name,
  address,
}: {
  name?: string | null;
  address?: Stripe.Address | null;
}) {
  if (!address) return null;
  return (
    <p className="mt-1 text-snow-200">
      {name && <>{name}<br /></>}
      {address.line1}<br />
      {address.line2 && <>{address.line2}<br /></>}
      {address.postal_code} {address.city}
      {address.country && <><br />{address.country}</>}
    </p>
  );
}

export default async function Danke({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const session = await loadSession(searchParams.session_id);

  const email = session?.customer_details?.email;
  const customerName = session?.customer_details?.name;
  const billing = session?.customer_details?.address;
  const shipping = session?.collected_information?.shipping_details;
  const items = session?.line_items?.data ?? [];
  const shippingCents = session?.shipping_cost?.amount_total ?? 0;
  const discountCents = session?.total_details?.amount_discount ?? 0;
  const isPaid = session?.payment_status === "paid";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Snowfall />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 py-12 text-center">
        <div aria-hidden className="text-6xl">🎄</div>
        <h1 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">Vielen Dank für deine Bestellung!</h1>
        <p className="mt-4 text-lg text-snow-200">
          {isPaid || !session ? "Deine Zahlung war erfolgreich. " : "Deine Bestellung ist eingegangen. "}
          {email ? (
            <>Eine Bestätigung schicken wir an <strong className="text-white">{email}</strong>.</>
          ) : (
            <>Eine Bestätigung bekommst du per E-Mail.</>
          )}{" "}
          Viel Freude mit Bennys Winterrätsel!
        </p>

        {session && (
          <section
            aria-label="Bestelldetails"
            className="mt-8 w-full rounded-2xl border border-white/15 bg-white/5 p-5 text-left text-sm backdrop-blur-sm sm:p-6"
          >
            <h2 className="font-display text-xl font-semibold">Deine Bestelldetails</h2>
            <p className="mt-1 text-xs text-snow-200">
              Bestellnummer: <span className="break-all">{session.id}</span>
            </p>

            {items.length > 0 && (
              <ul className="mt-4 divide-y divide-white/10">
                {items.map((item) => (
                  <li key={item.id} className="flex items-start justify-between gap-4 py-2">
                    <span>
                      {item.quantity}× {item.description}
                    </span>
                    <span className="whitespace-nowrap">{formatEuro(item.amount_subtotal)}</span>
                  </li>
                ))}
                <li className="flex justify-between gap-4 py-2">
                  <span>Versand</span>
                  <span>{shippingCents === 0 ? "kostenlos" : formatEuro(shippingCents)}</span>
                </li>
                {discountCents > 0 && (
                  <li className="flex justify-between gap-4 py-2">
                    <span>Rabatt</span>
                    <span>−{formatEuro(discountCents)}</span>
                  </li>
                )}
                {session.amount_total !== null && (
                  <li className="flex justify-between gap-4 py-2 text-base font-semibold">
                    <span>Gesamt</span>
                    <span>{formatEuro(session.amount_total)}</span>
                  </li>
                )}
              </ul>
            )}

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {shipping?.address && (
                <div>
                  <h3 className="font-semibold">Lieferadresse</h3>
                  <AddressBlock name={shipping.name} address={shipping.address} />
                </div>
              )}
              {billing && (
                <div>
                  <h3 className="font-semibold">Rechnungsadresse</h3>
                  <AddressBlock name={customerName} address={billing} />
                </div>
              )}
            </div>

            <p className="mt-4 text-snow-200">
              Voraussichtliche Lieferzeit: {DELIVERY_DAYS_MIN}–{DELIVERY_DAYS_MAX} Werktage.
            </p>
          </section>
        )}

        <Link href="/" className="btn-cta mt-8 sm:w-auto">Zurück zur Startseite</Link>
      </main>
    </div>
  );
}
