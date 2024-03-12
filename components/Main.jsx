import Link from "next/link"
import React from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Frame from "./ui/Frame"

import workData from "../data/workData"

function Main() {
  return (
    <main className="max-w-[80%] mx-auto my-[3rem] md:my-[5rem]">
      <div className="flex items-center gap-4 flex-wrap text-sm justify-center font-[600]  ">
        <Link href={"/"}>
          <span className="hover:text-[#2405F2] transition duration-160 ease-in-out cursor-pointer">
            All
          </span>
        </Link>
        <Link href={"/"}>
          <span className="hover:text-[#2405F2]  transition duration-160 ease-in-out cursor-pointer">
            Ui Design
          </span>
        </Link>
        <Link href={"/"}>
          <span className="hover:text-[#2405F2]  transition duration-160 ease-in-out cursor-pointer">
            Webflow Design
          </span>
        </Link>
        <Link href={"/"}>
          <span className="hover:text-[#2405F2]  transition duration-160 ease-in-out cursor-pointer">
            Figma Design
          </span>
        </Link>
      </div>
      <ul className="grid grid-cols-1 laptop:grid-cols-2 mt-[3rem] gap-y-4  ">
        {workData.map((item, ind) => {
          return (
            <li key={ind} className=" md:max-w-[90%] mx-auto">
              <Frame gradient={item.gradient} image={item.img} />
              <h2 className="font-[600] text-xl py-4">{item.temp}</h2>
              <p className="mb-4">{item.desc}</p>

              <Link href="/works/1">
                <button className="flex items-center gap-4 text-[13px] md:text-base laptop:text-lg">
                  <span className="font-[500]">{item.btnText}</span>{" "}
                  <HiOutlineArrowNarrowRight className="text-xl" />
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Main
