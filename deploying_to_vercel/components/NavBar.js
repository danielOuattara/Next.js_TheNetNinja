import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
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
    </nav>
  );
}
