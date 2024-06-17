import {Container, Section} from "@/shared/components";

type Props = {
  heading: string,
  appTypes: Array<{ typeHeading: string, typeDescription: string }>
}

export default function ApplicationTypes ({ heading, appTypes }: Props) {
  return (
    <Section>
      <Container>
        <h3 className={"text-[40px] font-semibold md:text-[64px] md:mb-20"}>
          {heading}
        </h3>
        <div className={"flex flex-col gap-8 mt-12 md:grid md:grid-cols-2"}>
          {appTypes.map((appType) => (
            <div
              className={"flex flex-col gap-6 pl-5 h-fit border-l-[1px] border-l-[#3892F5]"}
              key={appType.typeHeading}
            >
              <h4 className={"text-2xl md:text-[32px]"}>{appType.typeHeading}</h4>
              <p>{appType.typeDescription}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}