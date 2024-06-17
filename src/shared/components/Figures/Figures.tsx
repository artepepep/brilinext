import Image from "next/image";

import BigSphere from "../../images/BigSphere.png";
import SmallSphere from "../../images/SmallSphere.png";
import BigPyramid from "../../images/BigPyramid.png";
import SmallPyramid from "../../images/SmallPyramid.png";
import Stick from "../../images/Stick.png";

export default function Figures () {
  return (
    <div className={"absolute z-[-1] right-0 top-[100px] hidden md:block"}>
      <div className={"relative w-[530px] h-[520px] dark:opacity-100 opacity-65"}>
        <Image
          className={"absolute top-[50px] left-[32px] animate-bigSphereAnimation"}
          width={280}
          height={280}
          src={BigSphere}
          alt={"Big Sphere"}
        />
        <Image
          className={"absolute right-[58px] bottom-[86px] animate-smallSphereAnimation"}
          width={122}
          height={122}
          src={SmallSphere}
          alt={"Small Sphere"}
        />
        <Image
          className={"absolute left-[18px] bottom-[54px] animate-bigPyramidAnimation"}
          width={150}
          height={150}
          src={BigPyramid}
          alt={"Big Pyramid"}
        />
        <Image
          className={"absolute top-[20px] right-[80px] animate-smallPyramidAnimation"}
          width={100}
          height={100}
          src={SmallPyramid}
          alt={"Small Pyramid"}
        />
        <Image
          className={"absolute top-[160px] right-[32px] animate-stickAnimation"}
          width={230}
          height={140}
          src={Stick}
          alt={"Stick"}
        />
      </div>
    </div>
  )
}