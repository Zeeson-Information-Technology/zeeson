import React from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import { about5, about6, about7, about8, test1 } from "../../assets/about/about"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

function Slider() {
  return (
    <Swiper
      autoHeight={true}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      className=" relative max-w-[100%] laptop:max-w-[60%] min-h-[260px] mx-auto "
    >
      <div>
        <div className="prev">
          <IoIosArrowForward className="swiper-button-next" />
        </div>
        <div className="next">
          <IoIosArrowBack className="swiper-button-prev" />
        </div>
      </div>
      <SwiperSlide>
        <p className="max-w-[75%] mx-auto text-center">
        Collaborating with Zeeson IT opened new avenues for our organization. Their unique approach and dedication to understanding 
        our market needs led to innovative solutions that have significantly impacted our operations.
        </p>
        <div className=" laptop:max-w-[60%] mx-auto flex gap-6 justify-center mt-4">
          {/* <div className="rounded-full mb-3">
            <Image
              src={about5}
              className="rounded-full"
              height={60}
              width={60}
              alt=""
            />
          </div> */}
          <div>
            <p className="font-[500] text-lg">Johnson Akintunde</p>
            <p className="text-[14px]">Managing Partner</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p className="max-w-[75%] mx-auto text-center">
        The level of expertise and professionalism displayed by Zeeson IT has been exceptional. 
        Their commitment to tailoring services to our specific needs has resulted in a highly efficient collaboration.
        </p>
        <div className=" laptop:max-w-[60%] mx-auto flex gap-6 justify-center mt-4">
          {/* <div className="rounded-full mb-3">
            <Image
              src={about6}
              className="rounded-full"
              height={60}
              width={60}
              alt=""
            />
          </div> */}
          <div>
            <p className="font-[500] text-lg">Yusuf Ahmed</p>
            <p className="text-[14px]">Director of Technology</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p className="max-w-[75%] mx-auto text-center">
        Zeeson IT&apos;s innovative approach and attention to detail have been crucial in the development and implementation of our digital strategy. Their guidance has been invaluable in navigating the complexities of modern tech solutions.
        </p>
        <div className=" laptop:max-w-[60%] mx-auto flex gap-6 justify-center mt-4">
          {/* <div className="rounded-full mb-3">
            <Image
              src={about7}
              className="rounded-full"
              height={60}
              width={60}
              alt=""
            />
          </div> */}
          <div>
            <p className="font-[500] text-lg">Fatima Al-Hassan</p>
            <p className="text-[14px]">Innovation Manager</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
