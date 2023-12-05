import { ProductType } from "@/types/types";

export const assados: ProductType[] = [
  {
    id: 1,
    title: "Pernil Assado Decorado",
    desc: "Surpreenda seus convidados nesta ceia de Natal com o nosso Pernil Assado no Bafo, entregue de forma magnificamente decorada. Uma combinação de sabor irresistível e apresentação deslumbrante, para tornar seu momento festivo memorável e sem esforço.",
    img: "/data/assados/assado.jpeg",
    price: 440.0,
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
    desc: "Podemos temperar e assar as carnes que serão servidas na ceia de Natal da sua família. Peças de no máximo 8 kg",
    img: "/data/assados/p1.jpg",
    price: 24.0,
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
    desc: "Temos experiência em temperar e assar aves para a ceia de Natal. Peças de no máximo 3 kg",
    img: "/data/assados/p3.jpg",
    price: 22.0,
    options: [
      {
        title: "Kg",
        additionalPrice: 0,
      },
    ],
  },
  {
    id: 4,
    title: "APENAS ASSAR (AVES ou CARNES)",
    desc: "Se preferir, podemos assar suas peças de carne ou aves para a ceia de Natal. Carnes de no máximo 8 kg e Aves de no máximo 3 kg",
    img: "/data/assados/p4.jpg",
    price: 20.0,
    options: [
      {
        title: "Kg",
        additionalPrice: 0,
      },
    ],
  },
];
