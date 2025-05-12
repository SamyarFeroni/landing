"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold text-blue-600">
        🛒 فروشگاه من
      </Link>
      <nav className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          خانه
        </Link>
        <Link href="/products" className="text-gray-700 hover:text-blue-600">
          محصولات
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">
          درباره ما
        </Link>
      </nav>
    </header>
  );
}
