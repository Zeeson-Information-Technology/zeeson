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
    <footer className="bg-[#1C1E53] text-white">
      <div className="max-w-[80%] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-white/70">
              Creating digital excellence through innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-white/70 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="text-white/70 hover:text-white"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-white/70 hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="text-white/70">
              <p>Email: hello@zeeson.com.ng</p>
              <p>Phone: +234 (80) 3815-6896</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
          <p>© {year} Zeeson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
