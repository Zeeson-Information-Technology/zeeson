import React from "react";

function GridItems({ icon, title, body }) {
  return (
    <div className="bg-white">
      <div className="max-w-[80%] mx-auto py-8">
        <div>{icon}</div>
        <h3 className="text-xl md:text-2xl font-[600] mt-4">{title}</h3>
        <p className="opacity-80 text-sm md:text-base mt-3">{body}</p>
      </div>
    </div>
  );
}

export default GridItems;
