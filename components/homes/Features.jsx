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
      title: "Uses Client First",
      body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      id: 2,
      icon: <BsFillCheckCircleFill color="#5239FA" className="text-[2rem]" />,
      title: "Two Free Revision Round",
      body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      id: 3,
      icon: <RiPencilRuler2Line color="#5239FA" className="text-[2rem]" />,
      title: "Template Customization",
      body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      id: 4,
      icon: <BsQuestionCircleFill color="#5239FA" className="text-[2rem]" />,
      title: "Customer Sastisfaction",
      body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      id: 5,
      icon: <BsStopwatchFill color="#5239FA" className="text-[2rem]" />,
      title: "Quick Delivery",
      body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      id: 6,
      icon: <CgNotes color="#5239FA" className="text-[2rem]" />,
      title: "Hands-on approach",
      body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
  ]
  return (
    <div className="bg-[#F4F6FC]">
      <div className="max-w-[80%] mx-auto pb-8">
        <div className="flex flex-col  items-center pt-10 max-w-md mx-auto">
          <h2 className="font-[600]">Features</h2>
          <h3 className="font-[600] text-2xl">
            Design that solves problems, one product at a time
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
