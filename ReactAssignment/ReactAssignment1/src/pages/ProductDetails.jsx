import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img src={product.images[0]} alt={product.title} className="w-full rounded-lg" />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-2">Price: ${product.price}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
        
      </div>
    </div>
  );
};

export default ProductDetails;
