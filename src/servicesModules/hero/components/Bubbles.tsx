import BubblesImage from "../images/bubble.png"
import Image from "next/image";

export default function Bubbles () {
  return (
    <div>
      <Image className={"absolute z-[-1] top-[202px] right-[424px] animate-firstBubbleAnimation"} width={190} height={190} src={BubblesImage} alt={"Bubble"} />
      <Image className={"absolute z-[-1] top-[42px] right-[444px] animate-secondBubbleAnimation"} width={60} height={60} src={BubblesImage} alt={"Bubble"} />
      <Image className={"absolute z-[-1] top-[458px] right-[530px] animate-thirdBubbleAnimation"} width={26} height={26} src={BubblesImage} alt={"Bubble"} />
      <Image className={"absolute z-[-1] top-[24px] right-[180px] animate-fourthBubbleAnimation"} width={132} height={132} src={BubblesImage} alt={"Bubble"} />
      <Image className={"absolute z-[-1] top-[560px] right-[424px] animate-fifthBubbleAnimation"} width={88} height={88} src={BubblesImage} alt={"Bubble"} />
      <Image className={"absolute z-[-1] top-[388px] right-[72px] animate-sixthBubbleAnimation"} width={180} height={180} src={BubblesImage} alt={"Bubble"} />
      <Image className={"absolute z-[-1] top-[518px] right-[72px] animate-sevenBubbleAnimation"} width={50} height={50} src={BubblesImage} alt={"Bubble"} />
      <Image className={"absolute z-[-1] top-[388px] right-[220px] animate-eightBubbleAnimation"} width={90} height={90} src={BubblesImage} alt={"Bubble"} />
      <Image className={"absolute z-[-1] top-[236px] right-[40px] animate-nineBubbleAnimation"} width={62} height={62} src={BubblesImage} alt={"Bubble"} />
      <Image className={"absolute z-[-1] top-[170] right-[2px] animate-tenthBubbleAnimation"} width={26} height={26} src={BubblesImage} alt={"Bubble"} />
    </div>
  )
}
