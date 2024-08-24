import Link from "next/link";
import SpriteSVG from "@/servicesModules/industries/images/SpriteSVG";
import Blob from "../images/blob.png"
import Image from "next/image";

type Props = {
  heading: string,
  paragraph: string,
  href: string,
}

export default function Card ({ heading, paragraph, href }: Props) {
  return (
    <div className={"relative flex flex-col gap-8 px-6 pt-10 pb-14 border-[1px] bg-white dark:bg-black border-[#525252] rounded-[20px]"}>
      <Image width={240} height={176} className={"absolute z-[0] top-0 right-0 rounded-tr-[20px]"} src={Blob} alt={"Industries blob"} />
      <h3 className={"text-[24px]"}>{heading}</h3>
      <p className={"text-[14px]"}>{paragraph}</p>
      <Link className={"flex items-center gap-2 w-fit ml-auto mr-0 text-[#525252] dark:text-[#D1D1D1]"} href={href}>
        <p className={"text-[16px]"}>Read more</p>
        <SpriteSVG name={"arrow"} />
      </Link>
    </div>
  )
}
