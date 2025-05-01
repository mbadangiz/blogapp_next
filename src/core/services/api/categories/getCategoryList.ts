import { IN_Category } from "@/types/interfaces";
import fetchGet from "../../fetchGet";

export async function getCategoriesList(): Promise<IN_Category[]> {
  const res = await fetchGet("/category/list", { method: "get" });

  const {
    data: { categories },
  }: { data: { categories: IN_Category[] } } = res;

  return categories;
}
