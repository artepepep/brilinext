import {Container, Section} from "@/shared/components";
import Image from "next/image";

import blob from './images/blob.png'

type Props = {
  chooseUsArray: Array<{ heading: string, paragraph: string }>
}

export default function ChooseUsCards ({ chooseUsArray }: Props) {
  return (
    <Section>
      <Container>
        <h2 className={"text-[40px] md:text-[64px]"}>Why choose us?</h2>
        <div className={'flex flex-col gap-4 mt-12 md:mt-20 md:gap-6 xl:grid xl:grid-cols-2 xl:gap-6'}>
          {chooseUsArray.map(item => (
            <div
              key={item.heading}
              className="relative flex flex-col gap-6 py-6 px-4 border-[1px] border-[#525252] rounded-[20px] overflow-hidden md:px-6 md:py-10">
              <Image width={240} height={176} className="absolute top-0 right-0 rounded-[20px]" src={blob}
                     alt={item.heading}/>
              <h3 className="relative z-10 text-[24px] md:text-[32px]">{item.heading}</h3>
              <p className="relative z-10 text-[16px] md:text-[20px]">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
