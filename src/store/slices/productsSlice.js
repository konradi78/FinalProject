import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = 'http://localhost:3333/products/all'
const initialState = {
  products: [],
  status: null,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
    .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = "fulfilled";
          state.products = action.payload;
        })
    .addCase(fetchProducts.rejected, (state, action) => {
          state.status = "error";
          state.error = action.payload;
        })
   }
});

export default productsSlice.reducer;
