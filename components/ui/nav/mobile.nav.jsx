import React from "react"
import { IoClose } from "react-icons//io5"
import Link from "next/link"
function Mobile_Nav({ onClick }) {
  const nav_class =
    "hover:scale-100 hover:text-[#1C1E53] max-w-fit mx-auto w-[90%]"
  return (
    <nav className="laptop:hidden max-w-[90%] mx-auto sm:max-w-[60%] text-black ">
      <ul className="bg-gradient-to-r from-[#F4EDE1] to-[#98B1C6] text-xl rounded-md  mx-auto text-center grid gap-4 font-[600] pt-6 pb-10 relative z-50 bg-transparent ">
        <Link href={"/"}>
          <li className={nav_class}>Home</li>
        </Link>
        <Link href={"/features"}>
          <li className={nav_class}>Features</li>
        </Link>
        <Link href={"/works"}>
          <li className={nav_class}>Works</li>
        </Link>
        {/* <Link href={"/blogs"}>
          <li className={nav_class}>Blogs</li>
        </Link> */}
        {/* <Link href={"/pricing"}>
          <li className={nav_class}>Pricing</li>
        </Link> */}
        <Link href={"/contact"}>
          <li className={nav_class}>Contact Us</li>
        </Link>
        <Link href={"/privacy"}>
          <li className={nav_class}>Privacy</li>
        </Link>
        <IoClose
          className=" text-4xl absolute top-2 right-4 sm:right-6 text-white"
          onClick={() => onClick(false)}
        />
      </ul>
    </nav>
  )
}

export default Mobile_Nav
