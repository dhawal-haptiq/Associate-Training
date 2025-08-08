import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart } from '../features/Card.Slice';
import { addToWishlist } from '../features/Wishlist.Slice';
import { toast } from 'react-toastify'; 

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = location.state || {};
  const user = useSelector((state) => state.auth.user);

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found.</p>;
  }

  const handleAddToCart = () => {
    if (!user) {
      toast.error('Please login to add items to the cart.');
      return navigate('/login');
    }

    const normalizedProduct = {
      ...product,
      image: product.images?.[0],
      quantity: 1,
    };

    dispatch(addToCart(normalizedProduct));
    toast.success(`${product.title} has been added to your cart.`);
  };

  const handleAddToWishlist = () => {
    if (!user) {
      toast.error('Please login to add items to the wishlist.');
      return navigate('/login');
    }

    const normalizedProduct = {
      ...product,
      image: product.images?.[0],
    };

    dispatch(addToWishlist(normalizedProduct));
    toast.success(`${product.title} has been added to your wishlist.`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">  
      <img src={product.images[0]} alt={product.title} className="w-full rounded-lg" />
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-2">Price: ${product.price}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-5 py-2 rounded hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={handleAddToWishlist}
            className="bg-pink-600 text-white px-5 py-2 rounded hover:bg-pink-700 transition"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
