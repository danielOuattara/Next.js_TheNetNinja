import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/ninja.png" width={120} height={120} alt="ninja logo" />
      </div>
      <Link href="/">
        <a> Home |</a>
      </Link>
      <Link href="/about">
        <a> About |</a>
      </Link>
      <Link href="/ninjas">
        <a> Ninja Listing |</a>
      </Link>
      <Link href="/ninjas/test">
        <a> Ninja Test</a>
      </Link>
    </nav>
  );
};

export default Navbar;
