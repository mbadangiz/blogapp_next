import Chip from "@/core/components/chip";
import { getCategoriesList } from "@/core/services/api/categories/getCategoryList";
import clsx from "clsx";
import Link from "next/link";

export default async function BlogCategories() {
  const categories = await getCategoriesList();

  return (
    <div className="col-span-12 px-2 lg:col-span-3 lg:px-0 xl:col-span-2">
      <h2 className="font-bold">انتخاب اساس دسته بندی:</h2>
      <ul className="flex h-16 gap-x-2 gap-y-4 overflow-x-auto pt-4 md:h-auto lg:flex-wrap">
        <li>
          <Link href={`/blogs`}>
            <Chip text={"همه"} />
          </Link>
        </li>
        {categories.map((items) => {
          const { slug, _id, title } = items;
          return (
            <li key={_id} className="shrink-0">
              <Link
                href={`/blogs/categories/${slug}`}
                className={clsx("text-sm")}
              >
                <Chip text={title} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
