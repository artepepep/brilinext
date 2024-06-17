import {Blob, Container, Figures, GradientButton, Section} from "@/shared/components";

type Props = {
  heading: string,
  paragraph: string,
}

export default function HeroSection ({ heading, paragraph }: Props) {
  return (
    <Section>
      <Container>
        <div className={"flex flex-col gap-8 xl:max-w-[840px]"}>
          <h2 className={"text-[40px] font-semibold uppercase md:text-[64px]"}>
            {heading}
          </h2>
          <p>
            {paragraph}
          </p>
          <GradientButton href={"#whatWeCanDo"} text={"Contact us"} uppercase={true} type={"link"} />
        </div>
        <Blob small={false} styles={"top-[-170px] right-[-100px]"} />
        <Figures />
      </Container>
    </Section>
  )
}