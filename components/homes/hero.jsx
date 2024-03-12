import React from "react"
import Nav from "../ui/nav/nav"
import Banner from "./Banner"
import Image from "next/image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import BannerImg from "../../assets/Illustration.png"
import Button from "../ui/Button"
import Link from "next/link"

function Hero() {
  return (
    <div className="bg-[#1C1E53] pb-[3rem] pt-2 text-white">
      <div className="mt-8 mb-8">
        <Nav />
      </div>
      <Banner>
        <div className="max-w-[450px]">
          <h2 className="text-2xl  laptop:text-4xl mb-6 font-[600]">
            Building stellar websites for early startups
          </h2>
          <p className="text-sm font-[500] opacity-70 mb-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex items-center gap-8">
            <a href={"/works"}>
              <Button text={" View our work"} />
            </a>
            {/* <button className="flex items-center gap-4 text-[13px] md:text-base laptop:text-lg">
              <span className="font-[600]">View pricing</span>{" "}
              <HiOutlineArrowNarrowRight className="text-xl" />
            </button> */}
          </div>
        </div>
        <div>
          <Image src={BannerImg} height={300} width={550} alt="" />
        </div>{" "}
      </Banner>
    </div>
  )
}

export default Hero
