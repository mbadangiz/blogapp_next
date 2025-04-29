"use client";
import { IN_NavItem } from "@/types/interfaces";
import { HomeIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems: IN_NavItem[] = [
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

  return (
    <div className="flex content-center items-center justify-center gap-3.5">
      {NavItems.map((item) => {
        const { title, id, path } = item;
        return (
          <Link href={path} key={id}>
            <div
              className={clsx("list-none p-1 opacity-80", {
                "font-bold opacity-100": currentPath === path,
              })}
            >
              {title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Nav;
