import localFont from "next/font/local";

const iranSans = localFont({
  src: [
    {
      path: "./../../public/fonts/iransans/IRANSansWeb.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./../../public/fonts/iransans/IRANSansWeb_Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./../../public/fonts/iransans/IRANSansWeb_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../public/fonts/iransans/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../public/fonts/iransans/IRANSansWeb_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/iransans/IRANSansWeb_UltraLight.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  display: "block",
  variable: "--fonts-iransans",
});

export default iranSans;
