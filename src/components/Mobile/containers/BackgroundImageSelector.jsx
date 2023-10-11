import React from "react";
import backgrounds from "./backgrounds.json";

export const BackgroundImageSelector = ({ onSelect }) => {
  return (
    <div className="absolute h-100 w-[70%] max-w-md  bottom-0 p-5 bg-opacity-40 flex gap-4 overflow-x-auto">
      {/* {backgrounds.map((bg) => {
        return (
          <img
            src={bg.img}
            // height={50}
            // width={100}
            alt=""
            className="rounded h-[50px] w-[50px] "
            onClick={() => onSelect?.(bg.img)}
          />
        );
      })} */}
      <div class="MagicScroll" data-options="mode: carousel; height: 50px;"  >

     {backgrounds.map((bg) => {
       return (
          <div     onClick={() => onSelect?.(bg.img)}>
          <img
            src={bg.img}
            // height={50}
            // width={100}
            alt=""
            // className="rounded h-[50px] w-[50px] "
            onClick={() => onSelect?.(bg.img)}
           />
           </div  >
        );
      })} 
</div>
      
    </div>
  );
};
