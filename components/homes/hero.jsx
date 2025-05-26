import React from "react"
import LandingNav from "../ui/nav/LandingNav"
import Banner from "./Banner"
import Image from "next/image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import BannerImg from "../../assets/Illustration.png"
import Button from "../ui/Button"
import Link from "next/link"

function Hero() {
  return (
    <div className="bg-gradient-to-br from-[#1C1E53] to-[#2D2F68] min-h-screen pb-[3rem] pt-2 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="mt-8 mb-8 relative z-10">
        <LandingNav />
      </div>
      <Banner>
        <div className="max-w-[550px] animate-fadeIn">
          <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
            🚀 AI • Web • Cloud • Compliance
          </span>
          <h2 className="text-3xl md:text-4xl laptop:text-6xl mb-8 font-bold leading-tight animate-slideUp">
            Complete Digital Transformation for Modern Enterprises
          </h2>
          <p className="text-xl font-medium text-white/80 mb-8 animate-slideUp delay-100">
            From AI integration to compliant web solutions, we empower businesses with comprehensive digital transformation services that drive innovation and growth.
          </p>
          <div className="flex items-center gap-6 animate-slideUp delay-200">
            <a href={"/contact"}>
              <Button text={"Get in Touch"} />
            </a>
            <a href="/portfolio" className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
              View Our Work
              <HiOutlineArrowNarrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
          <Image 
            src={BannerImg} 
            height={400} 
            width={650} 
            alt="Hero illustration"
            className="relative z-10 drop-shadow-2xl" 
          />
        </div>
      </Banner>
    </div>
  )
}

export default Hero
