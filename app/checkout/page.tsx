"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getCart } from '@/lib/Cart';
import { formatCurrency } from '@/lib/utils';
import { Blinker } from '@/components/ui/Loading';
import { useUser } from "@clerk/nextjs";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CartItem {
  id: string;
  quantity: number;
  price_total: number;
  product: {
    name: string;
    slug: string;
    images: { file: { url: string } }[];
  };
}

interface Cart {
  items: CartItem[];
  sub_total: number;
  shipping?: number;
  tax?: number;
  total: number;
  checkout_url?: string;
}

interface ShippingInfo {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

const CheckoutForm = ({ cart, shippingInfo }: { cart: Cart; shippingInfo: ShippingInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser(); // Get the Clerk user
  const userId = user?.id; // Extract the user ID

  console.log("Clerk User ID:", userId); // Debugging: Check if userId is available

  const handleCheckout = async () => {
    if (!stripe || !elements) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.round(cart.total * 100) }),
      });

      if (!response.ok) throw new Error('Failed to create payment intent');

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: { name: shippingInfo.fullName },
        },
      });

      if (result.error) {
        setError(result.error.message || 'Payment failed');
      } else if (result.paymentIntent?.status === 'succeeded') {

        const orderResponse = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            cart: cart.items,
            shippingInfo: { ...shippingInfo, userId },
            paymentIntentId: result.paymentIntent.id,
            totalAmount: cart.total,  
            currency: 'usd', 
            stripeSessionId: result.paymentIntent.id,
          }),
        });

        if (!orderResponse.ok) throw new Error('Failed to create order');

        const { orderId } = await orderResponse.json();
        console.log("Redirecting to success page with orderId:", orderId);

      // router.push(`/success?orderId=${orderId}`);
       router.push(`/order-confirmation?orderId=${orderId}`);
      }
      
    } catch (error) {
      console.error('Checkout failed:', error);
      setError('Checkout failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Card Details</label>
        <CardElement className="mt-1 p-2 border border-gray-300 rounded-md" />
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button
        type="button"
        onClick={handleCheckout}
        disabled={submitting || !stripe}
        className="w-full flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-75"
      >
        {submitting ? <Blinker /> : 'Pay Now'}
      </button>
    </div>
  );
};

const CheckoutPage = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ShippingInfo>({
    defaultValues: {
      fullName: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
    },
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await getCart();
        const response = await fetch('/api/calculate-totals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cart: cartData, shippingInfo: {} }),
        });
        if (!response.ok) throw new Error('Failed to calculate totals');
        const updatedCart = await response.json();
        setCart(updatedCart);
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const onSubmit: SubmitHandler<ShippingInfo> = () => {
  
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Blinker />
        <p className="ml-2">Loading checkout...</p>
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Your cart is empty</h1>
        <p className="mt-2 text-gray-600">Add some items to start shopping!</p>
        <Link href="/" className="mt-4 text-cyan-600 hover:text-cyan-500">
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
            <ul className="divide-y divide-gray-200">
              {cart.items.map((item) => (
                <li key={item.id} className="flex py-4">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src={item.product.images[0]?.file?.url || '/placeholder.png'}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                      fill
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.product.name}</h3>
                      <p>{formatCurrency({ amount: item.price_total })}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>{formatCurrency({ amount: cart.sub_total })}</p>
              </div>
              {cart.shipping !== undefined && (
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Shipping</p>
                  <p>{formatCurrency({ amount: cart.shipping })}</p>
                </div>
              )}
              {cart.tax !== undefined && (
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Tax</p>
                  <p>{formatCurrency({ amount: cart.tax })}</p>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold text-gray-900 mt-2">
                <p>Total</p>
                <p>{formatCurrency({ amount: cart.total })}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping & Payment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    {...register('fullName', { required: 'Full name is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    id="address"
                    {...register('address', { required: 'Address is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    id="city"
                    {...register('city', { required: 'City is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                    Postal Code
                  </label>
                  <input
                    id="postalCode"
                    {...register('postalCode', {
                      required: 'Postal code is required',
                      pattern: {
                        value: /^[0-9]{5}$/,
                        message: 'Invalid postal code (5 digits required)',
                      },
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-sm">{errors.postalCode.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    id="country"
                    {...register('country', { required: 'Country is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm">{errors.country.message}</p>
                  )}
                </div>
              </div>
              <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} shippingInfo={getValues()} />
              </Elements>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-cyan-600 hover:text-cyan-500">
            Continue Shopping →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

