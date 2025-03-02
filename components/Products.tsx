"use client"

import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export interface ProductType {
  id: string;
  name: string;
  price: number;
  rating: number;
  slug: string;
  description: string;
  images: {
    id: string;
    file: {
      url: string;
      metadata: string;
    };
  }[];
}

export interface ProductsProps {
  products: ProductType[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-semibold'>Courses</h1>
        {products.length === 0 ? (
          <p className="mt-10 text-center text-gray-500">No products found.</p>
        ) : (
          <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-stone-200">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0].file.url}
                      alt={product.description}
                      fill
                      //width={50}
                     // height={50}
                      className="object-cover object-center transition-opacity group-hover:opacity-75"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">No image</div>
                  )}
                </div>
                <h3 className="mt-4 text-sm text-stone-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">
                  {formatCurrency({ amount: product.price })}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;