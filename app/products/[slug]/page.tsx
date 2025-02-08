import Product from '@/components/Product'

interface ProductType {
  id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  images: {
    id: string;
    file: {
      url: string;
      metadata: string;
    };
  }[];
}

const fetchProductBySlug = async (slug: string): Promise<ProductType> => {
  const response = await fetch(`/api/products/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const product = await fetchProductBySlug(params.slug);

  return <Product product={product} />;
};

export default Page;