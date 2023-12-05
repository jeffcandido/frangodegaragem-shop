"use client";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React, { useEffect } from "react";

export default function CartPage() {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    try {
      const cart = products.map(
        (item) => `${item.quantity} x (${item.optionTitle}) x ${item.title}`
      );
      const cartMessage = [
        "Olá, gostaria de fazer o meu pedido de Natal 🌲🎅🏼:%0a",
        ...cart,
      ].join("%0a");

      window.open(
        `https://api.whatsapp.com/send?phone=5534999819129&text=${cartMessage}`,
        "_blank",
        "noopener"
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        {products.map((item) => (
          <div
            className="flex items-center justify-between mb-4"
            key={`${item.id}-${item.optionTitle}`}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={100}
                height={100}
                priority={true}
              />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">
                {item.quantity} x - {item.title}
              </h1>
              <span>
                {item.optionTitle} - R$ {item.price / item.quantity}
              </span>
            </div>
            <h1 className="text-xl font-bold">R$ {item.price}</h1>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <button
          className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end"
          onClick={handleCheckout}
        >
          Fazer meu pedido
        </button>
      </div>
    </div>
  );
}
