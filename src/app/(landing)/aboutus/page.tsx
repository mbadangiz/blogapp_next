import { Metadata } from "next";
import SiteData from "./../../../../package.json";

const data = Object.keys({
  ...SiteData.dependencies,
  ...SiteData.devDependencies,
});

export const metadata: Metadata = {
  title: "درباره ما",
};

function AboutUs() {
  return (
    <div dir="ltr">
      {data.map((items) => (
        <div key={items}>{items}</div>
      ))}
    </div>
  );
}

export default AboutUs;
