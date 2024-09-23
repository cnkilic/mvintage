// ProductList.js
import React, { useRef } from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const favoriteCollectionList = [
  {
    id: "1",
    image: "/assets/images/FavoriteCollections/favoriteSections1.webp",
    title: "Maduma",
    link: "/collections/maduma",
  },
  {
    id: "2",
    image: "/assets/images/FavoriteCollections/favoriteSections2.webp",
    title: "Munita",
    link: "/collections/munita-collection",
  },
  {
    id: "3",
    image: "/assets/images/FavoriteCollections/favoriteSections3.webp",
    title: "Ramla",
    link: "/collections/ramla",
  },
  {
    id: "4",
    image: "/assets/images/FavoriteCollections/favoriteSections1.webp",
    title: "Maduma",
    link: "/collections/maduma",
  },
  {
    id: "2",
    image: "/assets/images/FavoriteCollections/favoriteSections2.webp",
    title: "Munita",
    link: "/collections/munita-collection",
  },
  {
    id: "3",
    image: "/assets/images/FavoriteCollections/favoriteSections3.webp",
    title: "Ramla",
    link: "/collections/ramla",
  },
  {
    id: "1",
    image: "/assets/images/FavoriteCollections/favoriteSections1.webp",
    title: "Maduma",
    link: "/collections/maduma",
  },
  {
    id: "2",
    image: "/assets/images/FavoriteCollections/favoriteSections2.webp",
    title: "Munita",
    link: "/collections/munita-collection",
  },
  {
    id: "3",
    image: "/assets/images/FavoriteCollections/favoriteSections3.webp",
    title: "Ramla",
    link: "/collections/ramla",
  },
];

const OurFavoritesList = () => {
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
    <div className="max-w-full relative w-full h-[250px]">
      {/* Left Arrow */}
      <button
        className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full  hover:bg-gray-700 z-10"
        onClick={scrollLeft}
      >
        <FaArrowLeft />
      </button>

      {/* Scrollable Product List */}

      <div
        ref={scrollRef}
        className="grid grid-flow-col-dense auto-cols-auto w-min max-w-full gap-6 overflow-x-auto pb-8 snap-mandatory snap-x scrollbar-none relative"
      >
        {favoriteCollectionList.map((favoriteCollection) => (
          <FavoriteCollection favoriteCollection={favoriteCollection} />
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

export default OurFavoritesList;



function FavoriteCollection({favoriteCollection}) {
  return (
    <Link to={favoriteCollection.link} className="relative h-full rounded-lg text-center shadow-lg hover:shadow-xl flex flex-col  bg-white">
      <img
        src={favoriteCollection.image}
        alt={favoriteCollection.title}
        className="min-w-48 top-0 left-0 h-full  bg-inherit object-cover max-md:hidden select-none rounded-t-lg"
      />

      <div className="absolute left-4 top-8 text-2xl font-bold text-white">
        {favoriteCollection.title}
      </div>

      <div className="absolute left-4 bottom-8  text-white rounded-full hover:bg-gray-800 transition duration-200 max-w-fit ">
        <FaArrowCircleRight className="size-6" />
      </div>
    </Link>
  );
}
