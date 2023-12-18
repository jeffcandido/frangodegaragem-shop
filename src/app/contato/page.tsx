"use client";

import React, { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(
        `https://api.whatsapp.com/send?phone=5531997446636&text=Olá, gostaria de fazer o meu pedido de Natal 🌲🎅🏼:%0a`
      );
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="h-12 bg-green-600 font-bold text-yellow-50 px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer">
      DIRECIONANDO PARA O WHATSAPP. . .
    </div>
  );
}
