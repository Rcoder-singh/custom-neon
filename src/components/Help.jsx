import { Close } from "@mui/icons-material";
import {
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Help = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="!bg-[#f4f4f4] !text-black !font-[600] w-full lg:!text-lg lg:!p-3 !p-2 !rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      >
        Need Help? Get a Quote
      </Button>
      <Drawer
        open={open}
        anchor="top"
        onClose={handleClose}
        PaperProps={{ className: " mt-12  lg:mx-[20%]  mx-[12%]   p-5" }}
      >
        <div className="flex flex-col  items-center  text-center  p-2 gap-5">
          <span className="font-bold">GET HELP</span>
          <Close
            className="!absolute top-3 right-2 text-red-300 hover:text-red-900 cursor-pointer w "
            onClick={handleClose}
          />
          <p>
            Simply enter your text, font and color choices into the design tool
            above to get an instant quote for most signs.
          </p>
          <p>
            For more complex designs and special requests, please use this form
            and our friendly team will be happy to help.
          </p>
        </div>
        <form className="flex flex-col  gap-5 p-2">
          <TextField required id="first_name" label="First Name" type="text" />
          <TextField required id="last_name" label="Last Name" type="text" />
          <TextField required id="email" label="Your E-mail" type="email" />
          <TextField required id="phone" label="Your Phone" type="text" />
          <FormControl>
            <FormLabel required>Indoor/Outdoor</FormLabel>
            <RadioGroup row>
              <FormControlLabel
                value="Indoor"
                control={<Radio />}
                label="Indoor"
              />
              <FormControlLabel
                value="Outdoor"
                control={<Radio />}
                label="Outdoor"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            required
            id="length"
            label="Approximate size (length/height) "
            type="text"
          />
          <TextField
            required
            id="help"
            label="What can we help you with?"
            type="text"
          />
          <div className="flex justify-center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              className="w-52"
            >
              Send Form
            </Button>
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default Help;
