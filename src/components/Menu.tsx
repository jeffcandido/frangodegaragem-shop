"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Início", url: "/" },
  { id: 2, title: "Cardápio de Natal", url: "/natal" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="Menu"
          height={20}
          width={20}
          priority={true}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Menu"
          height={20}
          width={20}
          priority={true}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-600 text-yellow-50 absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((link) => (
            <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}
