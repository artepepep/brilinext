import { Container, Section } from "@/shared/components";
import WhyChooseUs from "./components/WhyChooseUs";

export default function ChooseUs () {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <h2 className="text-[40px] xl:text-[64px]">See why people <span className="text-[#38A4FF]">choose us...</span></h2>
          <p className="text-xl md:text-[24px]">
            We help small and medium-sized businesses to effectively increase their value in the market.
          </p>
        </div>
        <WhyChooseUs />
      </Container>
    </Section>
  )
}