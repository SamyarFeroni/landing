// src/store/products/products.types.ts

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

export type ProductsState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};
