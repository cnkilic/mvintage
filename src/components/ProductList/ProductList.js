import React, { useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductList = ({ products }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-full relative w-full">
      {/* Left Arrow */}
      <button
        className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full  hover:bg-gray-700 z-10"
        onClick={scrollLeft}
      >
        <FaArrowLeft />
      </button>

      {/* Scrollable Product List */}
      {/* <div */}
      <div
        ref={scrollRef}
        className="grid grid-flow-col-dense auto-cols-auto w-min max-w-full gap-6 overflow-x-auto pb-8 snap-mandatory snap-x scrollbar-none relative"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            hoverImage={product.hoverImage}
            title={product.title}
            review={product.review}
            price={product.price}
            buttonText={product.buttonText}
            onButtonClick={() => console.log(`${product.title} added to cart`)}
          />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-gray-700"
        onClick={scrollRight}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
export default ProductList;
