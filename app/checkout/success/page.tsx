'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('stripeSessionId');
  
  useEffect(() => {
    console.log('Order completed with session ID:', sessionId);
  }, [sessionId]);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="mb-6">Thank you for your order. Your payment has been processed successfully.</p>
      <Link href="/" className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Return to Home
      </Link>
    </div>
  );
}
