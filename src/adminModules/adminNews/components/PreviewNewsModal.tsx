import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import {MouseEventHandler} from "react";
import {GradientButton, TransparentButton} from "@/shared/components";

type Props = {
  modalDisplay: string,
  closeClick: MouseEventHandler<HTMLButtonElement>,
  editClick: MouseEventHandler<HTMLButtonElement>,
}

export default function PreviewNewsModal({ modalDisplay, closeClick, editClick }: Props) {
  return (
    <div
      className={`fixed ${modalDisplay} z-20 top-0 left-0 w-full h-screen bg-black bg-opacity-40`}
    >
      <div
        className="w-fit fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[664px] py-10 px-12 rounded-[4px] bg-white overflow-auto">
        <div className={"flex justify-between w-[900px]"}>
          <h3 className={"text-[#3892F5]"}>View news</h3>
          <button onClick={closeClick} className="block ml-auto mr-0 text-[32px]" type={"button"}>
            <SharedSpriteSVG name="closeButton"/>
          </button>
        </div>
        <h4 className={"mt-8 text-[24px]"}>Lorem ipsum dolor sit amet consectetur.</h4>
        <div className={"flex items-center mt-6 gap-2 text-[16px] text-[#525252] uppercase"}>
          <p>20.08.2024</p>
          <div>|</div>
          <p>design</p>
        </div>
        <div className={"w-[270px] h-[160px] mt-6 rounded-[20px] bg-[#D1D1D1]"}></div>
        <div className={"flex flex-col gap-6 mt-6 text-[16px]"}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit venenatis viverra felis venenatis aliquam ut tempor turpis.
            In scelerisque turpis sodales amet sed mi quisque. Eget facilisis orci vel tristique posuere et eget.
            Nisl dictumst bibendum urna vehicula. Lorem ipsum dolor sit amet consectetur. Elit venenatis viverra
            felis venenatis aliquam ut tempor turpis. In scelerisque turpis sodales amet sed mi quisque. Eget
            facilisis orci vel tristique posuere et eget. Nisl dictumst bibendum urna vehicula.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit venenatis viverra felis venenatis aliquam ut tempor turpis.
            In scelerisque turpis sodales amet sed mi quisque. Eget facilisis orci vel tristique posuere et eget.
            Nisl dictumst bibendum urna vehicula.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit venenatis viverra felis venenatis aliquam ut tempor turpis.
            In scelerisque turpis sodales amet sed mi quisque. Eget facilisis orci vel tristique posuere et eget.
            Nisl dictumst bibendum urna vehicula.
          </p>
        </div>
        <div className={"flex gap-5 mt-6"}>
          <GradientButton onClick={editClick} text={"edit"} uppercase={true} type={"button"} />
        </div>
      </div>
    </div>
  )
}