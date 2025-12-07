import React, {useEffect, useState} from 'react'
import Title from './Title'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';


const NewArrivals = () => {
  return (
    <section>
        <Title />
        <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            500: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 3,
            },
            1022: {
                slidesPerView: 4,
            },
            1350: {
                slidesPerView: 5,
            },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default NewArrivals