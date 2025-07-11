// src/app/page.tsx

import { Category, ProductsCard } from "@/features";

export default function HomePage() {
  return (
    <div className="p-8">
      <div className="text-3xl font-bold">
        <Category />
        <ProductsCard />
      </div>
    </div>
  );
}
