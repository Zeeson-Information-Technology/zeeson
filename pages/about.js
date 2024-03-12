import React from "react"
import Image from "next/image"
import Footer from "../components/ui/Footer"
import MainNav from "../components/ui/nav/MainNav"
import { data } from "../data/aboutData"
import { about1, about2, about3, about4 } from "../assets/about/about"
import Process from "../components/about/Process"
import GridItems from "../components/features/GridItems"
import Team from "../components/about/Team"

function About() {
  return (
    <main>
      <MainNav />
      <section className="my-[3rem] md:my-[5rem]">
        <div className="max-w-[80%] mx-auto">
          <div className="flex flex-col gap-y-6 laptop:gap-y-0 laptop:flex-row justify-between items-center ">
            <div className="max-w-[600px]">
              <h2 className="text-xl font-[500]">About us</h2>
              <h3 className="text-2xl md:text-3xl font-[600] my-5">
                Our designs solve problems
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div>
              <Image src={about1} alt="" />
            </div>
          </div>

          <div className="my-[2rem]">
            <div className=" flex flex-col laptop:flex-row items-center justify-between bg-[#F4F5F5] px-8 py-10">
              <div className="max-w-[550px]">
                <h2 className="text-xl font-[500]">Who we are</h2>
                <h3 className="text-2xl md:text-3xl font-[600] my-4">
                  Goal focussed
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="max-w-[550px]">
                <h3 className="text-2xl  md:text-3xl font-[600] my-5">
                  Continuous improvement
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div>
              <Image src={about2} alt="" />
            </div>
          </div>
          <Process />
        </div>

        <div className="bg-[#EEF4FA] ">
          <div className="max-w-[80%] mx-auto py-[4rem]">
            <div className="flex flex-col gap-y-6 laptop:gap-y-0 laptop:flex-row justify-between mb-[4rem] ">
              <div className="max-w-[600px]">
                <h2 className="text-xl font-[500]">Our Mission </h2>
                <h3 className="text-2xl md:text-3xl font-[600] my-5">
                  Inspire, Innovate, Share
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <Image src={about3} alt="" />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-y-6 laptop:gap-y-0 laptop:flex-row justify-between py-[4rem] ">
              <div>
                <Image src={about4} alt="" />
              </div>
              <div className="max-w-[600px]">
                <h2 className="text-xl font-[500]">Our Vision </h2>
                <h3 className="text-2xl md:text-3xl font-[600] my-5">
                  Laser focus
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[80%] mx-auto">
          <div className="max-w-[400px] mx-auto text-center my-[2rem]">
            <h2 className="font-[600] text-3xl">
              The benefits of working with us
            </h2>
          </div>
          <GridItems data={data} />
        </div>
        <div className="bg-[#EEF4FA]">
          <Team />
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default About
