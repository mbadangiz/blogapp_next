import Header from "@/components/Header";
import Button from "@/core/components/button";
import Link from "next/link";

function NotFound() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-2 pt-4 lg:p-0">
        <div className="flex w-full content-center items-center justify-center font-bold">
          <p className="text-[130px] lg:text-[250px]">4</p>
          <p className="text-[60px] lg:text-[150px]">😔</p>
          <p className="text-[130px] lg:text-[250px]">4</p>
        </div>
        <div className="flex w-full flex-col content-start items-center gap-3 text-sm font-medium lg:-mt-14 lg:text-xl">
          <p> ای وایییی! این صفحه راهشو گم کرده...</p>
          <p>یا پاک شده، یا هیچ‌وقت وجود نداشته!</p>
        </div>
        <div className="text-center">
          <Link href={"/"}>
            <Button className="hover:bg-primaryBlue-700 mx-auto mt-8 !rounded-full !px-12 hover:-translate-y-2">
              برگرد به صفحه اول
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
