// pages/product/[id].tsx
"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data.data);
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
        {/* @ts-ignore */}
      <h1>{product.name}</h1>
      {/* @ts-ignore */}
      <p>{product.description}</p>
      {/* @ts-ignore */}
      <p>{product.price}</p>
      {/* @ts-ignore */}
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ProductDetails;
