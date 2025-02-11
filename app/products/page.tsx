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

const Page = async () => {
  const { results: products } = await fetchProducts(1);
  return <Products products={products} />;
};

export default Page;








/*
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
  slug: string;
}

const fetchProducts = async (page: number): Promise<{ results: ProductType[] }> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'; 
  const response = await fetch(`${baseUrl}/products?page=${page}`);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

const Page: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { results } = await fetchProducts(1);
        setProducts(results);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Products products={products} />;
};

export default Page;*/