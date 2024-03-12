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
          The best agency we&apos;ve worked with so far. They understand our
          product and are able to add new features with a great focus.
        </p>
        <div className=" laptop:max-w-[60%] mx-auto flex gap-6 justify-center mt-4">
          <div className="rounded-full mb-3">
            <Image
              src={about5}
              className="rounded-full"
              height={60}
              width={60}
              alt=""
            />
          </div>
          <div>
            <p className="font-[500] text-lg">Jenny Wilson</p>
            <p className="text-[14px]">Vice President</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p className="max-w-[75%] mx-auto text-center">
          The best agency we&apos;ve worked with so far. They understand our
          product and are able to add new features with a great focus.
        </p>
        <div className=" laptop:max-w-[60%] mx-auto flex gap-6 justify-center mt-4">
          <div className="rounded-full mb-3">
            <Image
              src={about6}
              className="rounded-full"
              height={60}
              width={60}
              alt=""
            />
          </div>
          <div>
            <p className="font-[500] text-lg">Jenny Wilson</p>
            <p className="text-[14px]">Vice President</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p className="max-w-[75%] mx-auto text-center">
          The best agency we&apos;ve worked with so far. They understand our
          product and are able to add new features with a great focus.
        </p>
        <div className=" laptop:max-w-[60%] mx-auto flex gap-6 justify-center mt-4">
          <div className="rounded-full mb-3">
            <Image
              src={about7}
              className="rounded-full"
              height={60}
              width={60}
              alt=""
            />
          </div>
          <div>
            <p className="font-[500] text-lg">Jenny Wilson</p>
            <p className="text-[14px]">Vice President</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p className="max-w-[75%] mx-auto text-center">
          The best agency we&apos;ve worked with so far. They understand our
          product and are able to add new features with a great focus.
        </p>
        <div className=" laptop:max-w-[60%] mx-auto flex gap-6 justify-center mt-4">
          <div className="rounded-full mb-3">
            <Image
              src={about8}
              className="rounded-full"
              height={60}
              width={60}
              alt=""
            />
          </div>
          <div>
            <p className="font-[500] text-lg">Jenny Wilson</p>
            <p className="text-[14px]">Vice President</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
