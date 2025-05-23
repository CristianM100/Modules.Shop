import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Order from "@/lib/models/Order";
import mongoose from "mongoose";

interface OrderDocument {
  _id: mongoose.Types.ObjectId;
  userId: string;
  items: Array<{
    id: string;
    quantity: number;
    price_total: number;
    product: {
      name: string;
    };
  }>;
  currency: string;
  totalAmount: number;
  createdAt: Date;
  status: string;
  stripeSessionId: string;
}

type Props = {
  params: {
    orderId: string;
  };
};

export async function GET(
  request: Request,
  props: Props
) {
  try {
    await dbConnect();

    const orderId = props.params.orderId;

    if (!orderId) {
      return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
    }

    // Validate if orderId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return NextResponse.json({ error: "Invalid Order ID format" }, { status: 400 });
    }

    const order = await Order.findById(orderId).lean() as unknown as OrderDocument;

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Convert MongoDB _id to string for JSON serialization
    const serializedOrder = {
      ...order,
      _id: order._id.toString(),
      createdAt: order.createdAt?.toISOString()
    };

    return NextResponse.json(serializedOrder, { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json({ 
      error: "Internal Server Error",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
