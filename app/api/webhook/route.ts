import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import dbConnect from "@/lib/dbConnect"; 
import Order from "@/lib/models/Order"; 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const rawBody = await req.text(); // Stripe requires raw body parsing
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
  }

  try {
    await dbConnect();

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        if (!session.metadata?.userId) {
          return NextResponse.json({ error: "No userId in metadata" }, { status: 400 });
        }

        const newOrder = new Order({
          userId: session.metadata.userId,
         //orderId: session.metadata.orderId,
          items: JSON.parse(session.metadata.items ?? "[]"), // Example: stored as stringified JSON in metadata
          shippingInfo: {
            fullName: session.metadata.fullName,
            address: session.metadata.address,
            city: session.metadata.city,
            postalCode: session.metadata.postalCode,
            country: session.metadata.country,
        },
          currency: session.currency,
          totalAmount: session.amount_total ? session.amount_total / 100 : 0,
          stripeSessionId: session.id,
          status: "paid",
        });


        await newOrder.save();
        console.log("✅ Order saved:", newOrder);
        break;
      }

      case "payment_intent.payment_failed":
        console.warn("⚠️ Payment failed:", event);
        break;

      default:
        console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("❌ Error handling webhook:", error);
    return NextResponse.json({ error: "Webhook processing error" }, { status: 500 });
  }
}

// **Important:** Next.js App Router does not support `config.api.bodyParser = false`.
// Instead, configure Stripe to send `application/json` payloads.
