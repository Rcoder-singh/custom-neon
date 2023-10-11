import React from "react";
import logo from "../Images/CustomNeonLogoUSA.png";
import { Menu, Search, ShoppingBagOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <>
      {/* WEB VIEW */}

      
        <div className=" lg:flex pl-[13%] pt-5 justify-evenly py-5 items-center  hidden">
          <div className="flex  text-[17px] font-[600] font-poppins items-center gap-6   ">
            <span><a href="https://customneon.com/">HOME</a></span>
            <span>DESIGN YOUR OWN SIGN</span>
            <span><a href="https://customneon.com/upload-image/">GET A QUOTE</a></span>
            <img src={logo} alt="CustomNeonLogoUSA" width={120} />
            <span><a href="https://customneon.com/signs-for-sale/">SHOP</a></span>
            <span><a href="https://customneon.com/business-signs-logo/">BUSINESS LOGOS</a></span>
            <span><a href="https://customneon.com/outdoor-lighted-signs/">OUTDOOR SIGNS</a></span>
          </div>
          <div className="flex items-center gap-2 ">
            <Search />
            <Badge badgeContent={"0"} color="error">
              <ShoppingBagOutlined />
            </Badge>
          </div>
        </div>
      

      {/* ------------------------------------------------------------------------------------------------------------ */}
      {/* MOB VIEW */}

      <div className="flex justify-between items-center  pt-5  lg:hidden  ">
        <Menu />
        <img src={logo} alt="CustomNeonLogoUSA" width={120} />
        <div className="flex items-center gap-2 mr-5  ">
          <Search />
          <Badge badgeContent={"0"} color="error">
            <ShoppingBagOutlined />
          </Badge>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------ */}
      {/* COMMON */}
      <p className="text-center font-[600] uppercase text-3xl pt-2 ml-[1.5%] ">
        Create Your Own Custom Neon
      </p>
    </>
  );
};

export default Navbar;
