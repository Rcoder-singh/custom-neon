import { Button, Dialog } from "@mui/material";
import React from "react";
const CartB = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        className="!bg-[#5761ff] !text-white !font-[600]  w-full lg:!text-lg  lg:!p-3 !p-2  !rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:!bg-[#ff7ac7] "
        onClick={handleClick}
      >
        Add to Cart
      </Button>
      <Dialog
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            padding: "20px",
            borderRadius: "10px",
            borderColor: "bg-[#5761ff]",
            boxShadow: "0px 0px 20px #a2e6ff",
          },
        }}
      >
        <div className=" grid lg:grid-cols-3 md:grid-cols-3  p-10  text-sm font-poppins ">
          <div className="flex flex-col gap-5 m-2 ">
            <span className="text-[#ff7ac7]">To Create A Sign</span>
            <p>Please enter your text at the top of the form</p>
          </div>
          <div className="flex flex-col gap-5 m-2">
            <span className="text-[#ff7ac7]">For A Free Quote And Mockup </span>
            <p>
              Click{" "}
              <a
                href="https://customneon.com/business-signs-logo/#quote "
                className="text-[#5761ff]"
              >
                here
              </a>{" "}
              for our simple form
            </p>
          </div>
          <div className="flex flex-col gap-5 m-2">
            <span className="text-[#ff7ac7]">If You Have An Image</span>
            <p>
              Click{" "}
              <a
                href="https://customneon.com/upload-image/#upload"
                className="text-[#5761ff]"
              >
                'Upload an Image'
              </a>{" "}
              and we will help make it into a sign
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-3"></div>
        <div className="flex p-5  justify-center ">
          <Button
            variant="contained"
            className="hover:!bg-pink-500 !bg-[#5761ff] !w-1/4  !font-poppins"
            onClick={handleClose}
          >
            OK
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default CartB;
