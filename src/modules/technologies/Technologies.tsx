"use client"

import { Container, Section } from "@/shared/components";
import Marquee from "./components/Marquee";

export default function Technologies () {
  return (
    <Section>
      <Container>
        <div className="xl:flex">
          <div className="flex flex-col gap-8 pr-4 mb-8">
            <h2 className="text-[40px] xl:text-[64px]">Technologies</h2>
            <p className="md:max-w-[520px] md:text-xl">Start to build high-grade development solutions for your business purposes using these technologies. From startups and SMEs to large enterprises.</p>
          </div>
          <div className="relative flex flex-col gap-5 xl:ml-auto">
            <Marquee type="left" />
            <Marquee type="right" />
          </div>
        </div>
      </Container>
    </Section>
  )
}