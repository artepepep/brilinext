import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import Link from "next/link";

export default function Logotype ({ className="text-[28px]" }: { className?: string }) {
  return (
    <Link href={"/"}>
      <h1 className={`${className} flex items-center font-ysabeau font-semibold text-[32px] dark:text-white`}>
        <div className="block dark:hidden">
          <SharedSpriteSVG name="logo-light" />
        </div>
        <div className="hidden dark:block">
          <SharedSpriteSVG name="logo-dark" />
        </div> 
        rilinxoft
      </h1>
    </Link>
  )
}