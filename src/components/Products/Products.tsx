// pages/index.tsx
'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = async () => {
    const res = await axios.get('/api/products');
    setProducts(res.data.data);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products/search', { params: { query: searchQuery } });
      setProducts(res.data.data);
    };
    fetchProducts();
  }, [searchQuery]);

  return (
    <div>
        <h1>Product List</h1>
        <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        /> <br /><br />
      <button onClick={fetchProducts}>Fetch Products</button>
      <ul>
        {products.map((product: any) => (
          <li key={product._id}>
            <Link href={`/product/${product._id}`}>
              <p>{product.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;


