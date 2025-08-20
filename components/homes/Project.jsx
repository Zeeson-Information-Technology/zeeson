import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import Overlay from "../ui/overlay"
import P1 from "../../assets/projects/project1.png"
import P2 from "../../assets/projects/project2.png"
import P3 from "../../assets/projects/project3.png"
import P4 from "../../assets/projects/project4.png"
import P5 from "../../assets/projects/project5.jpg"
import P6 from "../../assets/projects/project6.jpg"

const projectData = [
  {
    image: P1,
    title: "Elevating Home Services: A Digital Revolution",
    description: "Designed and developed a subscription-based platform that seamlessly connects homeowners with comprehensive service solutions.",
    link: "https://www.diboruwa.com",
    tags: ["Web App", "UI/UX", "Full Stack"]
  },
  {
    image: P2,
    title: "STEM & African Languages Learning Platform",
    description: "An educational platform combining STEM education with African language learning, featuring interactive lessons, fun experiments, and native speaker sessions for students 16+.",
    link: "https://www.workmateteam.com",
    tags: ["EdTech", "STEM", "Languages"]
  },
  {
    image: P3,
    title: "Cultivating Growth: Empowering Farmers with Technology",
    description: "AgriTech solution, designed to connect smallholder farmers to vital resources like markets, machinery, and storage facilities.",
    link: "https://www.tractivengine.com",
    tags: ["Web App", "UI/UX", "Full Stack"]
  },
   {
    image: P4,
    title: "Adrian April: Comprehensive Business Solutions Platform",
    description: "A professional business consultancy platform offering project management, software development, and advisory services for Canadian businesses.",
    link: "https://www.adrianapril.ca/",
    tags: ["Business Solutions", "Web Design", "Consulting"]
  },
    {
    image: P5,
     title: "Aithlon – AI-Powered Fitness Coach (Mobile App)",
     description:
      "Subscription-based fitness app with onboarding, premium paywalls (monthly/yearly), and personalized coaching flows.",
    link: "#", 
    tags: ["Business Solutions", "Web Design", "Consulting"]
  },
  {
    image: P6,
    title: "PayLite – Digital Wallet & Bill Payments",
    description:
      "Cross-platform wallet with NGN balance, quick actions (Airtime, Data, Cable TV), and recent activity tracking.",
    link: "#",
    tags: ["Fintech", "Wallet", "Payments"]
  }
]

function Project({ showAll = false }) {
  const projects = showAll ? projectData : projectData.slice(0, 3)
  const [modalProject, setModalProject] = useState(null)

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
        <h3 className="font-bold text-3xl md:text-4xl tracking-tight text-[#1C1E53]">
          {showAll ? "All Projects" : "View our projects"}
        </h3>
        {!showAll && (
          <Link href="/portfolio" legacyBehavior>
            <a className="text-[#2405F2] flex items-center gap-2 font-semibold hover:underline hover:text-[#1C1E53] transition">
              View More <span>→</span>
            </a>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                layout="responsive"
                width={700}
                height={500}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#1C1E53]/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h4 className="font-bold text-xl mb-2 text-[#1C1E53]">{project.title}</h4>
              <p className="text-gray-700 mb-6">{project.description}</p>
              {project.link && project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2405F2] font-semibold hover:underline hover:text-[#1C1E53] transition"
                >
                  View project <span>→</span>
                </a>
              ) : (
                <button
                  className="inline-flex items-center gap-2 text-[#2405F2] font-semibold hover:underline hover:text-[#1C1E53] transition"
                  onClick={() => setModalProject(project)}
                >
                  Preview <span>→</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Modal for preview */}
      {modalProject && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-2xl text-[#1C1E53] hover:text-[#2405F2] transition"
              onClick={() => setModalProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={modalProject.image}
              alt={modalProject.title}
              width={400}
              height={250}
              className="rounded-xl mb-4"
            />
            <h4 className="font-bold text-2xl mb-2 text-[#1C1E53]">{modalProject.title}</h4>
            <p className="text-gray-700 mb-4">{modalProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {modalProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#1C1E53]/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Project