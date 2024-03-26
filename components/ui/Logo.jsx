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

  return (
    <Link href={"/"}>
      {width > 800 ? (
        <Image src="/img1.jpg" alt="logo" height={70} width={80} />
      ) : (
        <Image src="/img1.jpg" alt="logo" height={50} width={50} />
      )}
    </Link>
  )
}

export default Logo
