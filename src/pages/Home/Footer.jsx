import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="py-16 px-4 max-w-screen-2xl xl:px-28 container mx-auto ">
        {/* footer area  */}
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
        {/* last footer card area  */}
      </div>
      {/* footer bottom */}
      <div className="bg-Black text-white ">
        <p className="text-white text-center items-center py-3">
          © {currentYear} Coral, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
