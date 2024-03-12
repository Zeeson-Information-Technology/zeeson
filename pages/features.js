import Image from "next/image"
import React from "react"
import Banner from "../components/homes/Banner"
import Button from "../components/ui/Button"
import Footer from "../components/ui/Footer"
import Nav from "../components/ui/nav/nav"
import {
  feature,
  image1,
  image2,
  image3,
  image4,
} from "../assets/features/featureImg"
import { data } from "../data/featureData"
import GridItems from "../components/features/GridItems"
import TextContainer from "../components/features/TextContainer"
import Accordion from "../components/ui/Accordion"

function Features() {
  return (
    <div>
      <div className="bg-[#1C1E53] pb-[3rem] pt-2 text-white">
        <div className="mt-8 mb-8">
          <Nav />
        </div>
        <Banner>
          <div className="max-w-[400px]">
            <h2 className="text-2xl  laptop:text-4xl mb-6 font-[600]">
              All the features you need
            </h2>
            <p className="text-sm font-[500] opacity-70 mb-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="flex items-center gap-8">
              <a href={"/pricing"}>
                <Button text={" View Pricing"} />
              </a>
            </div>
          </div>
          <div>
            <Image src={feature} height={400} width={550} alt="" />
          </div>
        </Banner>
      </div>
      <div className="max-w-[80%] mx-auto">
        <GridItems data={data} />
      </div>
      {/* ONE */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[6rem] gap-10 max-w-[80%] mx-auto">
          <div>
            <TextContainer />
          </div>
          <div className="max-w-[90%]">
            <Image src={image1} height={340} width={560} alt="" />
          </div>
        </div>
      </div>
      {/* TWO */}
      <div className="bg-[#F4F6FC]">
        <div className="grid grid-cols-1 md:grid-cols-2 py-[6rem] gap-10  max-w-[80%] mx-auto">
          <div className="max-w-[90%] ">
            <Image src={image2} height={340} width={560} alt="" />
          </div>
          <div>
            <TextContainer />
          </div>
        </div>
      </div>

      {/* THREE */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[6rem] gap-10 max-w-[80%] mx-auto">
          <div>
            <TextContainer />
          </div>
          <div className="max-w-[90%] ">
            <Image src={image3} height={340} width={560} alt="" />
          </div>
        </div>
      </div>

      {/* FOUR */}
      <div className="bg-[#FCD980]">
        <div className="grid grid-cols-1 md:grid-cols-2 py-[6rem] gap-10 max-w-[80%] mx-auto">
          <div className="max-w-[90%] ">
            <Image src={image4} height={340} width={560} alt="" />
          </div>
          <div>
            <TextContainer />
          </div>
        </div>
      </div>

      <div>
        <Accordion />
      </div>

      <Footer />
    </div>
  )
}

export default Features
