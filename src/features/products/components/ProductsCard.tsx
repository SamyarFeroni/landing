// src/features/products/components/ProductCard.tsx

type ProductCardProps = {
  title: string;
  price: number;
};

export default function ProductCard({ title, price }: ProductCardProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{price} تومان</p>
    </div>
  );
}
