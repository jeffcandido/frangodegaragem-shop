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
    desc: "",
    img: "/data/combos/p1.jpg",
    color: "white",
  },
  {
    id: 2,
    slug: "carnes",
    title: "Carnes",
    desc: "",
    img: "/data/carnes/p7.jpg",
    color: "black",
  },
  {
    id: 3,
    slug: "guarnicoes",
    title: "Guarnições",
    desc: ""    ,
    img: "/data/guarnicoes/p5.jpg",
    color: "black",
  },
  {
    id: 4,
    slug: "assados",
    title: "Assados",
    desc: "",
    img: "/data/assados/assado.jpeg",
    color: "white",
  },
];
