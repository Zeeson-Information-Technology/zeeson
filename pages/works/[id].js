import React from "react"
import Footer from "../../components/ui/Footer"
import Image from "next/image"
import Frame from "../../components/ui/Frame"
import MainNav from "../../components/ui/nav/MainNav"
import work1 from "../../assets/works/work1.png"
import LetBuildSomething from "../../components/LetBuildSomething"

function WorkDetail() {
  return (
    <main>
      <MainNav />
      <section className=" max-w-[90%]  md:max-w-[75%] laptop:max-w-[60%] mx-auto my-[4rem]">
        <div className="md:max-w-[80%]">
          <h2 className="text-[20px] md:text-[25px] font-[500]">
            Web design and development
          </h2>
          <h3 className="text-3xl md:text-4xl font-[600] py-3 md:py-6">
            Finsweet Design case studies
          </h3>
          <p className="text-[15px] md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>
        <div className="my-8">
          <div
            className={` bg-gradient-to-r ${"from-[#F4EDE1] to-[#98B1C6]"} p-6`}
          >
            <div className="min-w-fit">
              <Image src={work1} layout="responsive" alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between text-sm md:text-base laptop:text-xl gap-4  border-b-[3px]">
          <div className="">
            <h3 className="text-[12px] md:text-[14px]">Client</h3>
            <p>Facebook.com</p>
          </div>
          <div>
            <h3 className="text-[12px]  md:text-[14px]">Service</h3>
            <p>Product Design</p>
          </div>
          <div className="mb-6">
            <h3 className="text-[12px]  md:text-[14px]">Deliverable</h3>
            <p>UI Screens, UX Flow & Prototype</p>
          </div>
        </div>
        <div className="text-[15px] md:text-base mt-[3rem] laptop:max-w-[80%] mx-auto">
          <h3 className="font-[600] text-3xl mb-[1rem]">About the project</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="list-disc my-4 mx-4">
            <li className="leading-[36px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li className="leading-[36px]">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </li>
            <li className="leading-[36px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </li>
            <li className="leading-[36px]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
            </li>
          </ul>
        </div>
        <div className="text-[15px] md:text-base mt-[3rem] laptop:max-w-[80%] mx-auto">
          <h3 className="font-[600] text-3xl mb-[1rem]">How we do it</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="list-disc my-4 mx-4">
            <li className="leading-[36px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li className="leading-[36px]">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </li>
            <li className="leading-[36px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </li>
            <li className="leading-[36px]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between flex-wrap border-t border-b p-4 gap-2">
          <h3 className="text-[20px]">Keywords</h3>
          <h4>Design</h4>
          <h4>Ui/Ux</h4>
          <h4>Wireframing</h4>
          <h4>Branding</h4>
          <h4>Development</h4>
          <h4>Webflow</h4>
        </div>
        <div className="laptop:max-w-[80%] text-center mt-[2rem]">
          <LetBuildSomething />
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default WorkDetail
