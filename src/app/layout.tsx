// src/app/layout.tsx

import React from "react";
import ReduxProvider from "@/lib/redux-provider";
import "@/styles/globals.css"
import AppLayout from "@/components/AppLayout";

export const metadata = {
  title: "شگفت‌انگیز",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ReduxProvider>
          <AppLayout>{children}</AppLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
