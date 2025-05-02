"use client";
import Chip from "@/core/components/chip";
import { IN_Category } from "@/types/interfaces";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CategoryList({ categories }: { categories: IN_Category[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex h-16 gap-x-2 gap-y-4 overflow-x-auto pt-4 md:h-auto lg:flex-wrap">
      <li>
        <Link href={`/blogs`}>
          <Chip
            text={"همه"}
            color={pathname === "/blogs" ? "danger" : "primary"}
          />
        </Link>
      </li>
      {categories.map((items) => {
        const { slug, _id, title } = items;
        const href = `/blogs/categories/${slug}`;
        return (
          <li key={_id} className="shrink-0">
            <Link href={href} className={clsx("text-sm")}>
              <Chip
                text={title}
                color={pathname === href ? "danger" : "primary"}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;
