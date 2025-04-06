import { createSlice } from "@reduxjs/toolkit";
import { apiRequests } from "../../Services/Axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await apiRequests.get("/products");
  return response.data;
});

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  const response = await apiRequests.get("/categories");
  return response.data;
});

export const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    selectedCategory: "",
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { selectCategory } = slice.actions;

export default slice.reducer;
