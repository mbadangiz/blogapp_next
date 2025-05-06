import Image from "next/image";
import logo from "./../../app/icon.png";
import Nav from "./Nav";
import ProfileButton from "./ProfileButton";

function Header() {
  return (
    <header className="left-00 *: border-b-gray/5 sticky top-0 z-50 h-16 w-full border-b-[1.2px] border-solid bg-white/80 backdrop-blur">
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
