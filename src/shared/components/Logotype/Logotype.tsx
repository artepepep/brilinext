import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import Link from "next/link";

export default function Logotype ({ className="text-[28px]" }: { className?: string }) {
  return (
    <Link href={"/"}>
      <h1 className={`${className} relative flex items-center font-ysabeau font-semibold text-[32px] dark:text-white`}>
        <div className="block dark:hidden">
          <SharedSpriteSVG name="logo-light" />
        </div>
        <div className="hidden dark:block">
          <SharedSpriteSVG name="logo-dark" />
        </div> 
        <span style={{
            clip: "rect(1px 1px 1px 1px)"
          }} 
          className="absolute h-[1px] w-[1px] overflow-hidden">B</span>rilinxoft
      </h1>
    </Link>
  )
}