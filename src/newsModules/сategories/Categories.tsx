"use client"

import {Container, Section} from "@/shared/components";
import {useState} from "react";

export default function Categories () {
  const data = ["all", "ai", "web", "mobile", "company", "tech talk", "design"];
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <Section>
      <Container>
        <div className={"flex flex-wrap gap-x-2 gap-y-[14px] md:gap-5 xl:justify-center"}>
          {data.map((category) => (
            <button
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 border-[1px] border-[#3892F5] rounded-[16px] ${activeCategory === category && "bg-[#3892F5]"} uppercase`}
              key={category}>
              {category}
            </button>
          ))}
        </div>
      </Container>
    </Section>
  )
}