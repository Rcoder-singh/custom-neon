import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import Help from "./Help";

const TEXT =
  "https://customneon.com/create-neon-sign/?JmYxPTIyJmMxPTEzMCZhPTImcz0yJmk9MSZwPTEmZD0xJnc9MCZoPTAmcHI9MCZyPTAmYmI9MSZiYz1jbGVhciZiPTEmaXNSR0I9ZmFsc2UmaXNTd2l0Y2hPbj10cnVl";

const BTN = () => {
  const [isActive, setIsActive] = useState(false);
  const inputFileRef = useRef();

  const handleClick = () => {
    if (isActive) {
      navigator.clipboard?.writeText(TEXT);
    }
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col justify-center items-center p-5  gap-5">
        <div className="flex w-full gap-5">
          <Help />
          <Button
            onClick={() => inputFileRef.current?.click()}
            className="!bg-[#f4f4f4] !text-black !font-[600] w-full lg:!text-lg lg:!p-3 !p-2 !rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          >
            Upload image or Logo
          </Button>

          <input
            type="file"
            name=""
            id=""
            className="hidden"
            ref={inputFileRef}
          />
        </div>

        <Button
          className="!bg-[#f4f4f4] !text-black !font-[600] lg:w-1/2 w-full lg:!text-lg  lg:!p-3 !p-2 !rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] "
          onClick={handleClick}
        >
          Save/Send my Design
        </Button>
      </div>
      <div
        className={isActive ? "flex flex-col gap-5  text-sm   p-2" : "hidden"}
      >
        <p className="text-center">
          To save your design, copy and paste this url into your browser, or
          save it in a file. You can also copy and paste it into an email, DM or
          text. Clicking on the link will recreate your design.
        </p>
        <div className=" p-5 rounded-xl bg-[#f4f4f4]">
          <p className="break-all">{TEXT}</p>
        </div>
        <div className="flex  justify-center ">
          <Button
            variant="contained"
            className="hover:!bg-pink-500 !bg-[#5761ff] !rounded-lg   lg:!text-lg !font-poppins"
            onClick={handleClick}
          >
            Click to Copy
          </Button>
        </div>
      </div>
    </>
  );
};

export default BTN;
