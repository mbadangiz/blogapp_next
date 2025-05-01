"use client";
import { IN_NavItem } from "@/types/interfaces";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const NavItems: IN_NavItem[] = [
  {
    id: 1,
    title: "خانه",
    path: "/",
  },
  {
    id: 2,
    title: "بلاگ ها",
    path: "/blogs",
  },
  {
    id: 3,
    title: "درباره ما",
    path: "/aboutus",
  },
];

function Nav() {
  const currentPath = usePathname();

  const [isShow, setIsShow] = useState<Boolean>(false);
  const isShowToggle = () => setIsShow((prev) => !prev);

  return (
    <div className="order-1 lg:order-2">
      <div className="block lg:hidden" onClick={isShowToggle}>
        <Bars3BottomRightIcon className="text-primaryBlack size-7 cursor-pointer" />
      </div>
      <div
        className={` ${isShow ? "right-0" : "-right-full"} fixed top-0 flex h-svh w-full flex-col gap-3.5 bg-white/40 px-3 py-3 backdrop-blur-sm transition-all delay-300 duration-500 lg:static lg:h-auto lg:w-max lg:flex-row lg:content-center lg:items-center lg:bg-inherit lg:p-0`}
      >
        <div className="flex content-center items-center justify-between lg:hidden">
          <p className="font-bold">منو مورد نظر را انتخاب کنید:</p>
          <XMarkIcon
            className="text-primaryBlack size-5 cursor-pointer"
            onClick={isShowToggle}
          />
        </div>

        {NavItems.map((item) => {
          const { title, id, path } = item;
          return (
            <Link href={path} key={id}>
              <div
                className={clsx(
                  "list-none p-1 text-sm opacity-80 lg:text-base",
                  {
                    "font-bold opacity-100":
                      (path === "/" && currentPath === "/") ||
                      (path !== "/" && currentPath.startsWith(path)),
                  },
                )}
                onClick={function () {
                  if (window.innerWidth < 1024) isShowToggle();
                }}
              >
                {title}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
