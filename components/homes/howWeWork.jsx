import Image from "next/image"
import React from "react"
import P1 from "../../assets/pointer1.png"
import P2 from "../../assets/pointer2.png"
import P3 from "../../assets/pointer3.png"
import P4 from "../../assets/pointer4.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
function HowWeWork() {
  return (
    <div className="bg-[#F4F6FC]  ">
      <div className="flex flex-col md:flex-row gap-[2rem] sm:gap-y-[4rem] py-[5rem] max-w-[80%] mx-auto md:justify-between ">
        <div className="max-w-[350px]">
          <h2 className="text-2xl font-[600] mb-4 ">How we work</h2>
          <p className="opacity-75 laptop:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button className="flex items-center gap-2 mt-4">
            <span>Get in touch with us</span>{" "}
            <HiOutlineArrowNarrowRight className="text-xl" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 laptop:gap-x-8 gap-y-10">
          <div className="laptop:w-[250px]">
            <Image src={P1} alt="" />
            <h3 className="font-[500] text-2xl my-3">Strategy</h3>
            <p className="opacity-70">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
          <div className="laptop:w-[250px]">
            <Image src={P2} alt="" />
            <h3 className="font-[500] text-2xl my-3">Wireframing</h3>
            <p className="opacity-70">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
          <div className="laptop:w-[250px]">
            <Image src={P3} alt="" />
            <h3 className="font-[500] text-2xl my-3">Design</h3>
            <p className="opacity-70">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
          <div className="laptop:w-[250px]">
            <Image src={P4} alt="" />
            <h3 className="font-[500] text-2xl my-3">Development</h3>
            <p className="opacity-70">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork
