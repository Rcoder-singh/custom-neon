import React, { useState } from "react";
import { Price } from "../../../Mock/Price";
const Size = () => {
  const [isActive, setIsActive] = useState(true);
  const [selectedId, setSelectedId] = useState("6");
  const toggleSelected = (id) => {
    setSelectedId(id);
  };
  const toggleTerms = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="grid grid-cols-2 m-2  gap-3">
        {Price.map((price) => {
          return (
            <div
              key={price.id}
              className={`flex justify-between p-2 border rounded-lg ${
                selectedId === price.id
                  ? "bg-white border-[#FF7AC7]"
                  : "bg-[#f4f4f4] hover:bg-white hover:border-[#FF7AC7]"
              }`}
              onClick={() => toggleSelected(price.id)}
            >
              <div className="flex flex-col font-bold justify-between">
                <span className="text-sm">{price.name}</span>
                <span>{price.Mrp}</span>
              </div>
              <div className="flex flex-col text-right text-slate-500 justify-between">
                <span className="text-sm">{price.Length}</span>
                <span>{price.Height}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex m-2 text-gray-500 ">
        *
        <p className=" text-sm  text-justify  py-1 ">
          Each sign is handcrafted, and sizes shown will be accurate within 1 or
          2 inches.{" "}
        </p>
      </div>
      <div className="flex  gap-5 m-2  justify-center">
        <div
          className={
            isActive
              ? "flex flex-col items-center justify-center p-2 border rounded-lg w-full bg-white border-[#FF7AC7]"
              : "flex flex-col items-center justify-center p-2 border bg-[#f4f4f4] rounded-lg w-full hover:bg-white hover:border-[#FF7AC7]"
          }
          onClick={toggleTerms}
        >
          <span className="font-bold ">Indoor</span>
        </div>

        <div
          className={
            isActive
              ? "flex flex-col text-center justify-center p-2 border bg-[#f4f4f4] rounded-lg w-full hover:bg-white hover:border-[#FF7AC7]"
              : "flex flex-col text-center  justify-center p-2 border rounded-lg w-full bg-white border-[#FF7AC7]"
          }
          onClick={toggleTerms}
        >
          <span className="font-bold text-xs">IP67 Waterproof Technology*</span>
          <span className="font-bold">+ $60</span>
        </div>
      </div>
      {isActive ? (
        <div className="flex m-2 text-gray-500 ">
          *
          <p className=" text-xs  text-justify  py-1 ">
            Indoor Signs are not suitable for use outdoors or anywhere they
            might get wet. Inappropriate use will void the warranty.
          </p>
        </div>
      ) : (
        <div className="flex m-2 text-gray-500 ">
          *
          <p className=" text-xs  text-justify  py-1 ">
            Custom Neon® now offers a range of{" "}
            <span className="text-[#FF7AC7]">IP67 Waterproof rated</span>{" "}
            Outdoor Signs. These can be made in the same range of colors as our
            indoor signs, and offer an ideal solution for outdoor use.{" "}
            <span className="text-[#FF7AC7]">See Photos</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Size;
