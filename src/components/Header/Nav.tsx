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
];

function Nav() {
  const currentPath = usePathname();

  return (
    <ul className="flex content-center items-center gap-3.5">
      {NavItems.map((item) => {
        const { title, id, path } = item;
        return (
          <Link href={path} key={id}>
            <li
              className={clsx("p-1 opacity-80", {
                "font-bold opacity-100": currentPath === path,
              })}
            >
              {title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Nav;
