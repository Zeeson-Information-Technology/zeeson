import React from 'react'
import Nav from '../components/ui/nav/nav'
import ProjectSection from '../components/homes/Project'
import Footer from '../components/ui/Footer'
import Head from 'next/head'

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Zeeson Info Tech - Portfolio</title>
      </Head>
      <div className="bg-[#1C1E53] text-white py-8">
        <div className="max-w-[80%] mx-auto">
          <Nav />
          <div className="py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Discover our successful digital transformations and innovative solutions that have helped businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
      <ProjectSection showAll={true} />
      <Footer />
    </div>
  )
}
