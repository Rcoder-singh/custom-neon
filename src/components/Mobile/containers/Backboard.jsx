import React, { useState } from "react";
import { Color } from "../../../Mock/Color";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import CartB from "../../CartB";

const Backboard = () => {
  const [selectedId, setSelectedId] = useState("1");
  const toggleSelected = (id) => {
    setSelectedId(id);
  };
  return (
    <>
      <div className=" flex flex-col justify-center items-center !bg-[#f4f4f4] !text-black  text-end w-full lg:!text-xl  lg:!p-3 !p-2 !rounded-lg  ">
        <img
          src="https://customneon.com/create-neon-sign/images/1.png"
          alt=""
        />
        <span>Free</span>
      </div>
      <p className="text-[17px] my-5 text-center uppercase font-poppins font-[600]">
        Choose a Backboard color
      </p>

      {Color.map((color) => {
        return (
          <div className=" ">
            {selectedId === color.id ? (
              <div className="flex justify-between m-2 text-xs  gap-5">
                <p className="text-gray-500 "> {color.detail}</p>
                <span className="text-[#FF7AC7]">See Photos</span>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}

      <div className="flex  justify-center   gap-5 m-2">
        {Color.map((color) => {
          return (
            <>
              <div className="flex justify-between   gap-5 m-2">
                <div
                  key={color.id}
                  className={` border-2   rounded-md   ${
                    selectedId === color.id
                      ? ` border-[#FF7AC7]  `
                      : "hover:border-[#FF7AC7] border-black"
                  }`}
                  onClick={() => toggleSelected(color.id)}
                >
                  <img src={color.img} className="rounded" alt="" />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <p className="text-[17px] my-5 text-center uppercase font-poppins font-[600]">
        Options
      </p>
      <div className="flex font-poppins gap-12 m-5">
        <span className=" font-semibold text-[17px] text-gray-500">
          Power Adapter
        </span>
        <form className="text-sm">
          <select>
            <option value="">UK / IRELAND 230V</option>
            <option value="">EUROPE 230V</option>
            <option value="">USA / CANADA 120V</option>
            <option value="">AUSTRALIA / NZ 230V</option>
            <option value="">JAPAN 100V</option>
            <option value="">OTHER: Ask at Checkout</option>
          </select>
        </form>
      </div>

      <div className=" flex flex-col ">
        <p className="flex gap-2 items-center">
          {" "}
          <Checkbox
            defaultChecked
            sx={{
              borderRadius: "50%",
              color: pink[300],
              "&.Mui-checked": {
                color: pink[300],
              },
            }}
          />
          Special Offer: <u className="text-[#FF7AC7]">Remote and Dimmer</u>{" "}
          Free
        </p>

        <p className="flex gap-2 items-center">
          {" "}
          <Checkbox
            sx={{
              borderRadius: "50%",
              color: pink[300],
              "&.Mui-checked": {
                color: pink[300],
              },
            }}
          />
          <u className="text-[#FF7AC7]">Wall Mounting</u>
          Kit
          <form className="text-sm">
            <select>
              <option value="">Silver $15</option>
              <option value="">Gold $17V</option>
              <option value="">Black $17</option>
            </select>
          </form>
        </p>
        <p className="flex gap-2 items-center">
          {" "}
          <Checkbox
            sx={{
              borderRadius: "50%",
              color: pink[300],
              "&.Mui-checked": {
                color: pink[300],
              },
            }}
          />
          Special Offer: <u className="text-[#FF7AC7]">Sign Hanging</u>
          Kit $15
        </p>
      </div>
      <p className="text-[#FF7AC7] font-poppins text-center py-2">
        {" "}
        Rush Order option available at checkout
      </p>
      <div className="flex flex-col gap-5  lg:hidden  font-poppins p-2 bg-white">
        <div className="!bg-[#f4f4f4] !text-black  text-end w-full lg:!text-xl  lg:!p-3 !p-2 !rounded-lg  ">
          Total $149
        </div>
        <CartB/>
      </div>
    </>
  );
};

export default Backboard;
