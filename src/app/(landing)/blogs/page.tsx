import Chip from "@/core/components/chip";
import Waiting from "@/core/components/Waiting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "لیست بلاگ ها",
};
function BlogList() {
  return (
    <div>
      <Chip text="This is Some thing" />
      {/* <Waiting /> */}
    </div>
  );
}

export default BlogList;
