import { Blob, Container, Section } from "@/shared/components";

export default function WhoWeAre () {
  return (
    <Section>
      <Container>
        <div id="about" className="relative">
          <h2 className="text-[32px] xl:text-[48px] dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] to-[#B519F4FF]">We are</span> a young and energetic company that works at a 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F10BD0FF] from-45% via-[#3892F5FF] to-[#B519F4FF]"> high level</span> and aims at a 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]"> quality result</span>, demonstrating flexibility in ways to achieve it
          </h2>
        </div>
        <Blob styles="!top-0 right-[-200px] md:right-0" small={true} />
      </Container>
    </Section>
  )
}