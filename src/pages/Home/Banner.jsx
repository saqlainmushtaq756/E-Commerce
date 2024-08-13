import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "/images/banner.png";

const Banner = () => {
  return (
    <div className="bg-primaryBG xl:px-28 px-4 py-12">
      <div className=" py-28 flex flex-col md:flex-row-reverse gap-14 items-center justify-between  ">
        {/* img section */}
        <div className="md:w-1/2">
          <img
            src={bannerImg}
            alt="img-section"
            className="felx flex-col-reverse"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="bg-Black   hover:bg-orange-500 px-6 py-2 rounded-sm font-semibold  text-white flex items-center gap-2">
            <FaShoppingBag className="inline-flex" />
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
