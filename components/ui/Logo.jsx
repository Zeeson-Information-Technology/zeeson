import Link from "next/link"
import React from "react"
import Image from "next/image"
function Logo() {
  return (
    <div className="text-2xl laptop:text-4xl font-[800]">
      <Link href={"/"}>
        <Image
          src="/img1.jpg"
          alt="logo"
          className="h-[25px] w-[25px] md:h-[40px] md:w-[40px]"
          height={40}
          width={40}
        />
      </Link>
    </div>
  )
}

export default Logo
