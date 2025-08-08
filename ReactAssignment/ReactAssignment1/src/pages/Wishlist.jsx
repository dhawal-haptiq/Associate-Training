import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromWishlist, clearWishlist } from '../features/Wishlist.Slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wishlist = () => {
  const { items: wishlistItems } = useSelector(state => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    dispatch(removeFromWishlist(id));
    toast.info('Item removed from wishlist');
  };

  const handleClearWishlist = () => {
    if (wishlistItems.length === 0) {
      toast.info("Wishlist is already empty.");
      return;
    }
    dispatch(clearWishlist());
    toast.success('Wishlist cleared!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Wishlist</h2>

        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item) => (
            <div
              className="bg-white shadow-md rounded-lg p-6 flex gap-6 items-center mb-6"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-3">Price: ${item.price}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => navigate('/cart')}
                    className="px-4 py-1 bg-black text-white rounded hover:bg-blue-700"
                  >
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Always show buttons */}
        <div className="flex gap-6 justify-center mt-6">
          <button
            onClick={handleClearWishlist}
            className={`px-6 py-3 rounded text-white ${
              wishlistItems.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gray-800 hover:bg-gray-900'
            }`}
            disabled={wishlistItems.length === 0}
          >
            Clear Wishlist
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
