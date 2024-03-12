import Image from "next/image"
import React from "react"
import { line } from "../../assets/about/about"
function Process() {
  return (
    <div className="mt-[4rem] mb-[3rem]">
      <h2 className="font-[600] text-2xl text-center mb-4 w-[200px] md:w-full mx-auto">
        The process we follow
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-4 items-center gap-6">
        <div>
          <div>
            <Image src={line} alt="" />
          </div>
          <h3 className="text-xl font-[500] my-3 ">Planning</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
        <div className="max-w-[90%] md:max-w-full">
          <div className="">
            <Image src={line} alt="" />
          </div>
          <h3 className="text-xl font-[500] my-3 ">Conception</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
        <div>
          <div>
            <Image src={line} alt="" />
          </div>
          <h3 className="text-xl font-[500] my-3 ">Design</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
        <div>
          <div>
            <Image src={line} alt="" />
          </div>
          <h3 className="text-xl font-[500] my-3 ">Development</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
      </div>
    </div>
  )
}

export default Process
