import { Blob, Contacts, Container, Logotype } from "@/shared/components";
import FunctionalButtons from "./FunctionalButtons";
import { MouseEventHandler } from "react";
import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";

type Props = {
  closeButtonClick: MouseEventHandler<HTMLButtonElement>,
  industriesSmDisplay: boolean,
  servicesSmDisplay: boolean,
  servicesSmClick: MouseEventHandler<HTMLButtonElement>,
  industriesSmClick: MouseEventHandler<HTMLButtonElement>,
  industriesSmLinkClick: MouseEventHandler<HTMLAnchorElement>,
  servicesSmLinkClick: MouseEventHandler<HTMLAnchorElement>,
  anchorsClick: MouseEventHandler<HTMLAnchorElement>,
  display: string,
}

export default function BurgerMenu ({
  closeButtonClick, industriesSmDisplay, servicesSmDisplay, servicesSmClick, servicesSmLinkClick, industriesSmClick, industriesSmLinkClick, display, anchorsClick
  }: Props) {
  return (
    <div className={`fixed ${display} flex-col z-10 top-0 right-0 w-full h-dvh pt-4 bg-white dark:bg-black md:hidden`}>
      <Container>
        <div className="flex items-center">
          <Logotype />
          <button aria-label="Close burger menu" onClick={closeButtonClick} className="w-8 h-8 ml-auto md:hidden">
            <div className="w-6 mx-auto">
              <SharedSpriteSVG name="closeButton" />
            </div>
          </button>
        </div>
        <FunctionalButtons
          anchorsClick={anchorsClick}
          industriesSmDisplay={industriesSmDisplay}
          industriesSmClick={industriesSmClick}
          industriesSmLinkClick={industriesSmLinkClick}
          servicesSmClick={servicesSmClick}
          servicesSmDisplay={servicesSmDisplay}
          servicesSmLinkClick={servicesSmLinkClick}
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
