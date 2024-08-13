import React from "react";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";

const Cards = ({ fiterItem }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center content-center shadow-sm gap-12">
      {fiterItem.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              alt=""
              className="mx-auto w-full  transition-all duration-300 hover:scale-105"
            />
            <div className="mt-4 px-4 ">
              <h1 className="font-semibold text-black mb-2 text-base">
                {item.title}
                <div className="flex  justify-between">
                  <p className="text-black/50">{item.category}</p>
                  <p className="font-semibold">${item.price}</p>
                  {/* <p className="font-semibold">{item.status}</p> */}
                </div>
              </h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
