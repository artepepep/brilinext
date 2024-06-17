"use client"

import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import Select from "react-select";
import {GradientButton} from "@/shared/components";
import {MouseEventHandler, useState} from "react";
import React from 'react';
// @ts-ignore
import { BlockPicker } from 'react-color';
import SpriteSVG from "@/adminModules/adminNewsCategories/components/SpriteSVG";

type Props = {
  modalDisplay: string,
  closeClick: MouseEventHandler<HTMLButtonElement>,
}

export default function PickColorModal({ modalDisplay, closeClick }: Props) {
  const options = [
    { value: 'AI', label: 'AI' },
    { value: 'Web', label: 'Web' },
    { value: 'Mobile', label: 'Mobile' },
    { value: "Company", label: "Company" },
    { value: "Tech talk", label: "Tech talk" },
    { value: "Design", label: "Design" }
  ];

  const [colorsDisplay, setColorsDisplay] = useState(false);
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div
      className={`fixed ${modalDisplay} z-20 top-0 left-0 w-full h-screen bg-black bg-opacity-40`}
    >
      <div
        className="fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-10 px-12 rounded-[4px] bg-white">
        <div className={"flex gap-[280px]"}>
          <h3 className={"text-[#3892F5]"}>Add news categories</h3>
          <button onClick={closeClick} className="block ml-auto mr-0 text-[32px]" type={"button"}>
            <SharedSpriteSVG name="closeButton"/>
          </button>
        </div>
        <form>
          <div className={"mt-10"}>
            <Select
              instanceId={"service"}
              options={options}
              unstyled={true}
              placeholder={"The service you are interested in"}
              onChange={() => {
              }}
              classNames={{
                control: () => (`pt-3 pb-5 px-4 border-b-[1px] text-black border-b-black dark:border-b-white dark:text-[#D9D9D9] hover:border-b-[#3892F5] dark:hover:border-b-[#3892F5]`),
                option: () => ("py-5 px-5"),
                menu: () => ("w-full bg-white dark:bg-black"),
                dropdownIndicator: () => (""),
              }}/>
          </div>
          <div className={"flex flex-col gap-4 mt-10"}>
            <p className={"text-[16px]"}>Color indicator</p>
            <div className={"relative flex items-center gap-4 w-fit py-2 px-4 border-[1px] border-[#525252] rounded-[20px]"}>
              <button onClick={() => setColorsDisplay(true)} type={"button"}>
                <SpriteSVG name={"fill"}/>
              </button>
                <div
                  style={{backgroundColor: color}}
                  className={`w-[44px] h-[34px] border-[1px] border-[#525252] rounded-[8px]`}>
                </div>
              {colorsDisplay && (
                <div className={"absolute top-full"}>
                  <BlockPicker
                    colors={["#B519F4", "#3892F5", "#C60047", "#F5A938", "#F10BD0"]}
                    color={color}
                    onChangeComplete={(color: any) => {
                      setColor(color.hex);
                      setColorsDisplay(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={"mt-10"}>
            <GradientButton text={"add"} uppercase={true} type={"button"} onClick={closeClick}/>
          </div>
        </form>
      </div>
    </div>
  )
}