import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SingleProduct = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = data.filter((p) => p.id == id);
        // console.log(product);

        setProducts(product[0]);
      } catch (error) {
        console.log("fethching data error", error);
      }
    };
    fetchData();
  }, [id]);

  const { title, category, price, image, status } = products;
  return (
    <div>
      <div>
        <div className="max-w-screen-2xl xl:px-28 mt-28  px-4 mx-auto container">
          <div className="max-screen-7xl m-auto p-3">
            <div>
              <a
                href="/"
                className="text-gray-600 text-base hover:text-yellow-500 "
              >
                Home
              </a>
              <a
                href={`/shop/${products.id}`}
                className="font-semibold text-black "
              >
                <span className="ml-1 mr-1">/</span>
                <span className=" hover:text-yellow-500 font-bold text-black">
                  Shop
                </span>
              </a>
            </div>
            <div className="mt-6 sm:mt-10">
              <div className="grid grid-cols-1 gap-6 h-max md:grid-cols-3 sm:grid-cols-2">
                <div>
                  <img
                    src={image}
                    alt="image for single page"
                    className="w-full"
                  />
                </div>
                {/* for product details */}
                <div>
                  <h1 className="title text-left">{title}</h1>
                  <p className="mt-3 text-gray-600  leading-6 md:text-justify text-base text-left sm:mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla velit dicta harum neque. Perferendis dolorum eos et
                    expedita quod necessitatibus assumenda? Sapiente similique,
                    exercitationem aut excepturi tenetur deserunt doloribus
                    necessitatibus.
                  </p>
                  <span className="flex flex-row text-yellow-400  my-2 gap-1 text-xl items-center sm:my-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <p className="text-xl text-red-500 font-semibold sm:text-2xl ">
                    ${price}
                  </p>
                  <div className="flex flex-col gap-2 text-left w-full">
                    <label htmlFor="" className="font-semibold">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="price"
                      defaultValue={1}
                      id="price"
                      className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none py-3 m-0 
                      rounded-md px-4 md:px-4 md:py-4 focus:border-red-400 "
                      required
                      placeholder="Enter Product Quantity"
                    />
                  </div>
                  <div className="w-full text-left my-4">
                    <button
                      className="flex  items-center justify-center gap-2 py-3 px-4 bg-red-500 text-white 
                  w-full font-bold border border-red-500  rounded-md mt-3 ease-in-out shadow-slate-600 duration-300 hover:bg-white hover:text-red-500
                 md:px-6 lg:m-0 "
                    >
                      <span>Confirm order here</span>
                      <FaRegArrowAltCircleRight className="text-xl font-semibold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
