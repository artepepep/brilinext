import {Container, Section} from "@/shared/components";
import Card from "@/servicesModules/industries/components/Card";

export default function Industries () {
  const industries = [
    {
      heading: "E-commerce",
      paragraph: "The popularity of e-commerce is skyrocketing. With just a few clicks, access millions of products, and easily compare prices. Develop e-commerce solutions with us.",
      href: "/e-commerce",
    },
    {
      heading: "AI implementation",
      paragraph: "Open the power and potential of AI for your business. Let us help you modernize your existing systems with AI to improve their productivity and efficiency.",
      href: "/ai-implementation",
    },
    {
      heading: "Edtech",
      paragraph: "The rise of e-learning platforms and educational technology (EdTech) presents a transformative opportunity. Turn the traditional teaching methods with Brilinxoft.",
      href: "/edtech",
    }
  ]

  return (
    <Section>
      <Container>
        <div className={"flex flex-col gap-12 min-h-fit"}>
          <h2 className={"text-[40px] md:text-[64px]"}>Our industries</h2>
          <div className={"flex flex-col gap-12 xl:flex-row xl:gap-6"}>
            {industries.map(industry => (
              <Card heading={industry.heading} paragraph={industry.paragraph} href={industry.href} key={industry.heading} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
