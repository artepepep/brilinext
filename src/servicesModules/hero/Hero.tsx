import {Blob, Container, GradientButton, Section} from "@/shared/components";
import Bubbles from "@/servicesModules/hero/components/Bubbles";

type Props = {
  heading: string
  paragraph: string
}

export default function Hero ({ heading, paragraph }: Props) {
  return (
    <Section>
      <Container>
        <div className={"flex flex-col gap-8 max-w-[558px]"}>
          <h2 className={"text-[40px] font-semibold uppercase md:text-[64px]"}>{heading}</h2>
          <p className={"xl:text-[20px]"}>
            {paragraph}
          </p>
          <GradientButton href={"/#"} text={"Contact us"} uppercase={true} type={"link"} />
        </div>
        <Blob styles={"top-[-200px] right-[-200px] z-[-2]"} small={false} />
        <Bubbles />
      </Container>
    </Section>
  )
}
