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
              At Zeeson, we believe that design is not just about aesthetics; it&#39;s 
              about finding innovative solutions to complex problems. Our team is dedicated to creating digital experiences that are not only visually appealing but also functional and intuitive. 
              Through a deep understanding of our clients&#39; needs and the latest technological advancements, 
              we ensure every project we undertake is tailored to solve specific challenges and achieve measurable results.
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
                Our approach is goal-oriented from the start. We dive deep into understanding your objectives 
                to ensure every design and technological solution we provide moves you closer to achieving your business goals.
                </p>
              </div>

              <div className="max-w-[550px]">
                <h3 className="text-2xl  md:text-3xl font-[600] my-5">
                  Continuous improvement
                </h3>
                <p>
                The digital landscape is ever-evolving, and so are we. 
                Our commitment to continuous learning and improvement means we always bring the latest and best practices to your projects, ensuring your business stays ahead.

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
                We aim to inspire with our designs, innovate with our solutions, and share our knowledge to empower our clients. Our mission is to 
                create digital products that not only meet but exceed expectations, driving growth and success for businesses worldwide.
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
                Our vision is clear – to be the leading force in the digital transformation of businesses, with a laser focus on delivering exceptional results. 
                By staying ahead of the curve and prioritizing our clients&#39; success, we aim to redefine what it means to be a digital partner
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
        {/* <div className="bg-[#EEF4FA]">
          <Team />
        </div> */}
      </section>
      <Footer />
    </main>
  )
}

export default About
