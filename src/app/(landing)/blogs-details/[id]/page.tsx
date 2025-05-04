import getBlogDetail from "@/core/services/api/blog/getBlogDetail";
import { IN_BlogDetailMetadataProps } from "@/types/interfaces";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: IN_BlogDetailMetadataProps): Promise<Metadata> {
  const { id } = await params;
  const data = await getBlogDetail(id);

  if (data) {
    return {
      title: data.title,
      description: data.briefText,
    };
  }

  return {
    title: "Temps",
  };
}

export default async function BlogDetail({
  params,
}: IN_BlogDetailMetadataProps) {
  const { id } = await params;

  const data = await getBlogDetail(id);

  return <div>{data.title}</div>;
}
