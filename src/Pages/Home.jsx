import React, { useState } from "react";
import girl from "../Images/custom2.jpg";
import fryd from "../Images/custom1.jpg";
import number from "../Images/OneToFive.jpg";
import mid1 from "../Images/custom3.jpg";
import mid2 from "../Images/custom3mobilelandscape.jpg";
import mid3 from "../Images/custom3mob.jpg";
import FAQ from "../components/FAQ";
import videoimg from "../Images/videoimage.jpg";
import CardData from "../Mock/CardData";
import Highlights from "../components/Highlights";
import BTN from "../components/BTN";
import Text from "../components/Text";
import { CreateTextLandscape } from "../components/Mobile/containers";
import FloatingB from "../components/FloatingB";

const Home = () => {
  const [play, setPlay] = useState(false);

  const Toplay = () => {
    setPlay((current) => !current);
  };
  return (
    <>
      <Text />
      <div className="flex flex-col lg:hidden ">
        <CreateTextLandscape />
      </div>
      <BTN />
      <div className=" flex flex-col justify-center  items-center gap-5 pb-5 bg-white">
        <div className="font-poppins">
          <p className="text-[40px] uppercase text-[#FF7AC7] pt-10 font-[600] text-center mx-2 leading-10 ">
            Create a Custom Neon® sign in 5 easy steps
          </p>
        </div>
        {play ? (
          <iframe
          title="1"
            src="https://youtu.be/JRg9fx2mIBk"
            controls
            autoPlay={false}
            className="w-[800px] h-[400px] "
          />
        ) : (
            <iframe
            title="2"
            src="https://youtu.be/JRg9fx2mIBk"
            controls
            autoPlay={false}
            className="w-[800px] h-[400px] hidden"
          />
        )}
        {play ? (
          <img src={videoimg} alt=""  className="hidden" onClick={Toplay} />
        ) : (
          <img src={videoimg} alt=""  className="" onClick={Toplay} />
        )}
        <img
          src={number}
          width={1200}
          alt="one-five"
          className="lg:flex  hidden p-5"
        />
      </div>
      <div>
        <img src={mid1} alt="" className="object-cover max-lg:hidden" />
        <img src={mid2} alt="" className="max-md:hidden lg:hidden" />
        <img src={mid3} alt="" className="md:hidden" />
      </div>
      <div
        className="flex flex-col  bg-fixed bg-center gap-[600px] bg-cover bg-no-repeat w-screen"
        style={{
          backgroundImage: `url(${girl})`,
        }}
      >
        <Highlights />
        <div
          className="flex flex-col  bg-fixed bg-center gap-[800px] bg-cover bg-no-repeat w-screen"
          style={{
            backgroundImage: `url(${fryd})`,
          }}
        >
          <CardData />

          <FAQ />
        </div>
      </div>
      <FloatingB />
    </>
  );
};

export default Home;
