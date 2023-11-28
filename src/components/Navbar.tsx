import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-12 text-red-600 p-4 flex items-center justify-between border-b-2 border-b-red-600 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* { LEFT LINKS } */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Início</Link>
        <Link href="/natal">Cardápio de Natal</Link>
      </div>
      {/* { LOGO } */}
      <div className="text-xl md:font-bold  flex-1 md:text-center">
        <Link href="/">Frango de Garagem</Link>
      </div>
      {/* { MOBILE MENU } */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* { RIGHT LINKS } */}
      <div className="hidden md:flex gap-4 items-center justify-content-end flex-1">
        <div className="md:absolute whitespace-nowrap top-3 r-2 lg:static flex items-center cursor-pointer bg-orange-300 px-6 rounded-md">
          <Image src="/phone.png" alt="Telefone 1" width={20} height={20} priority={true} />
          <span>(31) 3234-0338</span>
        </div>
        <div className="md:absolute whitespace-nowrap top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-6 rounded-md">
          <Image src="/phone.png" alt="Telefone 2" width={20} height={20} priority={true} />
          <span>(31) 99744-6636</span>
        </div>

        <CartIcon />
      </div>
    </div>
  );
}
