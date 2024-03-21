"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import { teamArray } from '../data/teamArray';

export default function OurTeamSLider () {

  return (
    <>
      <Swiper 
        pagination={true} 
        modules={[Pagination]} 
        className="ourTeam"
        spaceBetween={20}
      >
        {teamArray.map((teamElem) => (
          <SwiperSlide className="rouded-[20px]" key={teamElem.name}>
            <Image className="h-full w-full" src={teamElem.image} alt={teamElem.name} />
            <div className="absolute bottom-0 flex flex-col w-full py-2 gap-1 rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] text-center text-white">
              <h3 className="text-[24px]">{teamElem.name}</h3>
              <p>{teamElem.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}