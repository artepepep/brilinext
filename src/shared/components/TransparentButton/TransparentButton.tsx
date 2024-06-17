import Link from "next/link";
import {MouseEventHandler} from "react";

type Props = {
  type: "button" | "submit" | "link",
  onClick?: MouseEventHandler<HTMLButtonElement>,
  href?: string,
  text: string,
  uppercase: boolean,
  ariaLabel?: string,
}

export default function TransparentButton ({ type, onClick, href, text, uppercase, ariaLabel }: Props) {
  if (type === "button") {
    return (
      <button
        onClick={onClick}
        type={"button"}
        className={`block max-w-fit px-[28px] py-[14px] rounded-[20px] border-[1px] border-[#4388F5] hover:bg-[#4388F5] hover:text-white ${uppercase && "uppercase"}`}>
        {text}
      </button>
    )
  } else if (type === "submit") {
    return (
      <button
        onClick={onClick}
        type={"submit"}
        className={`block max-w-fit px-[28px] py-[14px] rounded-[20px] border-[1px] border-[#4388F5] hover:bg-[#4388F5] hover:text-white ${uppercase && "uppercase"}`}>
        {text}
      </button>
    )
  } else {
    return (
      <Link
        href={href ? (href) : ""}
        aria-label={ariaLabel}
        target="_blank"
        className={`block max-w-fit px-[28px] py-[14px] rounded-[20px] border-[1px] border-[#4388F5] hover:bg-[#4388F5] hover:text-white ${uppercase && "uppercase"}`}>
        {text}
      </Link>
    )
  }
}