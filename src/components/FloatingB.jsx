import React from "react";
import { Button, Fab, Popover,  } from "@mui/material";
import { Close, WhatsApp } from "@mui/icons-material";
const FloatingB = () => {
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
      <Fab
        className="  !bg-[#FF7AC7] !fixed top-[92vh]  right-5"
        onClick={handleClick}
      >
        <WhatsApp className="text-white !w-10 !h-10" />
      </Fab>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 815, left: 1700 }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            padding: "20px",
            borderRadius: "8px",
            width: "400px",
          },
        }}
      >
        <div className="flex flex-col gap-5">
          <div className="flex  justify-between">
            <img
              src="https://scontent.flko7-2.fna.fbcdn.net/v/t39.30808-1/249431859_3274547532832144_3340129766618797696_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=104&ccb=1-7&_nc_sid=0f0194&_nc_ohc=bdsiZiEGpyYAX_qLsJ_&_nc_ht=scontent.flko7-2.fna&edm=ALt6RYYEAAAA&oh=00_AfBDNM0nBRYISGwGzHrm9ZMjcCXheO8seGzXdbgJmAzWJw&oe=652458B5"
              className="rounded-full h-10"
              alt=""
            />
            <Close onClick={handleClose} />
                  </div>
                  <p className="font-poppins text-[17px] font-bold">Chat with Custom Neon</p>
                  <p>Hi! How can we help you?</p>
                  <Button
            className="!bg-[#FF7AC7] !text-white !font-[600] !mt-10 hover:!bg-[#d660a5]   lg:!p-3 !p-2  !rounded-xl hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] "
            
          >
            Start Chat
                  </Button>
                  <div className="flex  justify-center  items-center gap-5 font-poppins  text-[17px] font-bold"><WhatsApp className="!h-8 !w-8"/> Powered by WhatsApp </div>
        </div>
      </Popover>
    </>
  );
};

export default FloatingB;
