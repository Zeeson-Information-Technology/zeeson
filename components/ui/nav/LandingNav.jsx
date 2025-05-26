import React from "react"
import Logo from "../Logo"
import Link from "next/link"

function LandingNav() {
  return (
    <nav className="max-w-[80%] mx-auto">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-white/80">Home</Link>
          <Link href="/portfolio" className="text-white hover:text-white/80">Portfolio</Link>
          <Link href="/contact" className="text-white hover:text-white/80">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default LandingNav
