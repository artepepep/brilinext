import Link from "next/link";

export default function TransparentButton ({ text, uppercase }: { text: string, uppercase: boolean }) {
  return (
    <Link href={"https://calendly.com/brilinxoft"} target="_blank" className={`max-w-fit px-12 py-[14px] rounded-[20px] border-[1px] border-[#4388F5] hover:bg-[#4388F5] hover:text-white ${uppercase && "uppercase"}`}>
      {text}
    </Link>
  )
}