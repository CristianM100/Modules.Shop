"use client";

import { Fragment, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Blinker } from './ui/Loading';
import { formatCurrency } from '@/lib/utils';
import { Dialog,DialogPanel,DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { removeFromCart } from '@/lib/Cart';
import { useSWRConfig } from 'swr';

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
  checkout_url?: string;
}

interface CartSliderProps {
  cart: Cart | null;
  cartIsLoading: boolean;
  open: boolean;
  setCartSliderIsOpen: (open: boolean) => void;
}

const CartSlider: React.FC<CartSliderProps> = ({ cart, cartIsLoading, open, setCartSliderIsOpen }) => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const isMutating = loading || isPending;


  const removeItem = async (itemId: string) => {
    setLoading(true);
    await removeFromCart(itemId);
    setLoading(false);
    mutate('cart');
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setCartSliderIsOpen}>
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setCartSliderIsOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cart?.items.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    src={item.product.images[0]?.file?.url || '/placeholder.png'}
                                    alt={item.product.name}
                                    className="h-full w-full object-cover object-center"
                                    layout="fill"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link href={`/products/${item.product.slug}`}>{item.product.name}</Link>
                                      </h3>
                                      <p className="ml-4">
                                        {formatCurrency({ amount: item.price_total })}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.product.name}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {item.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        disabled={isMutating}
                                        onClick={() => removeItem(item.id)}
                                        className="font-medium text-pink-600 hover:text-pink-500 disabled:cursor-not-allowed disabled:opacity-50"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{formatCurrency({ amount: cart?.sub_total || 0 })}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Taxes calculated at checkout
                      </p>

                      {cart?.checkout_url ? (
                        <div className="mt-6">
                          <Link href={cart.checkout_url}>
                            <button
                              disabled={cartIsLoading}
                              className="flex h-12 w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-75"
                            >
                              {cartIsLoading ? <Blinker /> : 'Checkout'}
                            </button>
                          </Link>
                        </div>
                      ): (
                        <p className="text-sm text-gray-500 mt-4">Checkout unavailable</p>
                      )}

                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-cyan-600 hover:text-cyan-500"
                            onClick={() => setCartSliderIsOpen(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartSlider;

