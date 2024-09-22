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
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-460 min-h-96">
            <img
              className="object-cover w-full h-full"
              src="/assets/images/HomeSliderImages/homeSlider1.webp"
              alt="Slide 1"
            />
            <div className="absolute left-32 bottom-16 text-black flex flex-col justify-center items-center">
              <h2 className=" text-4xl font-bold mb-6">Slide Title 1</h2>
              <button className="bg-black text-white px-6 py-3 font-semibold rounded-md hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full  h-460 min-h-96">
            <img
              className="object-cover w-full h-full"
              src="/assets/images/HomeSliderImages/homeSlider2.webp"
              alt="Slide 2"
            />
            <div className="absolute left-32 bottom-16 text-black flex flex-col justify-center items-center">
              <h2 className=" text-4xl font-bold mb-6">Slide Title 2</h2>
              <button className="bg-black text-white px-6 py-3 font-semibold rounded-md hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-460 min-h-96">
            <img
              className="object-cover w-full h"
              src="/assets/images/HomeSliderImages/homeSlider1.webp"
              alt="Slide 3"
            />
            <div className="absolute left-32 bottom-16 text-black flex flex-col justify-center items-center">
              <h2 className=" text-4xl font-bold mb-6">Slide Title 3</h2>
              <button className="bg-black text-white px-6 py-3 font-semibold rounded-md hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
