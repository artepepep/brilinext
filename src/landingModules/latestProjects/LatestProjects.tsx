"use client"

import { Container, Section } from "@/shared/components";
import Slider from "./components/Slider";

export default function LatestProjects () {
  return (
    <Section>
      <Container>
        <h1 className="text-[40px]">Our latest projects</h1>
        <div className="block md:hidden">
          <Slider size="sm" />
        </div>
        <div className="hidden md:block">
          <Slider size="md" />
        </div>
      </Container>
    </Section>
  )
}