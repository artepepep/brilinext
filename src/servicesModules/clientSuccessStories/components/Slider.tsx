"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';

import { useCallback, useRef } from 'react';
import SpriteSVG from "@/landingModules/latestProjects/images/SpriteSVG";
import {reviews} from "@/servicesModules/clientSuccessStories/data/reviews";
import SpriteLocalSVG from "@/servicesModules/clientSuccessStories/images/SpriteLocalSVG";
import Link from "next/link";

export default function Slider () {
  const sliderRef = useRef<any>();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
        {reviews.map((elem) => (
          <SwiperSlide className="py-8 px-4 rouded-[20px] !bg-white dark:!bg-black border-[1px] border-[#525252] dark:border-[#D1D1D1] md:py-12 md:px-10" key={elem.name}>
            <div className={"flex items-center gap-6"}>
              <div className={"flex items-center justify-center w-[56px] h-[56px] bg-[#3892F5] text-white rounded-full"}>{elem.profilePic}</div>
              <div className={'flex flex-col gap-2 text-left'}>
                <p className={"text-[16px] md:text-[20px]"}>{elem.name}</p>
                <p className={"text-[14px] text-[#3892F5] md:text-[16px]"}>{elem.position}</p>
              </div>
            </div>
            <p className={"text-left mt-8 text-[16px] md:text-[20px]"}>{elem.text}</p>
            <div className={"flex items-center justify-between mt-8 text-[#525252] dark:text-[#D1D1D1]"}>
              <SpriteLocalSVG name={'clutch'} />
              <Link className={"flex items-center gap-2 text-[16px]"} href={elem.link}>
                <p>Read the full review</p>
                <SpriteLocalSVG name={'arrow'} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <div className='absolute bottom-[27px] left-1/2 transform -translate-x-1/2 flex gap-[120px]'>
          <div
            className="swiper-button-prev cursor-pointer dark:text-[#D9D9D9] hover:text-[#F10BD0] dark:hover:text-[#F10BD0]"
            onClick={handlePrev}>
            <SpriteSVG name='prevButton' />
          </div>
          <div
            className="swiper-button-next cursor-pointer dark:text-[#D9D9D9] hover:text-[#F10BD0] dark:hover:text-[#F10BD0]"
            onClick={handleNext}>
            <SpriteSVG name='nextButton' />
          </div>
        </div>
      </Swiper>
    </div>
  )
}
