import {Container, Section} from "@/shared/components";
import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";

type Props = {
  heading: string,
  data: Array<{ heading: string, ul: Array<{ li: string }> }>,
  twoColumns?: boolean
}

export default function CheckedList ({ heading, data, twoColumns }: Props) {
  return (
    <Section>
      <Container>
        <h2 className={"text-[40px] md:text-[64px]"}>{heading}</h2>
        <div className={`flex flex-col mt-12 xl:mt-[100px] ${twoColumns ? "" : "md:grid md:grid-cols-2"} md:gap-y-[56px] xl:grid ${twoColumns ? 'xl:grid-cols-2' : 'xl:grid-cols-3'}`}>
          {data.map(item => (
            <div className={"p-4"} key={item.heading}>
              <div className={`flex flex-col gap-4 ${twoColumns ? "" : 'xl:max-w-[400px]'}`}>
                <h3 className={"text-[24px] md:text-[32px]"}>{item.heading}</h3>
                <div className={"pt-4 text-[16px] border-t-[1px] border-t-[#3892F5] md:text-[20px]"}>
                  <ul className={"flex flex-col gap-6"}>
                    {item.ul.map(li => (
                      <li className={"flex item-center gap-2"} key={li.li}>
                        <SharedSpriteSVG name={'check'}/>
                        {li.li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
