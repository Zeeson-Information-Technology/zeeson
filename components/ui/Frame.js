import Image from "next/image"
import React from "react"
function Frame({ gradient, image }) {
  const style = `max-w-lg bg-gradient-to-r ${
    gradient || "from-[#EEBCA7] to-[#C8C8C8]"
  } p-6`
  return (
    <div className={style}>
      <div className="min-w-fit">
        <Image src={image} layout="responsive" alt="" />
      </div>
    </div>
  )
}

export default Frame
