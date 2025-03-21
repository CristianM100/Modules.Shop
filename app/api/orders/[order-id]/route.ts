/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';


const orders: Record<string, any> = {};

export async function GET(request: Request, { params }: { params: { orderId: string } }) {
  const order = orders[params.orderId];
  if (!order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }
  return NextResponse.json(order);
}

export async function POST(request: Request) {
  const data = await request.json();
  const orderId = `ORD-${Date.now()}`;
  const order = { ...data, orderId };
  orders[orderId] = order; 
  return NextResponse.json({ orderId }, { status: 201 });
}