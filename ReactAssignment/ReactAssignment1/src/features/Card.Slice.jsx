import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem('cart')) || {
  items: [],
  tempItems: [],
  totalPrice: 0,
};

const initialState = storedCart;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);


      localStorage.setItem('cart', JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

      localStorage.setItem('cart', JSON.stringify(state));
    },

    updateTempQuantity: (state, action) => {
      const tempItem = state.tempItems.find(item => item.id === action.payload.id);
      if (tempItem) {
        tempItem.quantity = action.payload.quantity;
      }


      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }

      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: (state) => {
      state.items = [];
      state.tempItems = [];
      state.totalPrice = 0;
      localStorage.removeItem('cart');
    }
  }
});


export const { addToCart, removeFromCart, updateTempQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
