import { ActionTypes, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart(item) {
        const products = get().products;
        const productInState = products.find(
          (product) =>
            `${product.id}-${product.optionTitle}` ==
            `${item.id}-${item.optionTitle}`
        );

        if (!!productInState) {
          const updatedProducts = products.map((product) => {
            if (
              `${product.id}-${product.optionTitle}` ==
              `${productInState.id}-${productInState.optionTitle}`
            ) {
              return {
                ...item,
                quantity: item.quantity + product.quantity,
                price: item.price + product.price,
              };
            }
            return item;
          });
          set((state) => ({
            products: updatedProducts,
            totalItems: updatedProducts.length,
            totalPrice: updatedProducts.reduce(
              (acc, product) => acc + product.price,
              0
            ),
          }));
        } else {
          set((state) => {
            const productsState = [...state.products, item];

            return {
              products: productsState,
              totalItems: productsState.length,
              totalPrice: productsState.reduce(
                (acc, product) => acc + product.price,
                0
              ),
            };
          });
        }
      },
      removeFromCart(item) {
        const products = get().products;
        const updatedProducts = products.filter(
          (product) =>
            `${product.id}-${product.optionTitle}` !=
            `${item.id}-${item.optionTitle}`
        );
        set((state) => ({
          products: updatedProducts,
          totalItems: updatedProducts.length,
          totalPrice: updatedProducts.reduce(
            (acc, product) => acc + product.price,
            0
          ),
        }));
      },
    }),
    { name: "cart", skipHydration: true }
  )
);
