import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG"
import { MouseEventHandler } from "react"

type Props = {
  modalClick: MouseEventHandler<HTMLElement>,
  modalDisplay: string,
}

export default function Modal ({ modalClick, modalDisplay }: Props) {
  return (
    <div 
      className={`fixed ${modalDisplay} z-20 top-0 left-0 w-full h-screen bg-black bg-opacity-40`}
      itemType="reset"
      >
      <div className="fixed w-[90%] z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[2px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] md:w-[400px] xl:w-[600px]">
        <div
          className="pt-4 px-4 pb-8 rounded-[18px] bg-[#FAFAFA] dark:bg-[#101010] md:pt-6 md:px-6 md:pb-12 xl:pt-8 xl:px-8 xl:pb-16"
          >
          <button className="block ml-auto mr-0 text-[32px]" onClick={modalClick} type="reset">
            <SharedSpriteSVG name="closeButton" />
          </button>
          <div className="flex flex-col items-center gap-6 mt-10 text-center">
            <p className="text-[32px]">Message sent</p>
            <p className="text-xl">Our specialist will contact you shortly.</p>
          </div>
        </div>
      </div>
    </div>
  )
}