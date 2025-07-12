// src/app/not-found.tsx
"use client";

import { useState } from "react";

export default function NotFound() {
  const [token] = useState<string | null>(null);
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-500">صفحه‌ای که دنبالشی پیدا نشد.</p>
      {token && <p className="mt-2 text-sm">توکن: {token}</p>}
    </div>
  );
}
