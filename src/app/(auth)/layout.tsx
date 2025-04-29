import { ReactNode } from "react";

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <div>خررررررر</div>
      {children}
    </div>
  );
}

export default RootLayout;
