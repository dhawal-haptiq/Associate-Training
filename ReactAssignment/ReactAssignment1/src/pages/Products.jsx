import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/Card.Slice';
import { addToWishlist } from '../features/Wishlist.Slice';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProductsByCategory } from '../features/Product.Slice';

const Products = () => {
  const [filtered, setFiltered] = useState([]);
  const { items: products, status, error } = useSelector((state) => state.products);
  const searchItem = useSelector((state) => state.search.searchItem.toUpperCase());

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const user = useSelector((state) => state.auth.user);

  const validCategories = ['mens-shirts', 'womens-dresses', 'womens-bags'];

  useEffect(() => {
    if (!categoryName || !validCategories.includes(categoryName)) return;
    dispatch(fetchProductsByCategory(categoryName));
  }, [categoryName, dispatch]);

  useEffect(() => {
    if (searchItem) {
      const filteredItem = products.filter((product) =>
        product.title.toUpperCase().includes(searchItem)
      );
      setFiltered(filteredItem);
    } else {
      setFiltered(products);
    }
  }, [searchItem, products]);

  const handleAddToCart = (product) => {
    if (!user) {
      toast.warn('You must be logged in to add items to the cart.', { position: 'top-right' });
      navigate('/login');
      return;
    }

    const normalizedProduct = {
      ...product,
      image: product.images?.[0],
      quantity: 1,
    };

    dispatch(addToCart(normalizedProduct));
    toast.success(`${product.title} added to cart!`);
  };

  const handleAddToWishlist = (product) => {
    if (!user) {
      toast.warn('You must be logged in to add items to the wishlist.', {
        position: 'top-right',
      });
      navigate('/login');
      return;
    }

    const normalizedProduct = {
      ...product,
      image: product.images?.[0],
    };

    dispatch(addToWishlist(normalizedProduct));
    toast.info(`${product.title} added to wishlist!`);
  };

  const handleViewMore = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const formattedTitle = categoryName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      <h1 className="text-3xl font-bold text-center mb-8">{formattedTitle} Collection</h1>

      {status === 'loading' && <p className="text-center text-gray-500">Loading...</p>}
      {status === 'failed' && <p className="text-red-500 text-center mb-6">{error}</p>}

      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div
                key={product.id}
                className="relative bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg hover:bg-gray-400 hover:scale-105 transition-transform duration-300"
              >
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className="absolute top-2 right-2 text-black-400 hover:text-pink-600 transition"
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

                <div className="buttons flex gap-3">
                  <button
                    onClick={() => handleViewMore(product)}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    View More
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No Matching Products</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
