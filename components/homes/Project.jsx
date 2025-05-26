import Image from "next/image"
import React from "react"
import P1 from "../../assets/projects/project1.png"
import P2 from "../../assets/projects/project2.png"
import P3 from "../../assets/projects/project3.png"
import P4 from "../../assets/projects/project4.png"
import Overlay from "../ui/overlay"

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
]

function Project({ showAll = false }) {
  const projects = showAll ? projectData : projectData.slice(0, 3)

  return (
    <div className="max-w-[80%] mx-auto my-[5rem]">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-[600] text-2xl md:text-3xl">
          {showAll ? "All Projects" : "View our projects"}
        </h3>
        {!showAll && (
          <a href="/portfolio" className="text-[#2405F2] flex items-center gap-2 hover:opacity-80">
            View More <span>→</span>
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl">
            <Image 
              src={project.image} 
              alt={project.title} 
              layout="responsive" 
              width={700} 
              height={500}
              className="transition-transform group-hover:scale-105"
            />
            <Overlay
              head={project.title}
              body={project.description}
              button={
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:opacity-80"
                >
                  View project <span>→</span>
                </a>
              }
            />
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
              {project.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project