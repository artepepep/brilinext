import {Blob, Container, GradientButton, Section} from "@/shared/components";

type Props = {
  heading: string,
  list: Array<{ number: string, heading: string, paragraph: string }>,
  anchor: string,
}

export default function NumberedList ({ heading, list, anchor }: Props) {
  return (
    <Section>
      <Container>
        <div className={"relative flex flex-col gap-12 xl:flex-row xl:justify-between"}>
          <h2 className={"text-[40px] md:text-[64px] xl:hidden"}>{heading}</h2>
          <div className={"hidden xl:flex xl:flex-col xl:gap-10 xl:w-[328px]"}>
            <h2 className={"text-[40px] md:text-[64px]"}>{heading}</h2>
            <GradientButton text={"Contact us"} uppercase={true} type={"link"} href={`/${anchor}/#whatWeCanDo`}/>
          </div>
          <div className={"flex flex-col gap-6"}>
            {list.map((item) => (
              <div
                className={"flex flex-col gap-5 pb-5 border-b-[1px] border-b-[#D1D1D1] md:flex-row md:items-start md:gap-8 md:pb-6"}
                key={item.number}>
                <p className={"text-[64px] text-[#3892F5] md:text-[100px] md:leading-[80px]"}>{item.number}</p>
                <div className={"flex gap-4 md:gap-8 xl:justify-between xl:items-between"}>
                  <h3 className={"w-full text-[24px] md:text-[32px] xl:leading-[40px] xl:w-[190px]"}>{item.heading}</h3>
                  <p className={"w-full text-[16px] xl:w-[380px] xl:leading-[28px]"}>{item.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={"flex xl:hidden"}>
            <GradientButton text={"Contact us"} uppercase={true} type={"link"} href={`/${anchor}/#whatWeCanDo`}/>
          </div>
        </div>
        <Blob styles={"top-0 left-[-300px]"} small={false}/>
      </Container>
    </Section>
  )
}
