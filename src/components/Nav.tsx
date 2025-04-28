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
    icons: <HomeIcon className="size-5" />,
  },
  {
    id: 2,
    title: "بلاگ ها",
    path: "/blogs",
    icons: <NewspaperIcon className="size-5" />,
  },
];

function Nav() {
  const currentPath = usePathname();
  return (
    <ul className="flex content-center items-center gap-4">
      {NavItems.map((item) => {
        const { title, icons, id, path } = item;
        return (
          <Link href={path} key={id}>
            <li
              className={clsx(
                "flex cursor-pointer content-center items-center gap-2",
                {
                  "text-blue-800": currentPath === path,
                },
              )}
            >
              {icons}
              <p className={clsx("font-semibold")}>{title}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Nav;
