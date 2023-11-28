import { allProducts } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const generateStaticParams = async () => {
  const categories = Object.keys(allProducts);
  return categories.map((category) => ({
    category: category,
  }));
};

export default function CategoryPage(props: any) {
  const category: string = props.params.category;
  return (
    <div className="flex flex-wrap text-red-500">
      {allProducts[category as keyof typeof allProducts].map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/product/${category}/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" priority={true} fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">R$ {item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Adicionar ao Carrinho
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
