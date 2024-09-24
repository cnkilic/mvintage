import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Install Swiper modules

const testimonials = [
  {
    quote:
      "A 5 star experience at the Ikin store. The staff are professional, dedicated, amazing, and very helpful. The jewellery is affordable and the quality is one of the best around. All their collections are spectacular and unique. Highly recommended!",
    name: "Valentina Tonna",
    rating: 5,
  },
  {
    quote:
      "A 5 star experience at the Ikin store. The staff are professional, dedicated, amazing, and very helpful. The jewellery is affordable and the quality is one of the best around. All their collections are spectacular and unique. Highly recommended!",
    name: "Valentina Tonna",
    rating: 5,
  },
  {
    quote:
      "A 5 star experience at the Ikin store. The staff are professional, dedicated, amazing, and very helpful. The jewellery is affordable and the quality is one of the best around. All their collections are spectacular and unique. Highly recommended!",
    name: "Valentina Tonna",
    rating: 5,
  },
  // Add more testimonials here
];

const TestimonialSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          WHAT PEOPLE ARE SAYING
        </h2>
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[
            EffectFade,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
          ]}
          // navigation
          autoplay={{ delay: 4000 }}
          loop={true}
          className="mt-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-700 text-center mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-gray-500 text-center mb-4">
                  - {testimonial.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
