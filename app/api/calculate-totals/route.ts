/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { cart } = await request.json();

  const sub_total = cart.items.reduce((sum: number, item: any) => sum + item.price_total, 0);
  const shipping = 10; // Flat rate (replace with real logic)
  const tax = sub_total * 0.1; // 10% tax (replace with real logic)
  const total = sub_total + shipping + tax;

  return NextResponse.json({
    ...cart,
    sub_total,
    shipping,
    tax,
    total,
  });
}