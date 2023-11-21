import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-600 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl uppercase">
        Frango de Garagem
      </Link>
      <p>© Todos os direitos reservados</p>
    </div>
  );
}
