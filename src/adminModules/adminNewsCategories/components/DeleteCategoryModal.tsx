import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import {GradientButton, TransparentButton} from "@/shared/components";
import {MouseEventHandler} from "react";

type Props = {
  modalDisplay: string,
  closeClick: MouseEventHandler<HTMLButtonElement>,
}

export default function DeleteCategoryModal({ modalDisplay, closeClick }: Props) {
  return (
    <div
      className={`fixed ${modalDisplay} z-20 top-0 left-0 w-full h-screen bg-black bg-opacity-40`}
    >
      <div
        className="fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10 max-h-[664px] py-10 px-12 rounded-[4px] bg-white overflow-auto">
        <div className={"flex justify-between w-[500px]"}>
          <h3 className={"text-[#3892F5]"}>Delete news</h3>
          <button onClick={closeClick} className="block ml-auto mr-0 text-[32px]" type={"button"}>
            <SharedSpriteSVG name="closeButton"/>
          </button>
        </div>
        <p className={"text-center"}>Are you sure you want to delete this category?</p>
        <div className={"flex items-center gap-4"}>
          <GradientButton text={"delete"} uppercase={true} type={"button"}/>
          <TransparentButton text={"undo"} uppercase={true} type={"button"}/>
        </div>
      </div>
    </div>
  )
}