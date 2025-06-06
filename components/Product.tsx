'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useSWRConfig } from 'swr'
import clsx from 'clsx'
import { StarIcon } from '@heroicons/react/20/solid'
import { formatCurrency } from '@/lib/utils'
import { addToCart } from '@/lib/Cart'
import { Blinker } from '@/components/ui/Loading'
import { FC } from 'react'

interface ProductType {
  id: string;
  name: string;
  price: number;
  rating: number;
  slug: string;
  description: string;
  product: {
    name: string;
    slug: string;
    images: { file: { url: string } }[];
  },
  images: {
    id: string;
    file: {
      url: string;
      metadata: string;
    };
  }[];
}

interface ProductProps {
  product: ProductType;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  price_total: number; 
  slug: string;
  product: {
    name: string;
    slug: string;
    images: { file: { url: string } }[];
  };
}

const Product: FC<ProductProps> = ({ product }) => {
  const router = useRouter()
  const { mutate } = useSWRConfig()
  const [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState(false)

  const isMutating = loading || isPending

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);
    
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      price_total: product.price * 1, 
      slug: product.slug, 
      product: {
        name: product.name,
        slug: product.slug,
        images: product.images,
      },
    };
    
    await addToCart(cartItem); 
    setLoading(false);
    mutate('cart');
    startTransition(() => {
      router.refresh();
    });
  };
    

  const [selectedImage, setSelectedImage] = useState(product.images[0])

  return (
    <section className='py-24'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
          <div className='flex flex-col-reverse'>
            <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
              <div className='grid grid-cols-4 gap-6'>
                {product.images.map((image) => (
                  <button
                    key={image.id}
                    className='relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-stone-900 hover:bg-stone-50 focus:outline-none'
                    onClick={() => setSelectedImage(image)}
                  >
                    <span className='sr-only'>{image?.file?.metadata}</span>
                    <span className='absolute inset-0 overflow-hidden rounded-md'>
                      <Image
                        alt=''
                        fill
                        src={image?.file?.url}
                        className='h-full w-full object-cover object-center'
                      />
                    </span>
                    <span
                      className={clsx(
                        selectedImage.id === image.id ? 'ring-sky-500' : 'ring-transparent',
                        'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                      )}
                      aria-hidden='true'
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className='aspect-w-1 aspect-h-1 w-full'>
              <Image
                width={50}
                height={50}
                src={selectedImage.file.url}
                alt={selectedImage.file.metadata || ''}
                className='h-full w-full object-cover object-center sm:rounded-lg'
              />
            </div>
          </div>

          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <h1 className='text-3xl font-bold tracking-tight text-stone-900'>
              {product.name}
            </h1>

            <div className='mt-3'>
              <h2 className='sr-only'>Product information</h2>
              <p className='text-3xl tracking-tight text-stone-900'>
                {formatCurrency({ amount: product.price })}
              </p>
            </div>
            <div className='mt-3'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map(rating => (
                    <StarIcon
                      key={rating}
                      className={clsx(
                        (product.rating || 4) > rating
                          ? 'text-yellow-500'
                          : 'text-stone-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className='mt-6'>
              <h3 className='sr-only'>Description</h3>

              <div
                className='space-y-6 text-base text-stone-700'
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className='mt-6' onSubmit={handleSubmit}>
              <div className='sm:flex-col1 mt-10 flex'>
                <button
                  type='submit'
                  disabled={isMutating}
                  className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-sky-600 py-3 px-8 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-stone-50 disabled:cursor-not-allowed disabled:opacity-50 sm:w-full'
                >
                  {isMutating ? <Blinker /> : 'Add to Cart'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product