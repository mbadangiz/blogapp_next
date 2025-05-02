import { getCategoriesList } from "@/core/services/api/categories/getCategoryList";
import CategoryList from "./categoryList";

export default async function BlogCategories() {
  const message = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("عملیات با موفقیت انجام شد.");
    }, 3000);
  });
  console.log(message);
  
  const categories = await getCategoriesList();

  return (
    <>
      <h2 className="font-bold">انتخاب اساس دسته بندی:</h2>
      <CategoryList categories={categories} />
    </>
  );
}
