import Button from "@/core/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-11/12 pt-16 text-center">
      <h1 className="text-4xl leading-14 font-black lg:text-6xl lg:leading-22">
        بنویس 📝، منتشر کن 🚀، دیده شو 🌟
      </h1>
      <p className="text-gray mx-auto mt-10 text-[13px] lg:w-[750px] lg:text-base">
        سیستم تولید و انتشار مقالات ابزاری ساده و حرفه‌ای برای نویسندگان و
        تیم‌های محتواست که امکان نگارش، ویرایش، زمان‌بندی و انتشار مقاله را
        فراهم می‌کند. این پلتفرم با ویرایشگر پیشرفته، مدیریت دسته‌بندی و
        بهینه‌سازی سئو، فرآیند تولید محتوا را سریع و منظم می‌سازد. مناسب برای
        وب‌سایت‌های خبری، آموزشی و شخصی.
      </p>

      <Link href={"/create-blog"}>
        <Button className="hover:bg-primaryBlue-700 mx-auto mt-8 flex h-12 content-center items-center !rounded-full !px-10 !py-0 text-sm hover:-translate-y-1">
          شروع ماجراجویی 📄
        </Button>
      </Link>
    </div>
  );
}
