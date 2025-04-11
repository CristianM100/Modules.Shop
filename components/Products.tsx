/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

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
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState<string>('default');
  const [productsResult, setProducts] = useState<ProductType[]>(products);

  // Initialize productsResult with products on first render
  useEffect(() => {
    setProducts(products);
  }, [products]);

  useEffect(() => {
    const sortProducts = () => {
      if (!productsResult || productsResult.length === 0) return;
      
      const sortedProducts = [...productsResult];
      
      switch (sortType) {
        case 'price-asc':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }
      
      setProducts(sortedProducts);
    };
    
    sortProducts();
  }, [sortType, products]);

  const resultsPerPage = 6;

  const filteredProducts = productsResult.filter((product) => {
    const searchTerm = searchInput.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / resultsPerPage);
  const paginatedResults = filteredProducts.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="py-24">
      <div className="container">
        <h1 className="text-2xl font-semibold mb-4">Courses</h1>

        {/* ✅ Search bar */}
        <form onSubmit={(e) => e.preventDefault()} className="mb-6">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search courses..."
            className="w-full max-w-md p-2 border border-gray-300 rounded"
          />
        </form>

        <div className="mb-12 flex justify-end items-center gap-x-2 whitespace-nowrap">
          <p className="text-sm">Sort by:</p>
          <select
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
            name="orderBy"
            id="orderBy"
            className="text-sm"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price (Low &gt; High)</option>
            <option value="price-desc">Price (High &gt; Low)</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
        </div>

        {/* ✅ Show no result message */}
        {filteredProducts.length === 0 ? (
          <p className="mt-12 text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {paginatedResults.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-stone-200">
                  {product.images?.[0]?.file?.url ? (
                    <Image
                      src={product.images[0].file.url}
                      alt={product.description}
                      fill
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
        {/* ✅ Pagination buttons */}
        {filteredProducts.length > 0 && (
          <div className="mt-12 flex justify-between items-center">
            <button onClick={goToPreviousPage} disabled={currentPage === 1} className="text-sm text-white transition duration-150 hover:bg-blue-400 bg-gray-500 font-semibold py-2 px-4 rounded-l">
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages} className="text-sm text-white transition duration-150 hover:bg-blue-400 bg-gray-500 font-semibold py-2 px-4 rounded-r">
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

/*
import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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

  const [searchInput, setSearchInput] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(true); 
  const [currentPage, setCurrentPage] = useState(1);

  const resultsPerPage = 6;

  const filteredProducts = products.filter((product) => {
    const searchTerm = searchInput.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / resultsPerPage);
  const paginatedResults = filteredProducts.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
  };

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
*/