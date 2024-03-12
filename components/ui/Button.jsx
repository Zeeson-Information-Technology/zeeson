import React from "react";
import Link from "next/link";

function Button({ text }) {
  return (
    <button className="border  font-[600] rounded-full py-3 px-4 text-[13px] md:text-base laptop:text-lg bg-[#FCD980] text-black hover:bg-[#FDE4A6]transition ease duration-150">
      {text}
    </button>
  );
}

export default Button;
