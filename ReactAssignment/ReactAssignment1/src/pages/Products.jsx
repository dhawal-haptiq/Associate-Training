import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/Card.Slice';
import { addToWishlist } from '../features/Wishlist.Slice';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const searchItem = useSelector((state) => state.search.searchItem.toUpperCase());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const user = useSelector((state) => state.auth.user);
  
  
  const validCategories = ['mens-shirts', 'womens-dresses', 'womens-bags'];

  useEffect(() => {
    if (!categoryName || !validCategories.includes(categoryName)) {
      setError('Invalid category');
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          throw new Error('Invalid product data');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };


    fetchProducts();
  }, [categoryName]);

  useEffect(()=>{
    if(searchItem){
      const filteredItem = products.filter(product=>
        product.title.toUpperCase().includes(searchItem)
      );
      setFiltered(filteredItem);
      
    }else{
      setFiltered(products);
    }
  },[searchItem,products])

  const handleAddToCart = (product) => {
    if (!user) {
      alert('You must be logged in to add items to the cart.');
      navigate('/login');
      return;
    }

    const normalizedProduct = {
      ...product,
      image: product.images?.[0],
      quantity: 1,
    };

    dispatch(addToCart(normalizedProduct));
    alert(`${product.title} has been added to the cart!`);
  };

  const handleAddToWishlist = (product) => {
    if (!user) {
      alert('You must be logged in to add items to the wishlist.');
      navigate('/login');
      return;
    }

    const normalizedProduct = {
      ...product,
      image: product.images?.[0],
    };

    dispatch(addToWishlist(normalizedProduct));
    alert(`${product.title} has been added to the wishlist!`);
  };

  const handleViewMore = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
  // changing the heading 
  const formattedTitle = categoryName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">{formattedTitle} Collection</h1>

      {error && <p className="text-red-500 text-center mb-6">{error}</p>}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {!loading && !error && (
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
      <>
      <p>No Matching Products</p>
      </>
    )}
  </div>
)}

    </div>
  );
};

export default Products;
