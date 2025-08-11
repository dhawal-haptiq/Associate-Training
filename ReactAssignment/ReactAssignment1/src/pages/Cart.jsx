import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateTempQuantity, clearCart } from '../features/Card.Slice';
import { toast, ToastContainer } from 'react-toastify';

const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

const Cart = () => {
  const { items: cartItems, tempItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.info('Item removed from cart');
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateTempQuantity({ id, quantity }));
    toast.success('Quantity updated');
  };

  const handleCartClear = () => {
    if (cartItems.length === 0) {
      toast.info("Cart is already empty.");
      return;
    }
    dispatch(clearCart());
    toast.success('Cart has been cleared');
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty. Please add items before placing an order.');
      return;
    }
    dispatch(clearCart());
    toast.success('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">Your cart is empty.</div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 flex gap-6 items-center mb-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-3">Price: ${item.price}</p>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min={1}
                    value={
                      tempItems.find((tempItem) => tempItem.id === item.id)?.quantity ||
                      item.quantity
                    }
                    onChange={(e) =>
                      handleUpdateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-20 px-2 py-1 border border-gray-300 rounded"
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Show total only if there are items */}
        {cartItems.length > 0 && (
          <div className="bg-white shadow-sm rounded-lg p-4 mb-6 flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">
              <p>Total: {formatCurrency(totalPrice)}</p>
            </div>
          </div>
        )}

        {/* Always show buttons */}
        <div className="cartButtons flex gap-6 items-center">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Back to Shopping
          </button>
          <button
            onClick={handlePlaceOrder}
            className={`px-6 py-3 rounded text-white ${cartItems.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gray-800 hover:bg-gray-900'
              }`}
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>
          <button
            onClick={handleCartClear}
            className={`px-6 py-3 rounded text-white ${cartItems.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700'
              }`}
            disabled={cartItems.length === 0}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
