import Image from "next/image";
import SpriteSVG from "./SpriteSVG";
import {ChangeEventHandler} from "react";

type Props = {
  image: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
}

export default function ImageFileInput({ image, onChange }: Props) {
  return (
    <div className={"flex flex-col gap-3"}>
      <p className={"text-[16px] text-[#525252]"}>Cover</p>
      <label className={"w-fit"}>
        <input className={"hidden"} type={"file"} onChange={onChange}/>
        {image ? (
          <div className={"relative w-[204px] h-[124px] border-[1px] border-[#525252] rounded-[20px] cursor-pointer"}>
            <Image
              className={"rounded-[20px]"}
              layout={"fill"}
              objectFit={"cover"}
              src={image}
              alt={"Cover image"}
            />
          </div>
        ) : (
          <div className={"w-fit py-[48px] px-[88px] border-[1px] border-[#525252] rounded-[20px] cursor-pointer"}>
            <SpriteSVG name={"plus"}/>
          </div>
        )}
      </label>
    </div>
  )
}