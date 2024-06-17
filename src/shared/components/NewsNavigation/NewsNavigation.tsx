"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NewsNavigation() {
  const pathname = usePathname();

  return (
    <div className={"flex mb-8"}>
      <Link className={`px-6 pb-2 ${pathname === "/admin/news" && "text-[#F10BD0] border-b-2 border-b-[#F10BD0]"}`}
            href={"/admin/news"}>News</Link>
      <Link className={`px-6 pb-2 ${pathname === "/admin/news-categories" && "text-[#F10BD0] border-b-2 border-b-[#F10BD0]"}`} href={"/admin/news-categories"}>News categories</Link>
    </div>
  )
}