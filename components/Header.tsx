import LogoBlack from "@assets/imgs/logo-black.png";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const links = [
  {
    name: "Characters",
    href: "/",
  },
  {
    name: "Locations",
    href: "/locations",
  },
  {
    name: "episodes",
    href: "/episodes",
  },
];

export default function Header() {
  return (
    <header className="shadow-md sticky z-10 top-0 w-full bg-white">
      <nav className="flex max-w-screen-lg w-full mx-auto my-auto justify-between p-1.5">
        <Link href="/">
          <Image
            src={LogoBlack}
            width={46}
            height={49}
            alt="Rick and morty persons"
          />
        </Link>
        <ul className="flex gap-4 items-center ">
          {links.map(({ name, href }) => (
            <Link key={name} href={href} className="font-bold">
              {name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
