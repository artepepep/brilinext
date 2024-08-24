import {Container, Section} from "@/shared/components";

type Props = {
  heading: string,
  data: Array<{ heading: string, paragraph: string }>
}

export default function List ({ heading, data }: Props) {
  return (
    <Section>
      <Container>
        <h2 className={"text-[40px] md:text-[64px]"}>{heading}</h2>
        <div className={"flex flex-col mt-12 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-y-[56px] xl:mt-[100px]"}>
          {data.map((item => (
            <div className={"p-4"} key={item.heading}>
              <div className={"flex flex-col gap-4 xl:max-w-[400px]"}>
                <h3 className={"text-[24px] md:text-[32px]"}>{item.heading}</h3>
                <p className={"pt-4 text-[16px] border-t-[1px] border-t-[#3892F5] md:text-[20px]"}>{item.paragraph}</p>
              </div>
            </div>
          )))}
        </div>
      </Container>
    </Section>
  )
}
