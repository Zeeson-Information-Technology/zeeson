import React from "react";

function Banner({ children }) {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-[80%] mx-auto gap-12 laptop:justify-between laptop:pr-10 ">
      {children}
    </div>
  );
}

export default Banner;
