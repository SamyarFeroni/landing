// src/features/products/index.tsx

import ProductCard from "./components/ProductsCard";

const dummyProducts = [
  { title: "کفش نایک", price: 1200000 },
  { title: "تی‌شرت", price: 250000 },
];

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      {dummyProducts.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}
