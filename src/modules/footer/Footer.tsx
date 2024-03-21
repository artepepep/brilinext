"use client"

import { Contacts, Container, Logotype } from "@/shared/components";
import { useRouter } from "next/navigation";

export default function Footer () {
  const router = useRouter();

  return (
    <>
      <footer className="py-5 border-t-[1px]">
        <Container>
          <div className="flex items-start md:flex-row md:gap-[106px]">
            <Logotype />
            <div className="flex flex-col ml-auto gap-4 items-start md:flex-row md:gap-[56px]">
              <div className="flex flex-col gap-4">
                <button className="hover:text-[#F10BD0]" onClick={() => router.push("/#services")}>Services</button>
                <button className="hover:text-[#F10BD0]" onClick={() => router.push("/#about")}>About us</button>
                <button className="hover:text-[#F10BD0]" onClick={() => router.push("/#whatWeCanDo")}>Contacts</button>
              </div>
              <Contacts withIcons={false} />
            </div>
          </div>
          <div className="mt-4 text-xs text-black dark:text-[#D9D9D9]">
            <p>© 2024 Brilinxoft</p>
            <p>All Rights Reserved.</p>
          </div>
        </Container>
      </footer>
    </>
  )
}