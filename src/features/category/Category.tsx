"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/products/action";
import { Product } from "@/types/products";

const Category = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector<RootState, Product[]>(
    (state) => state.products.products
  );
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="flex flex-row gap-6 justify-start items-center">
      {categories.map((category) => (
        <div
          key={category}
          className="bg-[#00A75E] text-white text-sm p-2 justify-center items-center rounded-3xl"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
