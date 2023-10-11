import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import React from "react";
import tiktok from "../Images/social-tiktok-svgrepo-com(1).svg"

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col justify-center   items-center gap-5  text-white p-5 bg-[#5761ff]">
        <div>
        <img className="p-5 lg:ml-[10%]"
          src="https://customneon.com/media/wysiwyg/customneonpink430reg.png"
          alt="logo"
          width={430}
        />
      </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12  font-poppins">
        <div className="flex flex-col gap-2 ">
          <span className="cursor-pointer">About us</span>
          <span className="cursor-pointer">Contact us</span>
          <span className="cursor-pointer">Advanced search</span>
          <span className="cursor-pointer">Visit our UK and Australia sites</span>
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="cursor-pointer"> FAQ</span>
          <span className="cursor-pointer"> Privacy</span>
          <span className="cursor-pointer"> Terms & Conditions</span>
          <span className="cursor-pointer"> Returns Policy</span>
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="cursor-pointer">Contact info</span>
          <span className="cursor-pointer">info@customneon.com</span>
          <span className="cursor-pointer">888 262 4851</span>
          <span className="flex cursor-pointer"><Facebook/><Instagram/><img src={tiktok} alt="" width={25} /><YouTube/><LinkedIn/></span>
        </div>

        </div>
        <p className="text-[#ffffff] ml-[7%] text-xs font-poppins">
          Copyright © 2018-2023 Custom Neon, All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
