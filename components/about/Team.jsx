import Image from "next/image"
import React from "react"
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"
import Card from "./Card"
import { about5, about6, about7, about8 } from "../../assets/about/about"
import Link from "next/link"

function Team() {
  return (
    <div className="max-w-[80%] mx-auto py-[4rem]">
      <h2 className="font-[600] text-2xl text-center">Meet our team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-4 gap-6 mt-[2.5rem]">
        <Card>
          <div className="relative rounded-full h-full flex justify-center items-center">
            <div className="bg-gradient-to-b to-[#5339fa93] from-[#ffffff11] absolute top-0 left-0 z-50 h-full w-full rounded-full">
              <div className="flex items-end h-full pb-[2rem] gap-3 justify-center text-white">
                <Link href={"/"}>
                  <BsFacebook className="cursor-pointer" />
                </Link>
                <Link href={"/"}>
                  <BsTwitter className="cursor-pointer" />
                </Link>
                <Link href={"/"}>
                  <BsLinkedin className="cursor-pointer" />
                </Link>
              </div>
            </div>
            <Image src={about5} alt="" />
          </div>
          <h3 className="font-[500] text-xl my-4">Adeyemo Akinola</h3>
          <p>CEO</p>
        </Card>
        <Card>
          <Image src={about6} alt="" />
          <h3 className="font-[500] text-xl my-4">Emmanuel Akinroye</h3>
          <p>CTO</p>
        </Card>
        <Card>
          <Image src={about7} alt="" />
          <h3 className="font-[500] text-xl my-4">Adeyemi Shammah</h3>
          <p>Project Manager</p>
        </Card>
        <Card>
          <Image src={about8} alt="" />
          <h3 className="font-[500] text-xl my-4">Frederick Ipki</h3>
          <p>Design Lead</p>
        </Card>
      </div>
    </div>
  )
}

export default Team
