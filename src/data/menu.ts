type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "combos",
    title: "Combos",
    desc: "Descricao para Combos Assados no Bafo",
    img: "/data/carnes/p3.jpg",
    color: "white",
  },
  {
    id: 2,
    slug: "carnes",
    title: "Carnes",
    desc: "Descricao para Carnes Assadas no Bafo",
    img: "/data/carnes/p3.jpg",
    color: "black",
  },
  {
    id: 3,
    slug: "guarnicoes",
    title: "Guarnições",
    desc: "Descricao para Guarnições",
    img: "/data/guarnicoes/p2.jpeg",
    color: "white",
  },
  {
    id: 4,
    slug: "assados",
    title: "Assados",
    desc: "Descricao para Assados",
    img: "/data/carnes/p5.jpg",
    color: "black",
  },
];
