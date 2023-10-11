import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <>
      <div className="flex flex-col p-8 pb-24 gap-12  bg-white font-poppins  ">
        <span className="text-[#5761ff] font-[600] text-center text-[42px]">
          FAQs
        </span>
        <div className="flex lg:flex-row flex-col justify-center  ">
          <div className="flex flex-col p-5  lg:w-[40rem] ">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="!text-[22px]">
                  {" "}
                  How Much Does a Custom Neon® Sign Cost?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The price for custom LED neon signs start at $112 for a sign
                  with two letters. Our handmade LED neon signs, lamps and wall
                  decor are affordable and we are very competitive on price! In
                  addition to great prices, our experienced team also offers
                  unparalleled customer support, from the design stage through
                  to delivery and aftercare.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="!text-[22px]">
                  {" "}
                  Why Buy a Neon Light Sign from Custom Neon®?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>
                    All of our LED neon light signs are handmade from LED neon
                    light tubes that are kid-safe and both economical and
                    ecologically friendly! Some great reasons to choose a custom
                    LED sign from us are:
                  </p>

                  <li className="mx-12">
                    Affordable - We keep our prices as low as possible while
                    offering a high quality product.
                  </li>
                  <li className="mx-12">
                    2 Year Warranty - All of our indoor and outdoor signs come
                    with a two-year manufacturer warranty covering faulty items.
                  </li>
                  <li className="mx-12">
                    Durable - We offer the latest neon flex technology which is
                    stronger and lighter than vintage style glass neon.
                  </li>
                  <li className="mx-12">
                    Energy Efficient - Our LED neon light signs are both
                    economical and ecologically friendly, with low energy
                    consumption and 100,000+ hours lifespan.
                  </li>
                  <li className="mx-12">
                    Safe - Our bespoke neon signs are made from LED light tubes
                    that do not get hot and contain no breakable glass.
                  </li>
                  <li className="mx-12">
                    Easy to Install - All of the Custom Neon light signs come
                    with pre-drilled holes for easy hanging & wall mounting.
                  </li>
                  <li className="mx-12">
                    Low Maintenance - Custom Neon signs are very hard-wearing
                    and easy to clean.
                  </li>
                  <li className="mx-12">
                    Lightweight - Our custom designed signs are lightweight and
                    portable, making them perfect as LED neon signs for
                    weddings, events, home or business, or truly unique gift
                    ideas.
                  </li>
                  <li className="mx-12">
                    Full Control - The remote control has an on/off switch and
                    10 brightness settings. Your neon light sign can be set to
                    flash with adjustable speeds.
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="!text-[22px]">
                  How Big Can My Custom-made Neon Be?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>
                    Our LED Neon is available in 8/9/10mm thickness, and the
                    minimum letter height is approximately 3-4 inches for
                    simple/non-cursive fonts and 4-5 inches for cursive fonts.
                  </p>
                  <p>
                    {" "}
                    If your custom order is for a sign larger than 7ft 8in by
                    3ft 11in it will be made on two or more backboards that can
                    be easily arranged together. Doing this keeps the signs
                    safer during shipping and allows us to deliver the best
                    possible price for you.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            {/* <div className="bg-white flex flex-col p-1 items-center lg:w-[28rem] shadow-lg">
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] " onClick={HandleOpen}>
                  How Much Does a Custom Neon® Sign Cost?
                </p>{" "}
                {!isActive ? (
                  <ArrowDownward onClick={HandleOpen} />
                ) : (
                  <ArrowUpward onClick={HandleOpen} />
                )}
              </div>
              <div className="border  w-full"></div>
              <p className={isActive ? " p-3 pb-[16%]" : "hidden p-3 pb-[16%]"}>
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div> */}
            {/* <div className="bg-white flex flex-col p-1  items-center lg:w-[28rem] shadow-lg">
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] " onClick={HandleOpen2}>
                  Why Buy a Neon Light Sign from Custom Neon®?
                </p>
                {!isActive2 ? (
                  <ArrowDownward onClick={HandleOpen2} />
                ) : (
                  <ArrowUpward onClick={HandleOpen2} />
                )}
              </div>
              <div className="border  w-full"></div>

              <p
                className={isActive2 ? " p-3 pb-[16%]" : "hidden p-3 pb-[16%]"}
              >
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div> */}
            {/* <div className="bg-white flex flex-col p-1 items-center lg:w-[28rem] shadow-lg">
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px]" onClick={HandleOpen3}>
                  How Big Can My Custom-made Neon Be?
                </p>
                {!isActive3 ? (
                  <ArrowDownward onClick={HandleOpen3} />
                ) : (
                  <ArrowUpward onClick={HandleOpen3} />
                )}
              </div>

              <div className="border  w-full"></div>
              <p
                className={isActive3 ? " p-3 pb-[16%]" : "hidden p-3 pb-[16%]"}
              >
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div> */}
          </div>
          <div className="flex flex-col p-5 lg:w-[40rem]">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="!text-[22px]">
                  Our Design Service
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We are happy to offer a free design service to our customers,
                  providing one or more designs for your approval, at no extra
                  charge. If you have a change of mind and wish to amend or
                  cancel your order before the sign goes into production we will
                  happily offer a partial or full refund. Once a custom sign
                  order is approved and has gone into production we are no
                  longer able to offer a refund. Please note that a custom sign
                  is automatically approved if "YES" is selected when ordering.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="!text-[22px]">
                  {" "}
                  What Neon Light Colors Can I Choose?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We have a total of 18 colors to choose from. Eight of these
                  are white when the sign is turned off and colored when the
                  sign is switched on. The remaining ten colors come with a
                  colored tube, so the sign shows its color even when it's
                  turned off.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="!text-[22px]">
                  What are the Backboard Options?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>
                    Custom Neon signs are mounted on a clear, acrylic backboard.
                    We offer two standard backing options at no extra cost.
                  </p>
                  <li className="mx-12">
                    For script/cursive fonts - we recommend the cut around /
                    contoured acrylic backing.
                  </li>
                  <li className="mx-12">
                    For simple/block fonts - we recommend the rectangle acrylic
                    backing.
                  </li>
                  <p>
                    We also offer a cut-to-letter acrylic backboard option, as
                    well as acrylic stands and boxes. The cost for these options
                    is shown on the tool.{" "}
                  </p>
                  <p>
                    Backboard options include clear, black, white, colored,
                    mirrored, glitter and more. If you would like a backboard
                    that is not listed above please contact us for a quote.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* <div className="bg-white flex flex-col p-1 items-center lg:w-[28rem] shadow-lg">
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] " onClick={HandleOpen4}>
                  Our Design Service
                </p>
                {!isActive4 ? (
                  <ArrowDownward onClick={HandleOpen4} />
                ) : (
                  <ArrowUpward onClick={HandleOpen4} />
                )}
              </div>
              <div className="border  w-full"></div>
              <p
                className={isActive4 ? " p-3 pb-[16%]" : "hidden p-3 pb-[16%]"}
              >
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div>
            <div className="bg-white flex flex-col p-1 items-center lg:w-[28rem] shadow-lg">
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] " onClick={HandleOpen5}>
                  What Neon Light Colors Can I Choose?
                </p>
                {!isActive5 ? (
                  <ArrowDownward onClick={HandleOpen5} />
                ) : (
                  <ArrowUpward onClick={HandleOpen5} />
                )}
              </div>
              <div className="border  w-full"></div>
              <p
                className={isActive5 ? " p-3 pb-[16%]" : "hidden p-3 pb-[16%]"}
              >
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div>
            <div className="bg-white flex flex-col p-1 items-center lg:w-[28rem] shadow-lg">
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] " onClick={HandleOpen6}>
                  What are the Backboard Options?
                </p>
                {!isActive6 ? (
                  <ArrowDownward onClick={HandleOpen6} />
                ) : (
                  <ArrowUpward onClick={HandleOpen6} />
                )}
              </div>
              <div className="border  w-full"></div>
              <p
                className={isActive6 ? " p-3 pb-[16%]" : "hidden p-3 pb-[16%]"}
              >
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
