"use client";

import "./globals.css";
import useToastStore from "@/store/toastStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { showToast } from "@/helpers/toastHelper";
import ReactQueryProvider from "@/providers/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { message, type, clearToast } = useToastStore();

  useEffect(() => {
    if (message && type) {
      showToast(message, type);
      clearToast();
    }
  }, [message, type, clearToast]);

  return (
    <html lang="en">
      <body className="bg-[#f6f7fe]">
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
