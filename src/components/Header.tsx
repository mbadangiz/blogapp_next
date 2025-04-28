import Image from "next/image";
import logo from "./../app/icon.png";
import Nav from "./Nav";

function Header() {
  return (
    <header className="h-16 w-full">
      <nav className="container mx-auto flex h-full content-center items-center justify-between">
        <div>2</div>
        <Nav />
        <Image src={logo} alt="Logo" className="size-10" />
      </nav>
    </header>
  );
}

export default Header;
