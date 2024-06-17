import { Container, Section } from "@/shared/components";
import ServicesList from "./components/ServicesList";

export default function Services () {
  return (
    <Section>
      <Container>
        <h2 id="services" className="mb-16 text-[40px] xl:text-[64px]">Our core services</h2>
        <ServicesList />
      </Container>
    </Section>
  )
}