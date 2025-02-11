import Products from '@/components/Products';


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
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'; 
  const response = await fetch(`${baseUrl}/products?page=${page}`);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};
/*
const Page = async () => {
  const { results: products } = await fetchProducts(1);
  return <Products products={products} />;
 
};

export default Page;
*/

const Page = async () => {
  const { results: products } = await fetchProducts(1);
  return <Products products={products} />;
};

export default Page;