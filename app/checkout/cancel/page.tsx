import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
      <p className="mb-6">Your payment process has been cancelled. Your cart items are still saved.</p>
      <Link href="/cart" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Return to Cart
      </Link>
    </div>
  );
}