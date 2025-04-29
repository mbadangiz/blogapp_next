import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خانه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="container mx-auto"> {children}</div>
    </>
  );
}
