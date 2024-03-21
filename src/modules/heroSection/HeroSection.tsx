import { Blob, Container, GradientButton, Section } from "@/shared/components";

export default function HeroSection () {
  return (
    <Section>
      <Container>
        <div className="py-10 flex min-h-fit flex-col gap-6 md:max-w-[704px] xl:max-w-[1064px]">
          <h2 className="text-[40px] md:text-[56px] uppercase font-semibold drop-shadow-2xl text-black dark:text-white">
            <span 
              className="min-h-fit text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]">
              Empower your business
            </span> with innovative software solutions tailored to your needs
          </h2>
          <p className="text-xl">We offer custom software development and outsourcing services with our team of experts.</p>
          <div className="xl:mt-5">
            <GradientButton href="/#whatWeCanDo" text="Contact us" uppercase={false} />
          </div>
        </div>
        <div className="hidden md:block"><Blob small={false} /></div>
        <div className="block md:hidden"><Blob small={true} styles="top-[15%]" /></div>
      </Container>
    </Section>
  )
}