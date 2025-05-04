import getBlogList from "@/core/services/api/blog/getBlogList";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "لیست بلاگ ها",
};

async function BlogList() {
  const list = await getBlogList({ page: 1, limit: 10 });

  return (
    <div>
      {list.data.posts.map((items) => {
        const { title, id } = items;
        return (
          <div key={id}>
            <Link href={`/blogs-details/${id}`}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
