import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const bestSellers = products.filter((item) => item.status === "Best Selers");

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
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/shop/${product.id}`}>
                {/* console.log(product.id) */}
                <img
                  src={product.image}
                  alt=""
                  className="mx-auto w-full  transition-all duration-300 hover:scale-105"
                />
                <div className="mt-4 px-4 ">
                  <h1 className="font-semibold text-black mb-2 text-base">
                    {product.title}
                    <div className="flex  justify-between">
                      <p className="text-black/50">{product.category}</p>
                      <p className="font-semibold">${product.price}</p>
                    </div>
                  </h1>
                </div>
              </Link>
              <div></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;
