import Products from '@/components/Products'

interface ProductType {
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

const fetchProducts = async (page: number): Promise<{ results: ProductType[] }> => {
  const response = await fetch(`/api/products?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

const Page = async () => {
  const { results: products } = await fetchProducts(1);

  return <Products products={products} />;
};

export default Page;