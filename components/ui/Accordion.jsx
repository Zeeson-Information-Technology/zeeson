import Link from "next/link"
import React, { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
const accordionData = [
  {
    id: 1,
    question: "How much time does it take ?",
    answer:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
  {
    id: 2,
    question: "What if my work is not submitted as proposed ?",
    answer:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
  {
    id: 3,
    question: "What is your class naming convention ?",
    answer:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
  {
    id: 4,
    question: "How do we communicate ?",
    answer:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
  {
    id: 5,
    question: "I have a bigger project. Can you handel it ?",
    answer:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
  },
]
function Accordion() {
  const [selected, setSelected] = useState(null)
  const toggleHandler = ind => {
    if (selected === ind) {
      return setSelected(null)
    }
    setSelected(ind)
  }
  return (
    <div className="my-[4rem] ">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center max-w-[90%] mx-auto ">
        <div className="max-w-[70%] mx-auto">
          <h2 className="text-2xl font-[600]">Frequently Ask Questions</h2>
          <Link href={"/contact"}>
            <p className="text-[#2405F2] cursor-pointer mt-4">
              Contact us for more info
            </p>
          </Link>
        </div>
        <div className="md:col-span-2">
          <ul id="faq">
            {accordionData.map((item, ind) => {
              return (
                <li className="max-w-[80%] mx-auto mt-4 md:mt-0" key={item.id}>
                  <div className="border-b-2">
                    <div className="flex  justify-between py-4">
                      <div className="flex gap-4">
                        <strong className="text-[#2405F2]">0{ind + 1}</strong>
                        <h4
                          className="font-[600] cursor-pointer"
                          onClick={() => toggleHandler(ind)}
                        >
                          {item.question}
                        </h4>
                      </div>
                      {selected !== ind ? (
                        <AiOutlinePlus
                          onClick={() => toggleHandler(ind)}
                          className="cursor-pointer text-[18px]"
                        />
                      ) : (
                        <AiOutlineMinus className="cursor-pointer text-[18px]" />
                      )}
                    </div>
                    <div
                      className={`md:max-w-[90%] laptop:max-w-[80%] p-2 ${
                        selected === ind ? "inline-block" : "hidden"
                      }`}
                    >
                      <p className="px-6">{item.answer}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Accordion
