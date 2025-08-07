import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeFromCart, updateTempQuantity,clearCart } from '../features/Card.Slice'

const Cart = () => {
  const {items:cartItems,tempItems,totalPrice}=useSelector(state=>state.cart)
  // useSelector(state=>state.products);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  //handle remove item 
  const handleRemoveItem=(id)=>{
    dispatch(removeFromCart(id));
  }

  //handle update quantity
  const handleUpdateQuanity=(id,quantity)=>{
    dispatch(updateTempQuantity({id,quantity})) //entire value will be passed to payload
      
  }
  
  //handle update
  // const handleUpdateApply=()=>{
  //   tempItems.forEach((item)=>{
  //      console.log(item);
  //   })
  // }

  //hanlde cart clear
  const handleCartClear=()=>{
    dispatch(clearCart());
    alert("Cart has been cleared");
    // navigate("/");
  }

  const handlePlaceOrder = () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty. Please add items before placing an order.");
    return;
  }
  alert("Order placed successfully!");
  dispatch(clearCart());
  navigate("/");
};

  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

        {/* Cart Item */}
       {
         cartItems.map((item)=>(  
            <div className="bg-white shadow-md rounded-lg p-6 flex gap-6 items-center mb-6" key={item.id}>
          <img
            src={item.image}
            alt="Product"
            className="w-24 h-24 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mb-3">Price: ${item.price}</p>
            <div className="flex items-center gap-4">
              <input
                type="number" 
                min={1}
                value={tempItems.find((tempItem)=>tempItem.id===item.id)?.quantity || item.quantity}
                onChange={(e) => handleUpdateQuanity(item.id, parseInt(e.target.value))}
                className="w-20 px-2 py-1 border border-gray-300 rounded"
              />
              {/* <button onClick={handleUpdateApply} className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                Update
              </button> */}
              <button onClick={()=>handleRemoveItem(item.id)} className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                Remove
              </button>
            </div>
          </div>
        </div>
         ))
       } 

        {/* Cart Total */}
        <div className="bg-white shadow-sm rounded-lg p-4 mb-6 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-700">
          <p>Total: {totalPrice}</p>
          </div>
        </div>
       <div className="cartButtons flex gap-6 items-center">
        {/* Back to Shopping Button */}
        <button onClick={()=>navigate("/")} className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900">
          Back to Shopping
        </button>
          <button onClick={handlePlaceOrder} className={`px-6 py-3 rounded text-white ${
    cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-900'
  }`}>
          Place Order
        </button>
        <button onClick={handleCartClear} className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900">
          Clear
        </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
