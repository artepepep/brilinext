import Link from "next/link"
import {MouseEventHandler} from "react";

type Props = {
  text: string,
  uppercase: boolean,
  href?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  type: "button" | "submit" | "link",
}

export default function GradientButton ({ text, uppercase, href, onClick, type }: Props) {
  if (type === "link") {
    return (
      <Link 
        href={href ? (href) : ""}
        className={`
          text-white max-w-fit px-[28px] py-[14px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] hover:from-100% transition-all ease-out duration-500 ${uppercase && "uppercase"}`}
        >
        {text}
      </Link>
    )
  } else if (type === "button") {
    return (
      <button 
        type="button"
        onClick={onClick}
        className={`text-white max-w-fit px-[28px] py-[14px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] hover:from-100% transition-all ease-out duration-500 ${uppercase && "uppercase"}`}>
        {text}
      </button>
    )
  } else {
    return (
      <button
        type="submit"
        className={`text-white mt-8 md:mt-10 max-w-fit px-[28px] py-[14px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] hover:from-100% transition-all ease-out duration-500 ${uppercase && "uppercase"}`}>
        {text}
      </button>
    )
  }
}