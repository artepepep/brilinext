import ThemeSwitch from "./ThemeSwitch";
import { MouseEventHandler } from "react";

type Props = {
  aboutClick: MouseEventHandler<HTMLButtonElement>,
  servicesClick: MouseEventHandler<HTMLButtonElement>,
  contactsClick: MouseEventHandler<HTMLButtonElement>,
}

export default function FunctionalButtons ({ aboutClick, servicesClick, contactsClick }: Props) {
  return (
    <div className="flex flex-col-reverse mt-10 gap-8 md:flex-row md:items-center md:mt-0 md:font-semibold">
      <div className="flex flex-col gap-6 w-fit md:flex-row md:gap-8">
        <button className="text-left md:text-center hover:text-[#F10BD0]" onClick={aboutClick}>About</button>
        <button className="text-left md:text-center hover:text-[#F10BD0]" onClick={servicesClick}>Services</button>
        <button className="text-left md:text-center hover:text-[#F10BD0]" onClick={contactsClick}>Contacts</button>
      </div>
      <div className="flex gap-8 md:flex-row-reverse md:items-center">
        <ThemeSwitch />
      </div>
    </div>
  )
}