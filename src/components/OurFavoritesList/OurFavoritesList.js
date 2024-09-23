// ProductList.js
import React from "react";

import ProductList from "../ProductList/ProductList";

const products = [
  {
    id: "1",
    image: "/assets/images/Products/cardItem1.webp",
    hoverImage: "/assets/images/Products/cardItem1hover.webp",
    title: "Vittoriosa Bieb Statement Dangling Earrings",
    price: 50.84,
    buttonText: "ADD TO CART",
  },
  {
    id: "2",
    image: "/assets/images/Products/cardItem1.webp",
    title: "Vittoriosa Bieb Pendant",
    price: 29.65,
    buttonText: "ADD TO CART",
    review: { point: 4.5, count: 1 },
  },
  {
    id: "3",
    image: "/assets/images/Products/cardItem1.webp",
    hoverImage: "/assets/images/Products/cardItem1hover.webp",
    title: "Vittoriosa Bieb Bangle",
    price: 55.08,
    buttonText: "CHOOSE AN OPTION",
  },
  {
    id: "4",
    image: "/assets/images/Products/cardItem1.webp",
    hoverImage: "/assets/images/Products/cardItem1hover.webp",
    title: "Fleur De Lis Muftieh Necklace",
    price: 29.65,
    buttonText: "ADD TO CART",
  },
  {
    id: "5",
    image: "/assets/images/Products/cardItem1.webp",
    hoverImage: "/assets/images/Products/cardItem1hover.webp",
    title: "Vittoriosa Bieb Statement Dangling Earrings",
    price: 50.84,
    buttonText: "ADD TO CART",
  },
  {
    id: "6",
    image: "/assets/images/Products/cardItem1.webp",
    hoverImage: "/assets/images/Products/cardItem1hover.webp",
    title: "Vittoriosa Bieb Pendant",
    price: 29.65,
    buttonText: "ADD TO CART",
    review: { point: 5, count: 2 },
  },
  {
    id: "7",
    image: "/assets/images/Products/cardItem1.webp",
    hoverImage: "/assets/images/Products/cardItem1hover.webp",
    title: "Vittoriosa Bieb Bangle",
    price: 55.08,
    buttonText: "CHOOSE AN OPTION",
  },
  {
    id: "8",
    image: "/assets/images/Products/cardItem1.webp",
    hoverImage: "/assets/images/Products/cardItem1hover.webp",
    title: "Fleur De Lis Muftieh Necklace",
    price: 29.65,
    buttonText: "ADD TO CART",
    review: { point: 4, count: 10 },
  },
];

const OurFavoritesList = () => {
  return <ProductList products={products} />;
};

export default OurFavoritesList;
