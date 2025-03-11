//'use client'

import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
//import { useState } from 'react'
import Link from 'next/link'
//import CartSlider from '@/components/CartSlider'
//import { getCart } from '@/lib/swell/cart'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Header = async () => {
  //const { data: cart, isLoading } = useSWR('cart', getCart)
//const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)
  const { userId } = await auth();

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
            <li className='text-sm font-medium uppercase tracking-wider'>
              <Link href='/blog'>Blog</Link>
            </li>
            <li className='text-sm font-medium uppercase tracking-wider'>
              <Link href='/faq'>FAQ</Link>
            </li>
          </ul>

          <div className='flex items-center justify-between gap-6'>
            <button
              className='flex items-center gap-x-2 pl-4'
             // onClick={() => setCartSliderIsOpen(open => !open)}
            >
              <ShoppingCartIcon className='h-7 w-7' />

              {/*{cart?.item_quantity ? (
                <span className='flex h-5 w-5 items-center justify-center rounded bg-sky-600 text-xs font-medium text-white'>
                  {cart?.item_quantity}
                </span>
              ) : null}*/}
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
                  <Link href="/profile">
                    <li>Profile</li>
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
