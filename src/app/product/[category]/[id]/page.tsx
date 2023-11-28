import Price from "@/components/Price";
import { allProducts } from "@/data";
import Image from "next/image";
import React from "react";

export const generateStaticParams = async () => {
  const categories = Object.keys(allProducts);
  return categories
    .map((category) => {
      return allProducts[category as keyof typeof allProducts].map(
        (product) => ({ category: category, id: product.id.toString() })
      );
    })
    .flat(1);
};

export default function SingleProductPage(props: any) {
  const category: string = props.params.category;
  const productId: number = props.params.id;

  const singleProduct = allProducts[
    category as keyof typeof allProducts
  ].filter((product) => product.id == productId)[0];

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center relative">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            priority={true}
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase">
          <span>{singleProduct.title}</span>
        </h1>
        <p>{singleProduct.desc}</p>
        <Price product={singleProduct} />
      </div>
    </div>
  );
}
