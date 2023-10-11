import { useEffect, useRef, useState } from "react";
import { ColorSelector } from "../ColorSelector";
import { FontSelector } from "../FontSelector";
import { COLORS, FONTS, LANDSCAPE_BG_PATH } from "../constants";
import { Stepper } from "./Stepper";
import { TextArea } from "./TextArea";

import Backboard from "./Backboard";
import Size from "./Background";
import { BackgroundImageSelector } from "./BackgroundImageSelector";
import { Button } from "@mui/material";

const stepsLabel = [
  "Enter Your Text",
  "Choose Font",
  "Choose Color",
  "Choose Size",
  "Backboard and Options",
];

export const CreateTextLandscape = () => {
  const [step, setStep] = useState(0);
  const [text, setText] = useState("");
  const [font, setFont] = useState();
  const [color, setColor] = useState();
  const [bgImg, setBgImg] = useState(LANDSCAPE_BG_PATH);
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

  const previous = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  const next = () => {
    if (step === stepsLabel.length - 1) return;
    setStep(step + 1);
  };

  return (
    <section className="px-2">
      <div
        className="rounded-t-xl relative bg-cover bg-bottom-center bg-no-repeat h-[28.125rem] sm:h-[34.375rem] grid place-items-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div
          ref={elementRef}
          className="text-5xl text-white bg-opacity-60 backdrop:blur-md p-5 rounded-lg absolute"
          style={{
            fontFamily: font?.value,
            color: color?.value,
          }}
        >
          {text || "Your Text"}
        </div>

        <BackgroundImageSelector onSelect={(img) => setBgImg(img)} />
      </div>
      <section>
        <Stepper
          step={step}
          label={stepsLabel[step]}
          totalSteps={stepsLabel.length - 1}
          onNext={next}
          onPrev={previous}
        />
        <div className="mt-2 px-2">
          {step === 0 && (
            <TextArea value={text} onChange={(value) => setText(value)} />
          )}
          {step === 1 && (
            <FontSelector
              fonts={FONTS}
              selected={font}
              onSelect={(font) => setFont(font)}
            />
          )}
          {step === 2 && (
            <ColorSelector
              colors={COLORS}
              selected={color}
              onSelect={(color) => setColor(color)}
            />
          )}
        </div>

        {step === 3 && <Size />}
        {step === 4 && <Backboard />}
      </section>
      <div className="flex m-3 justify-end ">
          <Button
            variant="contained"
            className="hover:!bg-pink-500 !bg-[#5761ff] !rounded-lg   lg:!text-lg !font-poppins"
            onClick={next}
          >
            Next
          </Button>
        </div>
    </section>
  );
};
