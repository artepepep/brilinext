import { Contacts, Container, Section } from "@/shared/components";
import Form from "./components/Form"; 

export default function WhatCanWeDo () {
  return (
    <Section>
      <Container>
        <div id="whatWeCanDo" className="xl:flex xl:gap-6">
          <div className="flex flex-col gap-6 mb-6 xl:flex-col xl:w-1/2 xl:gap-16">
            <h2 className="text-[40px] xl:text-[64px]">What can we do for your business?</h2>
            <p>
              Start to build high-grade development solutions for your business purposes using these technologies. From startups and SMEs to large enterprises.            
            </p>
            <Contacts withIcons={true} />
          </div>
          <Form />
        </div>
      </Container>
    </Section>
  )
}