import React from "react";
import image from "../../../public/images/product/image1.png";
import { Link } from "react-router-dom";

const NewsLetters = () => {
  return (
    <div className=" xl:px-28 px-4 py-16  bg-[#1E2832] bg-opacity-5">
      <div>
        <h1 className="title mb-8">
          Follow Products and discounts on instagram
        </h1>
        {/* insta grid  */}
        <div className="flex flex-wrap gap-4 items-center justify-center mb-20 ">
          <Link to={"/"}>
            <img src={"/images/instagram/img1.png"} alt="this is image one" />
          </Link>
          <Link to={"/"}>
            <img src={"/images/instagram/img2.png"} alt="this is image two" />
          </Link>
          <Link to={"/"}>
            <img src={"/images/instagram/img3.png"} alt="this is image three" />
          </Link>
          <Link to={"/"}>
            <img src={"/images/instagram/img4.png"} alt="this is image four" />
          </Link>
          <Link to={"/"}>
            <img src={"/images/instagram/img5.png"} alt="this is image six" />
          </Link>
          <Link to={"/"}>
            <img src={"/images/instagram/img6.png"} alt="this is image seven" />
          </Link>
        </div>
        {/* new letter  */}
        <div>
          <h1 className="title mb-8">Or subscribe to the NewsLetter</h1>
          <form action="" className=" md:w-1/2 mx-auto text-center ">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent h-8 border-black border-b-2 outline-none pl-2 mb-5  md:w-2/3 w-full placeholder:text-black/50"
              placeholder="Enter Email here..."
            />
            <input
              type="submit"
              value={"Submit"}
              className="bg-black text-white rounded-sm py-1 ml-4 px-6"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
