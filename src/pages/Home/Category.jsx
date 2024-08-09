import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const companyLogo = [
    { id: "1", img: "/images/brand/logo1.png" },
    { id: "2", img: "/images/brand/logo2.png" },
    { id: "4", img: "/images/brand/logo4.png" },
    { id: "5", img: "/images/brand/logo5.png" },
    { id: "3", img: "/images/brand/logo3.png" },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28  py-28  px-4">
      {/* company logos */}
      <div className="flex flex-wrap items-center justify-around gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="img section" srcset="" />
          </div>
        ))}
      </div>
      {/* grid styles */}
      <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
        {/* text area  */}
        <p className="bg-black text-white md:-rotate-90 uppercase text-center font-semibold md:p-1.5 p-2 rounded-sm inline-flex  ">
          Explore new and popular styles
        </p>
        {/* first img  */}
        <div>
          <Link to={"/"}>
            <img
              src="/images/grid/card.png"
              alt=""
              srcset=""
              className="w-full  hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
        {/* set of grid images  */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src="/images/grid/card1.png"
                alt=""
                srcset=""
                className="w-full  hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/grid/card2.png"
                alt=""
                srcset=""
                className="w-full  hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/grid/card3.png"
                alt=""
                srcset=""
                className="w-full  hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/grid/card4.png"
                alt=""
                srcset=""
                className="w-full  hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/"></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
