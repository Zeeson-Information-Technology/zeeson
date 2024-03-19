import React from "react"
import { HiUserGroup } from "react-icons/hi"
import GridItems from "./GridItems"
import {
  BsFillCheckCircleFill,
  BsQuestionCircleFill,
  BsStopwatchFill,
} from "react-icons/bs"
import { RiPencilRuler2Line } from "react-icons/ri"
import { CgNotes } from "react-icons/cg"

function Features() {
  const featureData = [
    {
      id: 1,
      icon: <HiUserGroup color="#5239FA" className="text-[2rem]" />,
      title: "Client-First Approach",
      body: "At the heart of our operations is a commitment to understanding and prioritizing your business goals, ensuring every solution aligns with your vision.",
    },
    {
      id: 2,
      icon: <BsFillCheckCircleFill color="#5239FA" className="text-[2rem]" />,
      title: "Unlimited Revisions Until Perfect",
      body: "Our commitment is to perfection. Enjoy the freedom of unlimited revisions until your digital solution exactly matches your vision and standards",
    },
    {
      id: 3,
      icon: <RiPencilRuler2Line color="#5239FA" className="text-[2rem]" />,
      title: "Template Customization",
      body: "Break free from the ordinary with fully customizable templates that stand out in the digital landscape.",
    },
    {
      id: 4,
      icon: <BsQuestionCircleFill color="#5239FA" className="text-[2rem]" />,
      title: "Customer Sastisfaction",
      body: "Your satisfaction is our success. We strive to exceed expectations with every project we undertake",
    },
    {
      id: 5,
      icon: <BsStopwatchFill color="#5239FA" className="text-[2rem]" />,
      title: "Quick Delivery",
      body: " Time is of the essence. Our efficient workflows ensure your projects are delivered promptly without compromising on quality.",
    },
    {
      id: 6,
      icon: <CgNotes color="#5239FA" className="text-[2rem]" />,
      title: "Hands-on approach",
      body: "Our team is actively involved at every stage, ensuring a personalized and cohesive development process from start to finish.",
    },
  ]
  return (
    <div className="bg-[#F4F6FC]">
      <div className="max-w-[80%] mx-auto pb-8">
        <div className="flex flex-col  items-center pt-10 max-w-md mx-auto">
          <h2 className="font-[600]">Features</h2>
          <h3 className="font-[600] text-2xl">
           Empowering Your Digital Journey, One Solution at a Time
          </h3>
        </div>
        <div className="mt-[3rem]">
          <ul className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-6">
            {featureData.map(item => (
              <li key={item.id}>
                <GridItems
                  icon={item.icon}
                  title={item.title}
                  body={item.body}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features
