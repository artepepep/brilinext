import Link from "next/link";

type Props = {
  href: string,
  category: string,
  date: string,
  heading: string,
}

export default function Post ({ href, category, date, heading }: Props) {
  return (
    <Link
      className={"flex flex-col items-center justify-center content-center gap-4 w-[342px] md:w-[320px] xl:w-[410px] xl:items-start"}
      href={href}>
      <div className={"w-full h-[336px] p-4 rounded-[20px] bg-[#6E6E6E]"}>
        <div className={"w-fit px-4 py-[6px] rounded-[16px] bg-white"}>
          <p
            className={"font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] uppercase"}>
            {category}
          </p>
        </div>
      </div>
      <div className={"flex flex-col gap-2"}>
        <p className={"text-[#525252] text-left"}>{date}</p>
        <h3 className={"text-xl text-left"}>{heading}</h3>
      </div>
    </Link>
  )
}