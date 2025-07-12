// src/store/products/products.slice.ts
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "@/store/products/action";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductsState, Product } from "@/types/products";

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "خطا در دریافت محصولات";
      });
  },
});

export default productsSlice.reducer;
