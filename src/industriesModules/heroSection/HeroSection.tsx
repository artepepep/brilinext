import {Blob, Container, Figures, GradientButton, Section} from "@/shared/components";

type Props = {
  heading: string,
  paragraphs: string[],
}

export default function HeroSection ({ heading, paragraphs }: Props) {
  return (
    <Section>
      <Container>
        <div className={"flex flex-col gap-8 xl:max-w-[840px]"}>
          <h2 className={"text-[40px] font-semibold uppercase md:text-[64px]"}>
            {heading}
          </h2>
          <div className={"flex flex-col gap-3"}>
            {paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <GradientButton href={"#whatWeCanDo"} text={"Contact us"} uppercase={true} type={"link"} />
        </div>
        <Blob small={false} styles={"top-[-170px] right-[-100px]"} />
        <Figures />
      </Container>
    </Section>
  )
}