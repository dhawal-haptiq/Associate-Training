import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
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
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
})

export default productSlice.reducer;