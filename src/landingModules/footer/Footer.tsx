"use client"

import { Contacts, Container, Logotype } from "@/shared/components";
import Link from "next/link";

export default function Footer () {
  return (
    <>
      <footer className="py-5 border-t-[1px]">
        <Container>
          <div className="flex items-start md:flex-row md:gap-[106px]">
            <Logotype />
            <div className="flex flex-col ml-auto gap-4 items-start md:flex-row md:gap-[56px]">
              <div className="flex flex-col gap-4">
                <Link className="w-fit hover:text-[#F10BD0] text-left" href={"/#services"}>Services</Link>
                <Link className="w-fit hover:text-[#F10BD0] text-left" href={"/#about"}>About us</Link>
                <Link className="w-fit hover:text-[#F10BD0] text-left" href={"/#whatWeCanDo"}>Contacts</Link>
                <Link
                  className="w-fit hover:text-[#F10BD0] text-left" 
                  href={"/privacy-policy"}
                  aria-label="Brilinxoft privacy policy">
                  Privacy policy
                </Link>
              </div>
              <div className={"flex flex-col gap-4"}>
                <h4 className={"font-semibold"}>Industries</h4>
                <Link className={"w-fit hover:text-[#F10BD0] text-left"} href={"/e-commerce"}>E-commerce</Link>
                <Link className={"w-fit hover:text-[#F10BD0] text-left"} href={"/ai-implementation"}>AI implementation</Link>
                <Link className={"w-fit hover:text-[#F10BD0] text-left"} href={"/edtech"}>Edtech</Link>
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