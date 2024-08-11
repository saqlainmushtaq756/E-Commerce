import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Products = () => {
  const [prodects, setProducts] = useState([]);
  const [filteredItems, setfilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        // console.log(data);

        setProducts(data);
        setfilteredItems(data);
      } catch (error) {
        console.log("fethching data error", error);
      }
    };
    fetchData();
  }, []);
  // console.log(prodects);
  // filter function

  const filterItems = (Category) => {
    const filtered =
      Category === "all"
        ? prodects
        : prodects.filter((item) => item.category === Category);
    setfilteredItems(filtered);
    setSelectedCategory(Category);
  };

  // show all products

  const showAll = () => {
    setfilteredItems(prodects);
    selectedCategory("all");
  };

  // sorting function

  const handleSortChange = (option) => {
    setSortOption(option);
    // logic for the sorting
    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setfilteredItems(sortedItems);
  };

  return (
    <div className=" mx-auto container  max-w-screen-2xl xl:px-28 px-4 mb-12 ">
      <h2 className="title">Or subscribe to the newsletter</h2>

      {/* product card  area */}
      <div>
        {/* filter area  */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* for all btns  */}
          <div className="flex flex-row flex-wrap md:items-center justify-start md:gap-8 gap-4">
            <button className="font-semibold text-black" onClick={showAll}>
              All products
            </button>
            <button
              onClick={() => {
                filterItems("Dress");
              }}
            >
              Clothing
            </button>
            <button
              onClick={() => {
                filterItems("Hoodies");
              }}
            >
              Hoodies
            </button>
            <button
              onClick={() => {
                filterItems("Bag");
              }}
            >
              Bag
            </button>
            <button
              onClick={() => {
                filterItems("Shoe");
              }}
            >
              Shoes
            </button>
            <button
              onClick={() => {
                filterItems("Glasses");
              }}
            >
              Glasses
            </button>
          </div>
          {/* for sorting */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2 ">
              <FaFilter className="w-4 h-4 text-white " />
            </div>
            <select
              name=""
              onChange={(e) => handleSortChange(e.target.value)}
              id="sort"
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to low</option>
            </select>
          </div>
        </div>
        {/* for card images area  */}
        <div>
          <Cards fiterItem={filteredItems} />
        </div>
      </div>
    </div>
  );
};

export default Products;
