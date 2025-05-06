import {
  IN_GetListOfBlogs,
  IN_PostListPostsApiResponse,
} from "@/types/interfaces";
import customFetchApi from "../../customFetchApi";

export default async function getBlogList(
  searchParams: IN_GetListOfBlogs,
): Promise<IN_PostListPostsApiResponse> {
  try {
    let query = "?";
    const searchKeys = Object.keys(searchParams) as (keyof IN_GetListOfBlogs)[];

    for (const key of searchKeys) {
      if (searchParams[key] !== undefined) {
        query += `${key}=${searchParams[key]}&`;
      }
    }
    const path = "/post/list" + query;

    const res = await customFetchApi(path, {
      cache: "no-cache",
    });
    return res;
  } catch (error) {
    console.log(error);
    throw Error("خطایی رخ داده است.");
  }
}
