"use client"

import MenuLink from "@/adminModules/adminLeftMenu/components/MenuLink";

export default function AdminLeftMenu() {
  return (
    <div className={"relative py-5 pl-10 pr-[26px] bg-[#FAFAFA]"}>
      <div className={"flex flex-col gap-3"}>
        <MenuLink link={"/admin/profile"} name={"Profile"} />
        <MenuLink link={"/admin/admins"} name={"Admins"} />
        <MenuLink link={"/admin/news"} name={"News"} />
      </div>
      <div className={"fixed bottom-[20px]"}>
        <MenuLink link={"/"} name={"Exit"} />
      </div>
    </div>
  )
}