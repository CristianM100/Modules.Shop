import Products from '@/components/Products';

  async function getProducts() {
    const res = await fetch(`http://localhost:3000/api/products`)
  
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
  }


  export default async function Home() {
    const products = await getProducts();

    return (
      <main>
        <Products products={products} />
      </main>
    );
  }





