import React from "react";
import Slider from "../components/ui/Slider";
import { SliderData } from "../components/ui/SliderData";

function Slide() {
  return (
    <div>
      <Slider slide={SliderData} />
    </div>
  );
}

export default Slide;
