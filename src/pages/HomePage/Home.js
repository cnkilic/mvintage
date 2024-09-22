import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import TrendingProductList from "../../components/TrendingProductList/TrendingProductList";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
function Home() {
  return (
    <div className="flex-grow">
      <section>
        <HomeCarousel />
      </section>

      <section className="p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-center mb-8 ">TRENDING NOW</h2>
          <Link className="flex gap-4 " to="/">
            <span>SEE ALL</span>
            <FaArrowRight />
          </Link>
        </div>
        <TrendingProductList />
      </section>
    </div>
  );
}

export default Home;
