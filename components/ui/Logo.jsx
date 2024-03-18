import Link from "next/link"
import React, { useEffect, useState } from "react"
import Image from "next/image"
function Logo() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  console.log(width)
  return (
    <div className="text-2xl laptop:text-4xl font-[800]">
      <Link href={"/"}>
        {width > 800 ? (
          <Image
            src="/img1.jpg"
            alt="logo"
            className="h-[25px] w-[25px] md:h-[40px] md:w-[40px] object-contain"
            height={90}
            width={90}
          />
        ) : (
          <Image
            src="/img1.jpg"
            alt="logo"
            className="h-[25px] w-[25px] md:h-[40px] md:w-[40px]"
            height={60}
            width={60}
          />
        )}
      </Link>
    </div>
  )
}

export default Logo
