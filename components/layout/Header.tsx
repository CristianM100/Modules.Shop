'use client'

import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import CartSlider from '@/components/CartSlider'
import { getCart, Cart } from '@/lib/Cart'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const { data: cart, isLoading } = useSWR<Cart | null>('cart', getCart, { fallbackData: null })
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)
  const { userId } = useAuth();

  const safeCart = cart ?? null;


  return (
    <>
      <header className='z-10 py-10 text-stone-400'>
        <nav className='container flex items-center justify-between'>
          <div>
            <Link
              href='/'
              className='text-black text-2xl font-bold tracking-widest'
            >
              Modules.Shop
            </Link>
          </div>

          <ul className='text-black flex items-center gap-14'>
            <li className='text-sm font-medium uppercase tracking-wider'>
              <Link href='/'>Home</Link>
            </li>
            <li className='text-sm font-medium uppercase tracking-wider'>
              <Link href='/products'>Courses</Link>
            </li>
            <li className='text-sm font-medium uppercase tracking-wider'>
              <Link href='/features'>Features</Link>
            </li>
            {/*<li className='text-sm font-medium uppercase tracking-wider'>
              <Link href='/blog'>Blog</Link>
            </li>*/}
            <li className='text-sm font-medium uppercase tracking-wider'>
              <Link href='/faq'>FAQ</Link>
            </li>
          </ul>

          <div className='flex items-center justify-between gap-6'>
            <button
              className='flex items-center gap-x-2 pl-4'
              onClick={() => setCartSliderIsOpen(open => !open)}
            >
              <ShoppingCartIcon className='h-7 w-7' />

              {cart?.items.length ? (
                <span className='flex h-5 w-5 items-center justify-center rounded bg-sky-600 text-xs font-medium text-white'>
                  {cart.items.length}
                </span>
              ) : null}
            </button>
            <div className="flex gap-6 items-center">
              {!userId ? (
                <>
                  <Link href="/sign-in">
                    <li>Login</li>
                  </Link>
                  <Link href="/sign-up">
                    <li>Sign Up</li>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/orders">
                    <li>Orders</li>
                  </Link>
                  <li className="flex items-center">
                    <UserButton />
                  </li>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
      <CartSlider
        cart={safeCart}
        cartIsLoading={isLoading}
        open={cartSliderIsOpen}
        setCartSliderIsOpen={setCartSliderIsOpen}
      />
    </>
  )
}

export default Header








