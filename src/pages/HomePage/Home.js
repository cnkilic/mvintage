import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import TrendingProductList from "../../components/TrendingProductList/TrendingProductList";
import BestSellerList from "../../components/BestSellerList/BestSellerList";
import BackInStock from "../../components/BackInStock/BackInStock";

function Home() {
  return (
    <div className="flex-grow">
      <section>
        <HomeCarousel />
      </section>

      <section className="">
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

      <section className="">
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

      <section className="">
        <div className="container mx-auto flex justify-center items-center  flex-col shadow-lg my-8 rounded-lg bg-zinc-50 relative">
          <header className="w-full flex justify-between items-center p-8">
            <h2 className="text-3xl flex items-center font-bold text-center">
              OUR FAVORITES
            </h2>
            <Link className="flex gap-4 items-center" to="/">
              <span>SEE ALL</span>
              <FaArrowRight />
            </Link>
          </header>
          <BestSellerList />
        </div>
      </section>

      <section className="">
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
    </div>
  );
}

export default Home;
