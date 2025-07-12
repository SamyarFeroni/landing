// src/store/products/products.actions.ts
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type { Product } from "@/types/products"

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
  }
)

// اگر اکشن sync میخوای میتونی اینجا با createAction هم تعریف کنی
// import { createAction } from "@reduxjs/toolkit"
// export const clearProducts = createAction("products/clearProducts")
