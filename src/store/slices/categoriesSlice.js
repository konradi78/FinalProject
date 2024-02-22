import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = 'http://localhost:3333/categories/all'
const initialState = {
  categories: [],
  status: null,
  error: null,
};

export const fetchCategories= createAsyncThunk(
  "categories/fetchCategories",
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

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder
    .addCase(fetchCategories.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
    .addCase(fetchCategories.fulfilled, (state, action) => {
          state.status = "fulfilled";
          state.categories = action.payload;
        })
    .addCase(fetchCategories.rejected, (state, action) => {
          state.status = "error";
          state.error = action.payload;
        })
   }
});

export default categoriesSlice.reducer;
