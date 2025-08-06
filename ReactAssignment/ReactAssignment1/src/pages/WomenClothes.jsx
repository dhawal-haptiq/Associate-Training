import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/Card.Slice';
import { addToWishlist } from '../features/Wishlist.Slice';  // import wishlist actions
// import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Clothes = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const user = useSelector((state) => state.auth.user); // ✅ get login status

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category/womens-dresses');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          throw new Error('Invalid product data');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // if (!user) {
    //   alert('You must be logged in to add items to the cart.');
    //   navigate('/login');
    //   return;
    // }
    const normalizedProduct = {
      ...product,
      image: product.images?.[0],
      quantity: 1,
    };

    dispatch(addToCart(normalizedProduct));
    alert(`${product.title} has been added to the cart!`);
  };

  const handleAddToWishlist = (product) => {
    // if (!user) {
    //   alert('You must be logged in to add items to the wishlist.');
    //   navigate('/login');
    //   return;
    // }
    const normalizedProduct = {
      ...product,
      image: product.images?.[0],
    };
    dispatch(addToWishlist(normalizedProduct));
    alert(`${product.title} has been added to the wishlist!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">WOMENS BAG Collection</h1>

      {error && <p className="text-red-500 text-center mb-6">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg hover:bg-gray-400 hover:scale-105 transition-transform duration-300"
          >
            
            <button
              onClick={() => handleAddToWishlist(product)}
              className="absolute top-2 right-2 text-gray-400 hover:text-pink-600 transition"
              aria-label="Add to Wishlist"
            >
              <FaHeart size={20} />
            </button>

            <img
              src={product.images?.[0] ?? 'https://via.placeholder.com/150'}
              alt={product.title}
              className="w-40 h-40 object-cover mb-4 rounded"
            />
            <div className="text-lg font-semibold text-gray-800 mb-2">
              <h2>{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</h2>
            </div>
            <div className="text-gray-600 mb-4">
              <p>Price: ${product.price}</p>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;
