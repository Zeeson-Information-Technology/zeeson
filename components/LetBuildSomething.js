import React from "react"
import Button from "./ui/Button"

function LetBuildSomething() {
  return (
    <div>
      <h3 className="font-[600] text-2xl md:text-3xl py-[1rem]">
        Let&apos;s build something great together
      </h3>
      <p className="mb-8">
        Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies
        nec dolor sit amet, scelerisque cursus purus.
      </p>
      <div className="mb-[4rem]">
        <a href={"/contact"}>
          <Button text={"Contact Us"} />
        </a>
      </div>
    </div>
  )
}

export default LetBuildSomething
