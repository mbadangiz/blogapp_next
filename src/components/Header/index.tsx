import Image from "next/image";
import logo from "./../../app/icon.png";
import Nav from "./Nav";
import ProfileButton from "./ProfileButton";

function Header() {
  return (
    <header className="h-16 w-full">
      <nav className="container mx-auto flex h-full content-center items-center justify-between">
        <Image src={logo} alt="Logo" className="size-10" />
        <Nav />
        <ProfileButton />
      </nav>
    </header>
  );
}

export default Header;
