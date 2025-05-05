import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Order from "@/lib/models/Order"; 



export async function GET(req: NextRequest) {
  try {
    await dbConnect(); 

    const url = new URL(req.url, `http://${req.headers.get("host")}`);
    const userId = url.searchParams.get("userId");

    console.log("Query userId:", userId);

    if (!userId) {
      return NextResponse.json({ error: "Missing userId in query" }, { status: 400 });
    }

    const orders = await Order.find({ userId }).lean();
    return NextResponse.json(orders.length ? orders : []);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect(); 
    const body = await req.json();

    if (!body.cart || !body.totalAmount || !body.paymentIntentId || !body.currency || !body.stripeSessionId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const order = await Order.create({
      userId: body.shippingInfo.userId, 
      items: body.cart,
      status: "paid",
      stripeSessionId: body.stripeSessionId,
      currency : body.currency,
      totalAmount: body.totalAmount
      
    });

    return NextResponse.json({ orderId: order._id }, { status: 201 });
  } catch (error) {
    console.error("Order creation failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}