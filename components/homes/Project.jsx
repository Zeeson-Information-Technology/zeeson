import Image from "next/image"
import React from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import P1 from "../../assets/projects/project1.png"
import P2 from "../../assets/projects/project2.png"
import P3 from "../../assets/projects/project3.png"
import Overlay from "../ui/overlay"

function Project() {
  return (
    <div className="max-w-[80%] mx-auto my-[5rem]">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-[600] text-base md:text-2xl">View our projects</h3>
        <button className="flex items-center gap-4 font-[500]">
          <span className="text-sm laptop:text-lg">View more</span>
          <HiOutlineArrowNarrowRight className="text-xl" />
        </button>
      </div>
      <div className="grid gap-y-4 grid-cols-1 md:grid-cols-3">
        <div className=" col-span-1 md:col-span-2 laptop:max-w-[35rem] ">
          <div className="relative ">
            <Image src={P1} alt="" />

            <Overlay
              w={50}
              head="Workhub office Webflow Webflow Design"
              body="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam "
              button="View project"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <div className="relative">
              <Overlay
                head="Unisaas Website 
Design"
                button="View portfolio"
              />
              <Image src={P3} alt="" />
            </div>
          </div>
          <div>
            <Image src={P2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
