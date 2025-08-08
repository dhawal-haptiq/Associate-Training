import { createSlice } from '@reduxjs/toolkit';
const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || {
  items: [],
};

const initialState = storedWishlist;
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('wishlist', JSON.stringify(state)); // Save entire state
      }
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state));
    },

    clearWishlist: (state) => {
      state.items = [];
      localStorage.removeItem('wishlist');
    }
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
