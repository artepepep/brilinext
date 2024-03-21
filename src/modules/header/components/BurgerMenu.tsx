import { Blob, Contacts, Container, Logotype } from "@/shared/components";
import FunctionalButtons from "./FunctionalButtons";
import { MouseEventHandler } from "react";
import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";

type Props = {
  closeButtonClick: MouseEventHandler<HTMLButtonElement>,
  aboutClick: MouseEventHandler<HTMLButtonElement>,
  servicesClick: MouseEventHandler<HTMLButtonElement>,
  contactsClick: MouseEventHandler<HTMLButtonElement>,
  right: string,
}

export default function BurgerMenu ({ 
  closeButtonClick, right, aboutClick, servicesClick, contactsClick 
  }: Props) {
  return (
    <div className={`fixed flex flex-col z-10 top-0 ${right} w-full h-dvh pt-4 bg-white dark:bg-black md:hidden`}>
      <Container>
        <div className="flex items-center">
          <Logotype />
          <button onClick={closeButtonClick} className="w-8 h-8 ml-auto md:hidden">
            <div className="w-6 mx-auto">
              <SharedSpriteSVG name="closeButton" />
            </div>
          </button>
        </div>
        <FunctionalButtons 
          aboutClick={aboutClick}
          servicesClick={servicesClick}
          contactsClick={contactsClick}
        />
        <div className="absolute right-4 left-4 bottom-4">
          <div className="h-[1px] w-full mb-6 bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]"></div>
          <Contacts withIcons={false} />
        </div>
        <Blob small={true} styles="top-[30%]" />
      </Container>
    </div>
  )
}