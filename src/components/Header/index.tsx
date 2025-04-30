import Image from "next/image";
import logo from "./../../app/icon.png";
import Nav from "./Nav";
import ProfileButton from "./ProfileButton";

function Header() {
  return (
    <header className="h-16 w-full">
      <nav className="container mx-auto flex h-full content-center items-center justify-between px-2 lg:px-0">
        <div className="order-2 lg:flex-1">
          <Image src={logo} alt="Logo" className="size-10" />
        </div>
        <Nav />
        <div className="order-2 flex justify-end lg:flex-1">
          <ProfileButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
