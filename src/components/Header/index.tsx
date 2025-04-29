import Image from "next/image";
import logo from "./../../app/icon.png";
import Nav from "./Nav";
import ProfileButton from "./ProfileButton";

function Header() {
  return (
    <header className="h-16 w-full">
      <nav className="container mx-auto flex h-full content-center items-center">
        <div className="flex-1">
          <Image src={logo} alt="Logo" className="size-10" />
        </div>
        <Nav />
        <div className="flex flex-1 justify-end">
          <ProfileButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
