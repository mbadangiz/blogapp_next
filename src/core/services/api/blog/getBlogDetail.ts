import { IN_BlogDetail } from "@/types/interfaces";
import fetchGet from "../../fetchGet";

export default async function getBlogDetail(
  params: string,
): Promise<IN_BlogDetail> {
  try {
    const path = "/post/" + params;
    const res = await fetchGet(path);
    return res;
  } catch (error) {
    console.log(error);
    throw Error("خطلایی رخ داده است");
  }
}
