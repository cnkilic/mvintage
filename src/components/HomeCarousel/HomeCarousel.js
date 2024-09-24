import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Slide data
const slides = [
  {
    title: "Slide Title 1",
    imageUrl: "/assets/images/HomeSliderImages/homeSlider1.webp",
    buttonLabel: "Shop Now",
  },
  {
    title: "Slide Title 2",
    imageUrl: "/assets/images/HomeSliderImages/homeSlider2.webp",
    buttonLabel: "Shop Now",
  },
  {
    title: "Slide Title 3",
    imageUrl: "/assets/images/HomeSliderImages/homeSlider1.webp",
    buttonLabel: "Shop Now",
  },
];

const HomeCarousel = () => {
  return (
    <div className="w-full h-460 min-h-96">
      <Swiper
        spaceBetween={0}
        modules={[
          EffectFade,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
        ]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-460 min-h-96">
              <img
                className="object-cover w-full h-full"
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute left-32 bottom-16 text-black flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold mb-6">{slide.title}</h2>
                <button className="bg-black text-white px-6 py-3 font-semibold rounded-md hover:bg-gray-800">
                  {slide.buttonLabel}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
