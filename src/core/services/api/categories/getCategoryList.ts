import { IN_Category } from "@/types/interfaces";
import customFetchApi from "../../customFetchApi";

export async function getCategoriesList(): Promise<IN_Category[]> {
  try {
    const res = await customFetchApi("/category/list", { method: "get" });

    const {
      data: { categories },
    }: { data: { categories: IN_Category[] } } = res;

    return categories;
  } catch (error) {
    throw "خطایی رخ داده است.";
  }
}
