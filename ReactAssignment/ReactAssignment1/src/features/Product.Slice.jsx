import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } 
);
const productSlice = createSlice({
    name: "product",
    initialState: {
        items: [],
        status: "idle", // idle | loading | succeeded | failed
},
extraReducers: (builder) => {
    builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            // Add any fetched products to the array
            state.items = action.payload; //will get access to all products
            console.log(state.items); // Log the products to the console
        })
        .addCase(fetchProducts.rejected, (state) => {
            state.status = 'failed';
        });
  },
})

export default productSlice.reducer;