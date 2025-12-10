import React, {useEffect, useState} from 'react'
import Title from './Title'
import { dummyProducts } from '../assets/data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';



const NewArrivals = () => {
  const [NewArrivals, setnewArrivals] = useState([])

  useEffect(() => {
    const data = dummyProducts.filter((item)=> item.inStock).slice(0, 10)
  setnewArrivals(data)}, [dummyProducts])

  return (
    <section className='max-padd-container py-22 xl:py-28 bg-white'>
        <Title title1={"New"} title2={" Arrivals"} title1Styles={"pb-10"}/>
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
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default NewArrivals