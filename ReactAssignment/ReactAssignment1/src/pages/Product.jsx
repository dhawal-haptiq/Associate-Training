import React, { useState } from 'react'; 
import Navbar from '../components/Header/Home/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/Product.Slice' 
import { addToCart } from '../features/Card.Slice'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = () => {
  const {items:products,status} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if(status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  if(status === 'loading') return <div><p>Loading</p></div>
  if(status ===  'failed') return <div><p>Error fetching products</p></div>

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Products</h1>
       <ul>
        <li><Link to={'/clothes'}>Clothes</Link></li>
       </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg hover:bg-gray-400 hover:scale-105 transition-transform duration-300">

              <img
                src={product.image}
                alt={product.title}
                className="w-50 h-50 object-cover mb-4 rounded cursor-pointer"
              />
              <div className="text-lg font-semibold text-gray-800 mb-2">
                <h2>{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</h2>
              </div>
              <div className="text-gray-600 mb-4">
                <p>Price: ${product.price}</p>
              </div>

              {/* Button and heart icon side by side */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => { dispatch(addToCart(product)); alert("Item has been added") }}
                  className="px-4 py-2 text-white bg-black rounded hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Toggle wishlist"
                  className="text-red-500 text-xl focus:outline-none"
                >
                  {wishlist.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product;
