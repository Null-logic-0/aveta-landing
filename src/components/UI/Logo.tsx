import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="logo"
        width={100}
        className="h-auto"
        quality={80}
        priority
      />
    </Link>
  );
}

export default Logo;
