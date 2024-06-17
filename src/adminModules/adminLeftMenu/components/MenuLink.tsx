import Link from "next/link";
import SpriteSVG from "./SpriteSVG";
import {usePathname} from "next/navigation";

type Props = {
  link: string,
  name: string,
}

export default function MenuLink ({ link, name }: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={`group flex items-center pl-2 pr-12 py-3 gap-[10px] rounded-[20px] ${pathname === link ? "bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] text-white" : "hover:bg-gradient-to-r hover:from-[#3892F5FF] hover:via-[#B519F4FF] hover:to-[#F10BD0FF] hover:text-white"}`}
      href={link}
    >
      <SpriteSVG className={`${pathname === link ? "fill-white" : "fill-[#3892F5] group-hover:fill-white"}`} name={name} />
      <h3>{name}</h3>
    </Link>
  )
}