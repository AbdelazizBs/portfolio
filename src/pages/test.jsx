import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const Test = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="h-20 bg-black">Slide 1</SwiperSlide>
        <SwiperSlide className="h-20 bg-red-700">Slide 2</SwiperSlide>
        <SwiperSlide className="h-20 bg-sky-400">Slide 3</SwiperSlide>
        <SwiperSlide className="h-20 bg-emerald-500">Slide 4</SwiperSlide>
        <SwiperSlide className="h-20 bg-black">Slide 5</SwiperSlide>
        <SwiperSlide className="h-20 bg-black">Slide 6</SwiperSlide>
        <SwiperSlide className="h-20 bg-black">Slide 7</SwiperSlide>
        <SwiperSlide className="h-20 bg-black">Slide 8</SwiperSlide>
        <SwiperSlide className="h-20 bg-black">Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default Test
