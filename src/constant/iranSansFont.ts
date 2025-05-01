import localFont from "next/font/local";

const iranSans = localFont({
  src: [
    {
      path: "./../../public/fonts/iransans/IRANSansWeb(FaNum).woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./../../public/fonts/iransans/IRANSansWeb(FaNum)_Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./../../public/fonts/iransans/IRANSansWeb(FaNum)_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../public/fonts/iransans/IRANSansWeb(FaNum)_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../public/fonts/iransans/IRANSansWeb(FaNum)_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/iransans/IRANSansWeb(FaNum)_UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  display: "block",
  variable: "--fonts-iransans",
});

export default iranSans;
