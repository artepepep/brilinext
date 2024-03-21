import Link from "next/link"

type Props = {
  text: string,
  uppercase: boolean,
  href: string,
}

export default function GradientButton ({ text, uppercase, href }: Props) {
  return (
    <Link 
      href={href}
      className={`
        text-white max-w-fit px-12 py-[14px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] hover:from-100% transition-all ease-out duration-500 ${uppercase && "uppercase"}`}
      >
      {text}
    </Link>
  )
}