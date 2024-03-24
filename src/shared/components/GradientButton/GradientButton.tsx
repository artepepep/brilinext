import Link from "next/link"

type Props = {
  text: string,
  uppercase: boolean,
  href?: string,
  type: "button" | "submit",
}

export default function GradientButton ({ text, uppercase, href, type }: Props) {
  if (type === "button") {
    return (
      <Link 
        href={href ? (href) : ""}
        className={`
          text-white max-w-fit px-12 py-[14px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] hover:from-100% transition-all ease-out duration-500 ${uppercase && "uppercase"}`}
        >
        {text}
      </Link>
    )
  } else {
    return (
      <button 
        type="submit" 
        className={`text-white mt-8 md:mt-10 max-w-fit px-12 py-[14px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] hover:from-100% transition-all ease-out duration-500 ${uppercase && "uppercase"}`}>
        {text}
      </button>
    )
  }
}