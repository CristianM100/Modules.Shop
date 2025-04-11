import Products from '@/components/Products';

//async function getProducts(search?: string) {
  async function getProducts() {
    const res = await fetch(`http://localhost:3000/api/products`)
  //const queryParam = search ? `?search=${encodeURIComponent(search)}` : "";
  //const res = await fetch(`http://localhost:3000/api/products${queryParam}`);
  
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

/*
export default async function Home({ searchParams }: { searchParams: { search?: string } }) {
  const search = searchParams?.search || "";
  const products = await getProducts(search);

  return (
    <main>
      <SearchBox />
      <Products products={products} />
    </main>
  );
}

*/



