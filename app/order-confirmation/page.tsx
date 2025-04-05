/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Blinker } from '@/components/ui/Loading';
import { formatCurrency } from '@/lib/utils'


interface Order {
  userId: string,
  //orderId: string;
  items: {
    id: string;
    quantity: number;
    price_total: number;
    product: { name: string };
  }[];
  shippingInfo: {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  totalAmount: number;
  stripeSessionId?: string;
}

const OrderConfirmationPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Extracted orderId:", orderId); 
    if (!orderId) return;

    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${orderId}`);
        if (!response.ok) throw new Error('Order not found');
        const orderData = await response.json();
        setOrder(orderData);
      } catch (error) {
        console.error('Failed to fetch order:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Blinker />
        <p className="ml-2">Loading order details...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Order Not Found</h1>
        <p className="mt-2 text-gray-600">Something went wrong. Please contact support.</p>
        <Link href="/" className="mt-4 text-cyan-600 hover:text-cyan-500">
          Back to Home →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Thank You for Your Order!</h1>
        <p className="text-gray-700 mb-4">Order #{(order as any)._id}</p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Summary</h2>
            {order?.items?.length ? (
                <ul className="divide-y divide-gray-200">
                    {order.items.map((item) => (
                        <li key={item.id} className="py-2 flex justify-between">
                            <span>{item.product.name} (x{item.quantity})</span>
                            <span>{formatCurrency({ amount: item.price_total })}</span>
                            </li>
                    ))}
                </ul>
                ) : (
                    <p className="text-gray-500">No items in this order.</p>
            )}
            <div className="mt-4 flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>{formatCurrency({ amount: order.totalAmount })}</p>
            </div>
        </div>

        {/*<div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Shipping Information</h2>
          <p>{order.shippingInfo.fullName}</p>
          <p>{order.shippingInfo.address}</p>
          <p>
            {order.shippingInfo.city}, {order.shippingInfo.postalCode}, {order.shippingInfo.country}
          </p>
        </div>*/}

        <div className="text-center">
          <Link href="/products" className="text-cyan-600 hover:text-cyan-500">
            Continue Shopping →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
