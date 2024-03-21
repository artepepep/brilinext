import { Blob, Container, GradientButton, Section } from "@/shared/components";

export default function NotFound () {
  return (
    <Section>
      <Container>
        <div className="text-center pb-20 md:pb-[104px] xl:pb-[164px] md:max-w-[546px] md:text-left xl:max-w-[700px]">
          <h2
            style={{
              background: "linear-gradient(90deg, #3892F5FF, #B519F4FF, #F10BD0FF)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "4px transparent",
            }}
            className="text-[100px] tracking-[20px] leading-[1] uppercase font-bold text-white dark:text-black md:text-[180px] xl:text-[280px]">
            404
          </h2>
          <p className="text-xl md:text-[24px] xl:text-[32px]">Sorry, the page you are looking for was not found.</p>
          <p className="text-[14px] mt-4 mb-8 md:text-[16px] xl:text-[20px]">
            You may have followed an outdated link or the page has been moved. To return to the main page, click the button.
          </p>
          <GradientButton href="/" text="home page" uppercase={true} />
        </div>
        <div className="block md:hidden">
          <Blob styles="!top-[20%]" small={true} />
        </div>
        <div className="hidden md:block">
          <Blob styles="md:right-[-300px] xl:right-[-200px]" small={false} />
        </div>
      </Container>
    </Section>
  )
}