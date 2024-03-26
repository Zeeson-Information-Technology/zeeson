import Link from "next/link"
import dynamic from "next/dynamic"
import React from "react"

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"
const Logo = dynamic(() => import("./Logo"), {
  ssr: false,
})

function Footer() {
  const year = new Date().getFullYear() // Get current year dynamically

  return (
    <div>
      <div className="bg-[#1C1E53] text-white w-full ">
        <div className="max-w-[90%] mx-auto pt-[5rem]">
          <div className="grid grid-cols-2 gap-6 md:gap-0 w-full ">
            <div className="md:max-w-[70%]">
              <Logo />

              <p className="mt-4 opacity-90 text-sm md:text-base">
                Ready to enhance your digital presence? Let&#39;s collaborate to
                create memorable online experiences.
              </p>
            </div>
            <div className=" md:max-w-[70%] pr-4 ">
              <h2 className="text-xl md:text-3xl font-[600] mb-4">
                Connect With Us
              </h2>
              <p className="opacity-90 text-sm md:text-base">
                Discuss your project or explore more about how we can elevate
                your business online. We’re here to help.
              </p>
              <div className="md:text-xl flex items-center gap-4 mt-4 ">
                <Link href={"/"}>
                  <BsTwitter className="cursor-pointer" />
                </Link>

                <Link href={"/"}>
                  <BsLinkedin className="cursor-pointer" />
                </Link>
              </div>
            </div>
            <div className="bg-[#FCD980] grid laptop:grid-cols-2 gap-y-3 laptop:gap-y-0 md:px-8 px-[4%]  py-4 text-black mt-2 col-span-2 md:col-span-1 md:mr-16">
              <div>
                <h4 className="text-xl font-[600] mb-2">Email us at</h4>
                <p>info@zeeson.com.ng</p>
              </div>
              <div>
                <h4 className="text-xl font-[600] mb-2">Call us</h4>
                <p>+2348038156896</p>
              </div>
            </div>
          </div>
        </div>
        {/* Updated copyright section */}
        <div className="text-center mt-[30px]">
          <p>Copyright &copy;{year}, Zeeson Information Technology</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
