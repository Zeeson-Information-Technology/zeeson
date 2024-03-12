import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Overlay({ w, head, body, button }) {
  const style = `md:w-[${w}%]`;
  console.log(style === "md:w-[50%]");
  return (
    <div
      className={`bg-gradient-to-r from-[#1C1E53] to-[rgba(28,30,83,0.42)] ${
        w ? style + " " + "w-full" : "w-full"
      } h-full absolute top-0 left-0 z-50`}
    >
      <div className="z-60 text-white h-[400px] max-w-[80%] mx-auto flex flex-col justify-end xsm:max-h-full sm:max-h-[90%] md:gap-5 gap-3">
        {head && <h3>{head}</h3>}
        {body && <p className="text-[10px] opacity-75">{body}</p>}
        {button && (
          <button className="flex items-center mb-[2rem] text-[#FCD980] gap-2">
            <span>{button}</span>{" "}
            <HiOutlineArrowNarrowRight className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Overlay;
