"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store"; // مسیر دقیق فایل store.ts شما
import { getPageComponents } from "@/store/pageComponents/action";

const Category = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPageComponents());
  }, [dispatch]);
  return (
    <div className="flex flex-row  gap-6 justify-start items-center">
      <div className="bg-[#00A75E] flex text-white text-sm p-2  justify-center items-center rounded-3xl">
        test
      </div>
    </div>
  );
};

export default Category;
