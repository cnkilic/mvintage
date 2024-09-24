import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import TrendingProductList from "../../components/TrendingProductList/TrendingProductList";
import BestSellerList from "../../components/BestSellerList/BestSellerList";
import BackInStock from "../../components/BackInStock/BackInStock";
import OurFavoritesList from "../../components/OurFavoritesList/OurFavoritesList";
import HomeVideo from "../../components/HomeVideo/HomeVideo";
import PhotoTextSection from "../../components/PhotoTextSection/PhotoTextSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";

function Home() {
  return (
    <div className="flex-grow">
      <section>
        <HomeCarousel />
      </section>

      {/* TRENDING NOW */}
      <section>
        <div className="container mx-auto  flex justify-center items-center  flex-col shadow-lg my-8 rounded-lg bg-zinc-50">
          <header className="w-full flex justify-between items-center p-8">
            <h2 className="text-3xl flex items-center font-bold text-center">
              TRENDING NOW
            </h2>
            <Link className="flex gap-4 items-center" to="/">
              <span>SEE ALL</span>
              <FaArrowRight />
            </Link>
          </header>

          <TrendingProductList />
        </div>
      </section>

      {/* BEST SELLERS */}
      <section>
        <div className="container mx-auto flex justify-center items-center  flex-col shadow-lg my-8 rounded-lg bg-zinc-50 relative">
          <header className="w-full flex justify-between items-center p-8">
            <h2 className="text-3xl flex items-center font-bold text-center">
              BEST SELLERS
            </h2>
            <Link className="flex gap-4 items-center" to="/">
              <span>SEE ALL</span>
              <FaArrowRight />
            </Link>
          </header>
          <BestSellerList />
        </div>
      </section>

      {/* OUR FAVORITES */}
      <section>
        <div className="container mx-auto flex justify-center items-center  flex-col  my-8 relative mb-12">
          <header className="w-full flex justify-between items-center p-8">
            <h2 className="text-3xl flex items-center font-bold text-center">
              OUR FAVORITES
            </h2>
            <Link className="flex gap-4 items-center" to="/">
              <span>SEE ALL</span>
              <FaArrowRight />
            </Link>
          </header>
          <OurFavoritesList />
        </div>
      </section>

      {/* BACK IN STOCK */}
      <section>
        <div className="container mx-auto flex justify-center items-center  flex-col shadow-lg my-8 rounded-lg bg-zinc-50 relative">
          <header className="w-full flex justify-between items-center p-8">
            <h2 className="text-3xl flex items-center font-bold text-center">
              BACK IN STOCK
            </h2>
            <Link className="flex gap-4 items-center" to="/">
              <span>SEE ALL</span>
              <FaArrowRight />
            </Link>
          </header>
          <BackInStock />
        </div>
      </section>

      {/* VIDEO */}
      <section>
        <HomeVideo />
      </section>

      {/* VIDEO */}
      <section>
        < PhotoTextSection/>
      </section>

      {/* TESTİMONIAL SECTION */}
      <section>
        < TestimonialSection />
      </section>

      {/* WHO WE ARE SECTION */}
      <section>
       WHO WE ARE
      </section>

      {/* MOBILE APP LINK SECTION */}
      <section>
       MOBİLE APP
      </section>

      {/* STAY CONNECTED SECTION */}
      <section>
       STAY CONNECTED
      </section>
    </div>
  );
}

export default Home;
