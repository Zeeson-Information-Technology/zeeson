import React from "react";
function GridItems({ data }) {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 my-[3rem] gap-4">
        {data.map((item, ind) => {
          const { icon, title, text } = item;
          return (
            <li key={ind} className="bg-[#F4F6FC] p-[2rem]">
              {icon}
              <h3 className="my-2 font-[600] text-2xl">{title}</h3>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GridItems;
