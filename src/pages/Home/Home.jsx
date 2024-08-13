import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import Collections from "./Collections";
import BestSeller from "./BestSeller";
import NewsLetters from "./NewsLetters";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSeller />
      <NewsLetters />
      <Footer />
    </div>
  );
};

export default Home;
