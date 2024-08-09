import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenueOpen, setMenueOpen] = useState(false);

  const togleButton = () => {
    setMenueOpen(!isMenueOpen);
  };

  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];
  // className="max-w-screen-2xl xl:px-28 px-4 absolute top-0  right-0 left-0
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0 ">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3 ">
        <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block" />
        {/* logo section  */}
        <a href="/">
          <img src={logo} alt="logo-img" srcset="" />
        </a>
        {/* shopping and user acount  */}
        <div className="text-Black text-lg sm:flex items-center gap-4 hidden ">
          <a href="/" className="flex items-center gap-2 mr-2">
            <FaUser />
            Account
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaShoppingBag />
            Shopping
          </a>
        </div>
        {/* navbarbar  for small devices or sidebar button */}
        <div className="sm:hidden">
          <button onClick={togleButton}>
            {isMenueOpen ? (
              <FaTimes className="w-5 h-5 text-Black text-xl " />
            ) : (
              <FaBars className="w-5 h-5 text-Black text-xl " />
            )}
          </button>
        </div>
      </nav>
      <hr />

      {/* catagory items */}

      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden ">
          {navItems.map(({ title, path }) => (
            <li key={title} className=" hover:text-yellow-500">
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* nav for small devices */}
      <div className="block sm:hidden">
        <ul
          className={`bg-Black  rounded px-4 py-5 text-white text-lg  ${
            isMenueOpen ? "" : "hidden"
          }
          `}
        >
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className=" hover:text-yellow-500 cursor-pointer my-3"
            >
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
