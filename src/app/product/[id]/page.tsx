import React from "react";


export const generateStaticParams = async () => {
  const products = [{id: "1"}, {id: "2"}]
  return products.map((product) => ({
    id: product.id,
  }));
};


export default function SingleProductPage() {
  return (
    <div>Single Product Page</div>
  )
}
