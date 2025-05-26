import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

function Logo() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) {
    // Return a placeholder during SSR
    return (
      <Link href="/">
        <Image
          src="/img1.jpg"
          alt="logo"
          height={70}
          width={80}
          priority
        />
      </Link>
    )
  }

  return (
    <Link href="/">
      <Image
        src="/img1.jpg"
        alt="logo"
        height={isMobile ? 50 : 70}
        width={isMobile ? 50 : 80}
        priority
      />
    </Link>
  )
}

export default Logo
