import {Blob, Container, Section} from "@/shared/components";

type Props = {
  heading: string,
  date: string,
  category: string,
  paragraph: string,
}

export default function SpecificNews ({ heading, date, category, paragraph }: Props) {
  return (
    <Section>
      <Container>
        <div className={"flex flex-col gap-6 pb-[120px] md:gap-10 xl:px-[220px]"}>
          <h2 className={"text-[32px] md:text-[48px]"}>{heading}</h2>
          <div className={"flex items-center gap-2 text-[#525252] uppercase md:text-[20px]"}>
            <p>{date}</p>
            <div>|</div>
            <p>{category}</p>
          </div>
          <div className={"w-full h-[340px] rounded-[20px] bg-[#D9D9D9] md:h-[500px]"}></div>
          <p className={"md:text-[20px]"}>{paragraph}</p>
        </div>
        <Blob small={false} styles={"top-[-150px] right-[-550px] xl:right-[-300px]"}/>
      </Container>
    </Section>
  )
}