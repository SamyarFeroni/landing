"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/products/action";

const ProductsCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;
  console.log(products);
  // console.log(products);
  return <div className="py-6">ProductsCard</div>;
};

export default ProductsCard;
