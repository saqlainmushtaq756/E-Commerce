import React from "react";

const Collections = () => {
  return (
    <div className='bg-[url("/images/bg-collection.png")] bg-cover bg-no-repeat bg-center xl:px-28 px-4 my-20  text-white '>
      <div className="h-[580px] flex md:flex-row items-center">
        <div className=" md:w-1/2"></div>
        <div className=" md:w-1/2">
          <img src="/images/zara-Logo.png" alt="zara logo" />
          <p className="text-lg justify-start md:w-2/3 my-8 leading-[32px]">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="bg-white text-black px-6 py-2 font-semibold  rounded-sm">
            See Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
