import React, { useState } from "react";

const ProductCard = ({
  image,
  hoverImage,
  title,
  price,
  buttonText,
  onButtonClick,
  review,
}) => {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <div className="h-full rounded-lg text-center shadow-lg flex flex-col min-w-[300px] bg-white">
      <img
        onMouseEnter={() => {
          setImageHovered(true);
        }}
        onMouseLeave={() => {
          setImageHovered(false);
        }}
        src={imageHovered && hoverImage ? hoverImage : image}
        alt={title}
        className="w-full h-auto rounded-t-lg"
      />
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col p-4 text-start">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          {review && (
            <div className="text-sm mb-2 flex gap-2">
              <div>★★★★ </div>
              <div>{review.count}</div>
            </div>
          )}
          <p className="text-sm text-gray-700">€{price}</p>
        </div>

        <div className="flex flex-col p-4 pt-0">
          <button
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition duration-200 flex-grow"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
