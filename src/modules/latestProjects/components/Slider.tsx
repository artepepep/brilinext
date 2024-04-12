"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import { projects } from '../data/projects';

import 'swiper/css';

import { useCallback, useRef } from 'react';
import SpriteSVG from "../images/SpriteSVG"

export default function Slider ({ size }: { size: "sm" | "md" | "xl" }) {
  const sliderRef = useRef<any>();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  if (size === "sm") {
    return (
      <div className='mt-16'>
        <Swiper
          pagination={true} 
          modules={[Pagination]} 
          className="latestProjects"
          spaceBetween={20}
        >
          {projects.map((elem) => (
            <SwiperSlide className="rouded-[20px] bg-white dark:bg-black" key={elem.heading}>
              <Image className="h-full w-full" src={elem.image} alt={elem.heading} />
              <div className='flex flex-col mt-8 gap-6'>
                <h2 className='text-[32px] text-left text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]'>{elem.heading}</h2>
                <p className='text-left'>{elem.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  } else if (size === "md") {
    return (
      <div className='mt-16'>
        <Swiper 
          ref={sliderRef}
          navigation={true}
          pagination={{
            type:"fraction",
          }}
          modules={[Pagination]}
          className="latestProjects"
          spaceBetween={20}
        >
          {projects.map((elem) => (
            <SwiperSlide className="rouded-[20px] bg-white dark:bg-black xl:!flex" key={elem.heading}>
              <Image className="w-full xl:h-[400px]" src={elem.image} alt={elem.heading} />
              <div className='flex flex-col mt-8 gap-6 text-left px-6'>
                <h2 className='text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]'>{elem.heading}</h2>
                <p>{elem.text}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className='absolute bottom-[27px] left-1/2 transform -translate-x-1/2 flex gap-[120px]'>
            <div className="swiper-button-prev cursor-pointer" onClick={handlePrev}>
              <SpriteSVG name='prevButton' />
            </div>
            <div className="swiper-button-next cursor-pointer" onClick={handleNext}>
              <SpriteSVG name='nextButton' />
            </div>
          </div>
        </Swiper>
      </div>
    )
  }
}