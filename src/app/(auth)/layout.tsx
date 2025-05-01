"use client";
import { ReactNode, useEffect, useState } from "react";
import bgImage from "./../../../public/image/bgImageLoginSignup.jpg";

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="grid h-svh w-full grid-cols-12 grid-rows-1">
      <div
        className="col-span-12 row-span-1 bg-cover bg-center bg-no-repeat md:col-span-5 lg:col-span-4"
        style={{
          backgroundImage: isMobile ? `url(${bgImage.src})` : "",
        }}
      >
        <div className="bg-primaryBlack/50 flex size-full content-center items-center backdrop-blur-[1.8px] *:text-white md:bg-inherit">
          <div className="mx-auto w-[95%] rounded-lg bg-white px-3 pt-5 pb-8 md:w-9/12 md:bg-inherit">
            {children}
          </div>
        </div>
      </div>
      {!isMobile && (
        <div
          className="row-span-1 hidden bg-cover bg-center bg-no-repeat md:col-span-7 md:block lg:col-span-8"
          style={{
            backgroundImage: `url(${bgImage.src})`,
          }}
        >
          <div className="bg-primaryBlack/50 flex size-full flex-col items-center justify-end py-20 text-white backdrop-blur-[1.8px]">
            <h2 className="text-5xl font-bold text-white">
              برای شروع به نوشتن، اول وارد شو.
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default RootLayout;
