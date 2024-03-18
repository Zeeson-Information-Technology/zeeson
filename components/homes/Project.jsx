import Image from "next/image"
import React from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import P1 from "../../assets/projects/project1.png"
import P2 from "../../assets/projects/project2.png"
import P3 from "../../assets/projects/project3.png"
import Overlay from "../ui/overlay"






function Project() {
  return (
    <div className="max-w-[80%] mx-auto my-[5rem]">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-[600] text-base md:text-2xl">View our projects</h3>
      </div>
      {/* Adjusted layout to use flex instead of grid for side-by-side arrangement */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Project 1 */}
        <div className="relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
          <Image src={P1} alt="Project 1" layout="responsive" width={700} height={400} />
          <Overlay
            head="Elevating Home Services: A Digital Revolution"
            body="Designed and developed a subscription-based platform that seamlessly connects homeowners with comprehensive service solutions."
            button={<a href="https://www.diboruwa.com" className="text-link">View project</a>}
          />
        </div>
        {/* Project 2 */}
        <div className="relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
          <Image src={P2} alt="Project 2" layout="responsive" width={700} height={400} />
          <Overlay
            head="Bridging Ideas Worldwide: Expert Connection Platform"
            body="The app that unites research and writing professionals with global clients, enhancing collaboration and innovation across borders."
            button={<a href="https://www.workmateteam.com" className="text-link">View Project</a>}
          />
        </div>
        {/* Project 3 */}
        <div className="relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
          <Image src={P3} alt="Project 3" layout="responsive" width={700} height={400} />
          <Overlay
            head="Cultivating Growth: Empowering Farmers with Technology"
            body="AgriTech solution, designed to connect smallholder farmers to vital resources like markets, machinery, and storage facilities."
            button={<a href="https://www.tractivengine.com" className="text-link">View project</a>}
          />
        </div>
      </div>
    </div>
  )
}


export default Project