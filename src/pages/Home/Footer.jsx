import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    // <div className="max-w-screen-2xl xl:px-28 px-4 py-16 mx-auto container ">
    //   <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  justify-evenly">
    //     <div className="grdi grid-rows-1 w-full  content-center  py-6 text-justify">
    //       <Link to={"/"}>
    //         <img src="logo.png" alt="image is here" srcSet="" />
    //       </Link>
    //       <p className="md:h-2/5">
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
    //         cum voluptas laborum nobis aliquam molestiae iste possimus culpa
    //         nisi. Voluptate voluptatum ullam dolorum dolores consequatur, optio
    //         ut qui ad sapiente?
    //       </p>
    //       <button type="submit">submit jani</button>
    //     </div>
    //     <div className="capitalize">
    //       <h1>CATALOG</h1>
    //       <ul>
    //         <li>jacket</li>
    //         <li>t-shirt</li>
    //         <li>Jewelry Box</li>
    //         <li>hoodies</li>
    //       </ul>
    //     </div>
    //     <div className="capitalize">
    //       <h1>ABOUT US</h1>
    //       <ul>
    //         <li>Sitemap</li>
    //         <li>Our Producers</li>
    //         <li>FAQ</li>
    //         <li>About Us</li>
    //         <li>Terms & Conditions</li>
    //       </ul>
    //     </div>
    //     <div className="capitalize">
    //       <h1>CUSTOMER SERVICES</h1>
    //       <ul>
    //         <li>Contact Us</li>
    //         <li>Track Your Order</li>
    //         <li>Book an Appointment</li>
    //         <li>Shipping & Returns</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="py-16 px-4 max-w-screen-2xl xl:px-28 container mx-auto ">
      <div className="grid grid-cols-1 py-6 sm:grid-cols-3 md:grid-cols-4  justify-between gap-10 px-4">
        {/* one  */}
        <div className="">
          <Link to={"/"}>
            <img src={"logo.png"} alt="logo-image" />
          </Link>
          <p className="py-4 w-full  md:max-w-full  text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            accusamus omnis ea iusto ab temporibus, itaque saepe iure hic
            laboriosam?
          </p>
          <div className="flex flex-wrap flex-row  py-4 text-left gap-4 ">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        {/* two  */}
        <div className="">
          <h3 className="text-black font-semibold text-base">CATALOG</h3>
          <ul className="flex flex-col gap-4 py-4">
            <a href="/" className="capitalize text-left text-black">
              T-shirt
            </a>
            <a href="/" className="capitalize text-left text-black">
              Jacket
            </a>
            <a href="/" className="capitalize text-left text-black">
              Jewelry Box
            </a>
            <a href="/" className="capitalize text-left text-black">
              Hoodies
            </a>
          </ul>
        </div>
        {/* three  */}
        <div className="">
          <h3 className="text-black font-semibold text-base text-left">
            BOUT US
          </h3>
          <ul className="flex flex-col gap-4 py-4  text-left">
            <a href="/" className="capitalize text-left text-black">
              Sitemap{" "}
            </a>
            <a href="/" className="capitalize text-left text-black">
              Our Producers
            </a>
            <a href="/" className="capitalize text-left text-black">
              FAQ
            </a>
            <a href="/" className="capitalize text-left text-black">
              Terms & Conditions
            </a>
          </ul>
        </div>
        {/* four  */}
        <div className="">
          <h3 className="text-black font-semibold text-base text-left">
            CUSTOMER SERVICES
          </h3>
          <ul className="flex flex-col gap-4 py-4  text-left ">
            <a href="/" className="capitalize text-left text-black">
              Contact Us{" "}
            </a>
            <a href="/" className="capitalize text-left text-black">
              Track Your Order{" "}
            </a>
            <a href="/" className="capitalize text-left text-black">
              Book an Appointment{" "}
            </a>
            <a href="/" className="capitalize text-left text-black">
              Shipping & Returns{" "}
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
