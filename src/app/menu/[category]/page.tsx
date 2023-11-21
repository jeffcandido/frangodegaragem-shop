import React from "react";


export const generateStaticParams = async () => {
  const categories = [{slug: "burguers"}, {slug: "pizzas"}]
  return categories.map((category) => ({
    category: category.slug,
  }));
};

export default function CategoryPage() {
  return (
    <div>Category Page</div>
  )
}
