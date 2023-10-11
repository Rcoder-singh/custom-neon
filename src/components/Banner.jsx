import React from "react";
import truck from "../Images/cndelivery.png";
import warranty from "../Images/cnwarranty.png";
import rating from "../Images/49stars.png";

const Banner = () => {
  return (
    <>
      {/* WEB VIEW */}
      <div className=" lg:flex justify-center gap-5  text-white  text-sm font-poppins p-1 bg-[#5761ff] hidden">
        <span className="flex items-center gap-2">
          <img src={truck} alt="icon" className=" " />
          FREE SHIPPING
        </span>
        <div className="flex gap-12">
          <span className="flex items-center  gap-2">
            <img src={rating} alt="rating" className="pb-1" />
            4.9 GOOGLE RATING
          </span>
          <span className="flex lg:flex-row flex-col gap-2 items-center">
            <img src={warranty} alt="icon" />2 YEAR WARRANTY
          </span>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------ */}
      {/* MOB VIEW */}
      <div className=" max-lg:flex justify-between gap-5  text-white  text-xs px-2 font-poppins p-2 bg-[#5761ff] hidden">
        <span className="flex  flex-col ">
          4.9 GOOGLE RATING
          <span className="flex gap-2 items-center">
            <img src={rating} alt="rating" className="" />
          </span>
        </span>
        <span className="flex  flex-col items-end">
          FREE SHIPPING
          <span className="flex gap-2 items-center">
            <img src={warranty} alt="icon" />2 YEAR WARRANTY
          </span>
        </span>
      </div>
    </>
  );
};

export default Banner;
