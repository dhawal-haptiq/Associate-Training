import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img src={product.images[0]} alt={product.title} className="w-full rounded-lg" />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-2">Price: ${product.price}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
