"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Cada detalhe pensado para alegrar o seu paladar",
    image: "/data/carnes/p9.png",
  },
  {
    id: 2,
    title: "A melhor opção para aproveitar os momentos com a sua família",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "Feito com amor, da nossa família para a sua",
    image: "/data/assados/assado.jpeg",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((previous) =>
          !!(previous === data.length - 1) ? 0 : previous + 1
        ),
      4000
    );
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row border-gray-900 bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 rounded-md">
          Fazer meu pedido
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative p-4">
        <Image
          src={data[currentSlide].image}
          alt={data[currentSlide].title}
          fill
          priority={true}
          className="object-cover"
        />
      </div>
    </div>
  );
}
