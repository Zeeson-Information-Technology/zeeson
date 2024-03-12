import Link from "next/link"
import React from "react"
import Logo from "./Logo"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"

function Footer() {
  return (
    <div>
      <div className="bg-[#1C1E53] text-white ">
        <div className=" max-w-[96%] md:max-w-[80%] mx-auto pt-[5rem]">
          <div className="grid grid-cols-2 gap-6 md:gap-0 ">
            <div className="md:max-w-[70%]">
              <Logo />
              <p className="mt-4 opacity-90 text-sm md:text-base">
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </div>
            <div className=" md:max-w-[70%]">
              <h2 className="text-xl md:text-3xl font-[600] mb-4">
                Lets Talk!
              </h2>
              <p className="opacity-90 text-sm md:text-base">
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
              <div className="md:text-xl flex items-center gap-4 mt-4 ">
                <Link href={"/"}>
                  <BsFacebook className="cursor-pointer" />
                </Link>
                <Link href={"/"}>
                  <BsTwitter className="cursor-pointer" />
                </Link>
                <Link href={"/"}>
                  <BsInstagram className="cursor-pointer" />
                </Link>
                <Link href={"/"}>
                  <BsLinkedin className="cursor-pointer" />
                </Link>
              </div>
            </div>
            <div className="bg-[#FCD980] grid laptop:grid-cols-2 gap-y-3 laptop:gap-y-0 px-8 py-4 text-black mt-2 col-span-2 md:col-span-1">
              <div>
                <h4 className="text-xl font-[600] mb-2">Email me at</h4>
                <p>contact@website.com</p>
              </div>
              <div>
                <h4 className="text-xl font-[600] mb-2">Call us</h4>
                <p>0927 6277 28525</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[80%] md:max-w-[90%] laptop:max-w-[80%] mx-auto py-4 flex items-center justify-between">
        <p>Copyright &copy;2022, Tekdroid.com</p>
        <div className=" hidden md:flex items-center gap-6 font-[500]">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>Pricing</Link>
          <Link href={"/"}>Faq</Link>
          <Link href={"/"}>Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
