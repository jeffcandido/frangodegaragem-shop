import { ProductType } from "@/types/types";

export const assados: ProductType[] = [
  {
    id: 1,
    title: "Pernil",
    desc: "Descricao para o pernil.",
    img: "/data/assados/p1.jpg",
    price: 380.0,
    options: [
      {
        title: "7 Kg",
        additionalPrice: 0,
      },
    ],
  },
  {
    id: 2,
    title: "ASSAR E TEMPERAR CARNES",
    desc: "Descricao para ASSAR E TEMPERAR CARNES",
    img: "/data/assados/p1.jpg",
    price: 15.0,
    options: [
      {
        title: "Kg",
        additionalPrice: 0,
      },
    ],
  },
  {
    id: 3,
    title: "ASSAR E TEMPERAR AVES",
    desc: "Descricao para ASSAR E TEMPERAR AVES",
    img: "/data/assados/p1.jpg",
    price: 14.0,
    options: [
      {
        title: "Kg",
        additionalPrice: 0,
      },
    ],
  },
];
