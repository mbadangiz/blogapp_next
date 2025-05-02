import Waiting from "@/core/components/Waiting";
import { Suspense } from "react";
import BlogCategories from "./blogCategories";

function FilteringArea() {
  return (
    <div className="col-span-12 px-2 lg:col-span-3 lg:px-0 xl:col-span-2">
      <Suspense fallback={<Waiting />}>
        <BlogCategories />
      </Suspense>
    </div>
  );
}

export default FilteringArea;
