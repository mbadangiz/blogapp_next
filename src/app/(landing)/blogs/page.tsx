import Chip from "@/core/components/chip";
import getBlogList from "@/core/services/api/blog/getBlogList";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "لیست بلاگ ها",
};

async function BlogList() {
  const list = await getBlogList({ page: 1, limit: 10 });

  return (
    <div className="grid grid-cols-12 gap-5">
      {list.data.posts.map((items) => {
        const {
          title,
          id,
          coverImageUrl,
          author: { name: authorName, avatarUrl },
          category: { title: categoryName },
        } = items;
        return (
          <Link
            href={`/blogs-details/${id}`}
            key={id}
            className="border-gray/10 col-span-4 block h-[420px] space-y-4 rounded-xl border-2 border-solid p-2"
          >
            <div className="relative h-48 w-full overflow-auto rounded-xl">
              <Image
                src={coverImageUrl}
                fill
                alt={title}
                className="rounded-xl object-cover object-center"
              />
            </div>
            <h3 className="font-bold">{title}</h3>
            <div className="flex content-center items-center gap-3">
              <div className="relative size-8 rounded-full border-2">
                <Image
                  src={avatarUrl}
                  alt={authorName}
                  fill
                  className="rounded-full object-cover object-center"
                />
              </div>
              <p className="text-[15px]">{authorName}</p>
            </div>
            <Chip color="warning" text={categoryName} />
            <div className="hr"></div>
            <p className="text-primaryBlue font-extrabold">مشاهده جزئیات</p>
          </Link>
        );
      })}
    </div>
  );
}

export default BlogList;
