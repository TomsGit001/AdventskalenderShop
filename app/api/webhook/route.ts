import Stripe from "stripe";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature or webhook secret" }, { status: 400 });
  }

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email = session.customer_details?.email;
    const paymentStatus = session.payment_status;
    const amountTotal = session.amount_total;

    console.log("Checkout completed:", { email, paymentStatus, amountTotal });

    // TODO: DB / fulfillment logic
    // - Bestellung in der Datenbank speichern (session.id als eindeutige Referenz, Idempotenz beachten)
    // - Nur bei paymentStatus === "paid" versenden bzw. Bestellbestätigung per E-Mail senden
    // - Lieferadresse: session.shipping_details / session.customer_details.address
  }

  return NextResponse.json({ received: true });
}
