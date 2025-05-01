import BlogCategories from "./_components/blogCategories";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid w-full grid-cols-12 pt-5">
      <BlogCategories />
      <div className="col-span-12 px-2 lg:col-span-9 lg:px-0 xl:col-span-10">
        <div>somethings</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
