import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { cart, shippingInfo, total } = await request.json();

    const orderId = `ORD-${Date.now()}`; 
    const order = {
      orderId,
      cart,
      shippingInfo,
      total,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    console.log('Order created:', order);

    return NextResponse.json({ orderId }, { status: 201 });
  } catch (error) {
    console.error('Order creation failed:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}