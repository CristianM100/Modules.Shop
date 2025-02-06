'use client'

//import { useState } from 'react'
import Link from 'next/link'
//import useSWR from 'swr'
//import CartSlider from '@/components/cart-slider'
//import { getCart } from '@/lib/swell/cart'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { SignInButton, UserButton } from '@clerk/nextjs'
//import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'//
import { SignedIn, SignedOut } from '@clerk/nextjs'

const Header = () => {
  //const { data: cart, isLoading } = useSWR('cart', getCart)
  //const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)

  return (
    <>
      <header className='z-10 py-10 text-stone-400'>
        <nav className='container flex items-center justify-between'>
          <div>
            <Link
              href='/'
              className='text-2xl font-bold tracking-widest'
            >
              Modules.shop
            </Link>
          </div>

          <ul className='flex items-center gap-10'>
            <li className='text-sm font-medium uppercase tracking-wider'>
              <Link href='/products'>Courses</Link>
            </li>
          </ul>

          <div className='flex items-center justify-between gap-6'>
            <button
              className='flex items-center gap-x-2 pl-4'
             // onClick={() => setCartSliderIsOpen(open => !open)}
            >
              <ShoppingCartIcon className='h-7 w-7' />

             {/* {cart?.item_quantity ? (
                <span className='flex h-5 w-5 items-center justify-center rounded bg-sky-600 text-xs font-medium text-white'>
                  {cart?.item_quantity}
                </span>
              ) : null}*/}
            </button>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
                <button className='rounded border border-gray-400 px-3 py-0.5'>
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </nav>
      </header>
      {/*<CartSlider
        cart={cart}
        cartIsLoading={isLoading}
        open={cartSliderIsOpen}
        setCartSliderIsOpen={setCartSliderIsOpen}
      />*/}
    </>
  )
}

export default Header
