import React from "react";

function Card({ children }) {
  return (
    <div className="rounded-lg px-[2rem] py-[3rem] bg-white shadow-sm flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default Card;
