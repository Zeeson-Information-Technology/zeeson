import React, { useState } from "react"
import Link from "next/link"
import { BiMenuAltRight } from "react-icons/bi"
import Logo from "../Logo"
import Mobile_Nav from "./mobile.nav"

function Nav() {
  const [togglemenu, setTogglemenu] = useState(false)
  return (
    <nav className=" bg-[#1C1E53] text-white relative">
      <div className=" flex justify-between items-center  mx-auto max-w-[80%]">
        <Logo />
        {/* desktopMenu */}
        <div className=" hidden laptop:flex items-center gap-6 font-[500]">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/features"}>Features</Link>
          {/* <Link href={"/pricing"}>Pricing</Link> */}
          <Link href={"#faq"}>Faq</Link>
          {/* <Link href={"/blogs"}>Blog</Link> */}
          <Link href={"/contact"}>
            <button className="border rounded-full px-4 py-2">
              Contact us
            </button>
          </Link>
        </div>
        {!togglemenu && (
          <BiMenuAltRight
            className="text-3xl md:text-4xl laptop:hidden"
            onClick={() => setTogglemenu(true)}
          /> // toggle the menu open and hide the button
        )}
      </div>
      {togglemenu && (
        <div
          className="absolute w-full top-0 h-screen z-40"
          onClick={() => setTogglemenu(false)}
        >
          <Mobile_Nav onClick={setTogglemenu} />
        </div>
      )}
    </nav>
  )
}

export default Nav
