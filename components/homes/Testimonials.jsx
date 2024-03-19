import Image from "next/image";
import React from "react";
import Slider from "./Slider";
import { IoIosArrowBack } from "react-icons/io";

function Testimonials() {
  return (
    <div className="bg-[#f4f6fc93]">
      <div className="max-w-[90%] md:max-w-[80%] mx-auto flex flex-col md:flex-row justify-center gap-6 py-[2rem] laptop:py-[4rem] ">
        <div className="max-w-[80%]  mx-auto mb-6">
          <h2 className="font-[600] text-xl mb-4">
          Hear from Those Who&#39;ve Partnered with Us
          </h2>
          <p className="opacity-90">
            Discover the experiences and outcomes of those who&#39;ve collaborated with us, highlighting our commitment to excellence and partnership.
          </p>
        </div>

        <div className="max-h-[90%] w-[3px] bg-gray-400 mx-[2rem]"></div>
        <Slider />
      </div>
    </div>
  );
}

export default Testimonials;
