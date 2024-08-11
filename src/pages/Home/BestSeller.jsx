import React, { useEffect, useState } from "react";

const BestSeller = () => {
  const [prodects, setProducts] = useState([]);
  const [sellerProduct, setSellerProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const bestSeller = prodects.filter((item) => item.status === "Best Selers");
  //   console.log(bestSeller);
  setSellerProduct(bestSeller);

  return (
    <div className="max-w-screen-2xl xl:px-28 px-4  mx-auto container">
      <div className="text-center">
        <h3 className="title">Best sellers</h3>
        <p className="text-black/75 md:w-2/3 capitalize mb-8 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per
        </p>
      </div>
      {/* best seller product card  */}
{/* we can use a slider in this area so we can create a swiper js  */}



    </div>
  );
};

export default BestSeller;
