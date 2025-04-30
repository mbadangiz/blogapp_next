import iranSans from "@/constant/iranSansFont";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "  بلاگ اپ | %s ",
    default: "بلاگ اپ",
  },
  description: "بنویس 📝، منتشر کن 🚀، دیده شو 🌟",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl">
      <body className={`${iranSans.variable}`}>{children}</body>
    </html>
  );
}
