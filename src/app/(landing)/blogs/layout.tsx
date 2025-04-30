function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid w-full grid-cols-12 py-3">
      <div className="col-span-12 bg-amber-500 px-2 lg:col-span-3 lg:px-0 xl:col-span-2">
        ccassa
      </div>
      <div className="col-span-12 bg-sky-600 px-2 lg:col-span-9 lg:px-0 xl:col-span-10">
        <div>somethings</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
