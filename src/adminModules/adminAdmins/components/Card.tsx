import {MouseEventHandler} from "react";

type Props = {
  onClick: MouseEventHandler<HTMLDivElement>,
  id: string,
  name: string,
  status: string,
  displayBorder: boolean,
}

export default function Card ({ onClick, id, name, status, displayBorder }: Props) {
  if (displayBorder) {
    return (
      <div className={"relative p-[2px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]"}>
        <div onClick={onClick} id={id}
             className={`w-full h-full flex flex-col gap-4 px-2 py-5 rounded-[18px] text-[16px] text-center cursor-pointer bg-white`}>
          <h3>{name}</h3>
          <p className={"text-[#525252]"}>{status}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div onClick={onClick} id={id}
           className={`flex flex-col gap-4 px-2 py-5 rounded-[20px] text-[16px] text-center cursor-pointer shadow-[0_2px_16px_0_#08013F1A]`}>
        <h3>{name}</h3>
        <p className={"text-[#525252]"}>{status}</p>
      </div>
    )
  }
}