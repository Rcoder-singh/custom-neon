import React, { useEffect, useRef, useState } from "react";
import landscape1 from "../Images/landscape1.jpg";
import { ColorSelector } from "./Mobile/ColorSelector";
import { COLORS } from "./Mobile/constants";
import { BackgroundImageSelector } from "./Mobile/containers";
import fonts from "./fonts.json";
import Backboard from "./Mobile/containers/Backboard";
import Size from "./Mobile/containers/Background";
import CartB from "./CartB";

const Text = () => {
  const [inputText, setInputText] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [imageBackground, setImageBackground] = useState(landscape1);

  const [color, setColor] = useState();

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFontChange = (newFont) => {
    setFontFamily(newFont);
  };
  const tracker = useRef({
  dragging: false,
  pos: {},
});
const elementRef = useRef(null);

useEffect(() => {
  if (!elementRef.current) return;
  const element = elementRef.current;

  const mouseDownHandler = (e) => {
    tracker.current.dragging = true;
    tracker.current.pos.x = e.clientX - element.getBoundingClientRect().left;
    tracker.current.pos.y = element.getBoundingClientRect().top;
    element.style.cursor = "grabbing";
  };

  element.addEventListener("mousedown", mouseDownHandler);

  const mouseMoveHandler = (e) => {
    console.log(tracker.current.dragging, tracker.current.pos);
    if (tracker.current.dragging) {
      const x = e.clientX - tracker.current.pos.x;
      const y = e.clientY - tracker.current.pos.y;
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
    }
  };
  element.addEventListener("mousemove", mouseMoveHandler);

  const mouseUpHandler = () => {
    if (tracker.current.dragging) {
      tracker.current.dragging = false;
      element.style.cursor = "grab";
    }
  };
  document.addEventListener("mouseup", mouseUpHandler);

  return () => {
    element.removeEventListener("mousedown", mouseDownHandler);
    element.removeEventListener("mousemove", mouseMoveHandler);
    element.removeEventListener("mouseup", mouseUpHandler);
  };
}, []);


  return (
    <div className=" lg:flex hidden  p-2">
      <div
        className=" max-w-[calc(100%-450px)] w-full min-h-screen max-h-screen sticky top-0  bg-cover bg-bottom "
        style={{
          backgroundImage: `url(${imageBackground})`,
        }}
      >
        <div
          ref={elementRef}
          className="text-[4rem] text-white bg-opacity-60 backdrop:blur-md p-5 rounded-lg absolute left-[40%] top-[30%]   text-center "
          style={{
            fontFamily: fontFamily,
            color: color?.value,
          }}
        >
          {inputText || "Your Text"}
        </div>
        <div className="absolute bottom-0 left-[30%] w-full">
          <BackgroundImageSelector
            onSelect={(img) => setImageBackground(img)}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-[450px]  overflow-y-scroll  bg-white  ">
          
            <div className="flex  flex-col p-2 gap-2    items-center ">
              <span className=" uppercase  font-poppins text-xl">
                Enter your text
              </span>
              <p className="text-lg">
                you can also{" "}
                <span className="text-[#5761ff]">upload an image</span> or get{" "}
                <span className="text-[#5761ff]">help</span>
              </p>
              <textarea
                className="bg-[#f5f5f5] border outline-none w-full resize-none p-6 rounded-xl text-center placeholder:text-center focus:shadow-custom-shadow-1"
                placeholder={`ENTER TEXT HERE\nPress Enter/Return for a new line`}
                value={inputText}
                onChange={handleTextChange}
              ></textarea>
            </div>

          <p className="text-[17px] my-5 text-center font-poppins font-[600]">
            Choose Font
          </p>
          <div className="grid grid-cols-4 gap-2 w-min-[450px] p-2">
            {fonts.map((button) => (
              <button
                key={button.id}
                className={`${
                  fontFamily === button.font
                    ? "bg-pink-600 text-white"
                    : "!bg-white"
                } hover:!bg-[#5761ff] rounded-lg w-24 h-10 border  shadow p-2 text-xl`}
                onClick={() => handleFontChange(button.font)}
                style={{ fontFamily: button.font }}
              >
                <img src={button.imageUrl} alt={`${button.font}`} />
              </button>
            ))}
          </div>
          <p className="text-[17px]  my-5 text-center font-poppins font-[600]">
            Choose Color
          </p>
          <ColorSelector
            colors={COLORS}
            selected={color}
            onSelect={(color) => setColor(color)}
          />
          <p className="text-[17px] my-5 text-center uppercase font-poppins font-[600]">
            Choose Size
          </p>
          <Size />
          <p className="text-[17px] my-5 text-center uppercase font-poppins font-[600]">
            Choose a Backboard
          </p>
          <Backboard />
        </div>
        <div className="flex flex-col gap-5 sticky bottom-0  font-poppins p-2 bg-white">
          <div className="!bg-[#f4f4f4] !text-black  text-end w-full lg:!text-xl  lg:!p-3 !p-2 !rounded-lg  ">
            Total $149
          </div>
          {/* <Button
            className="!bg-[#5761ff] !text-white !font-[600]  w-full lg:!text-lg  lg:!p-3 !p-2  !rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:!bg-[#ff7ac7] "
            
          >
            Add to Cart
          </Button> */}
          <CartB />
        </div>
      </div>
    </div>
  );
};

export default Text;
