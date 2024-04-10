"use client"

import Image from "next/image"
import { teamArray } from "../data/teamArray";
import { useState } from "react";


export default function OurTeamHarmonicTablet () {
  const [cardsWidth, setCardsWidth] = useState([
    { width: "326px" },
    { width: "70px" },
    { width: "70px" },
    { width: "70px" },
    { width: "70px" },
  ]);

  const handleCardClick = (event: any) => {
    setCardsWidth((cardsWidth) => {
      const copy = cardsWidth;
      copy.find((specific) => {
        if (specific.width === "326px") {
          return (specific.width = "70px");
        }
      });
        copy[Number(event.target.id)].width = "326px";
      return (
        [...copy]
      )
    })
  }

  return (
    <div className="hidden mt-16 overflow-y-hidden gap-6 md:flex xl:hidden">
      {teamArray.map((teamElem, index) => (
        <div
          style={{
            width: cardsWidth[index].width,
          }} 
          className={`relative h-[500px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] transition-all duration-500 ease-linear`} key={teamElem.name}>
          {cardsWidth[index].width === "326px" && (
            <Image className="w-full h-full rounded-[20px] object-cover" src={teamElem.image} alt={teamElem.name} />
            )
          }
          {cardsWidth[index].width === "326px" && (
            <div className="absolute bottom-0 flex flex-col w-full py-2 gap-1 rounded-b-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] text-center text-white">
              <h3 className="text-[24px]">{teamElem.name}</h3>
              <p>{teamElem.position}</p>
            </div>
          )}
          {cardsWidth[index].width !== "326px" && (
            <div
              onClick={(event: any) => handleCardClick(event)}
              id={`${index}`}
              style={{ writingMode: "vertical-rl" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-start py-4 px-4 w-full h-full text-xl text-white rotate-180 uppercase cursor-pointer">
                {teamElem.position}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}