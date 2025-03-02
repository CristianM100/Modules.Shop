
import * as React from 'react'
import Product from '@/components/Product';

export interface ProductType {
  id: string;
  name: string;
  price: number;
  rating: number;
  slug: string;
  description: string;
  product:string;
  images: {
    id: string;
    file: {
      url: string;
      metadata: string;
    };
  }[];
}

export interface ProductProps {
  product: ProductType 

}

async function fetchProductBySlug(): Promise<ProductType> { 
  const response = await fetch(`http://localhost:3000/api/products`);

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }

  return response.json();
}

const Page = async ({ }: { params: { slug: string } }) => {
  const product = await fetchProductBySlug();

  return ( 
    <main>
      <Product product={product} />
    </main>
  );
};

export default Page;



/*
export default async function ProductPage({ params }: Props) {
  
  const resolvedParams = await params; 
  const product = products.find((product: { slug: string; }) => product.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Product product={product} />
    </main>
  );
}*/




 
