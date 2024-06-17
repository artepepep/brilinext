import SpriteSVG from "../images/SpriteSVG";

export default function Marquee ({ type }: { type: "left" | "right" }) {
  if (type === "right") {
    return (
      <div className="relative flex overflow-x-hidden md:max-w-[710px] md:mx-auto xl:max-w-[628px]">
        <div className="flex gap-10 items-center animate-marqueeLeft whitespace-nowrap">
          <SpriteSVG name="react" />
          <SpriteSVG name="figma" />
          <SpriteSVG name="redis" />
          <SpriteSVG name="django" />
          <SpriteSVG name="docker" />
          <SpriteSVG name="tailwind" />
          <SpriteSVG name="nextJs" />
          <SpriteSVG name="typeScript" />
          <div className="pr-10">
            <SpriteSVG name="nodeJs" />
          </div>
        </div>
        <div className="absolute top-0 flex w-fit gap-10 items-center animate-marqueeLeft2 whitespace-nowrap">
          <SpriteSVG name="react" />
          <SpriteSVG name="figma" />
          <SpriteSVG name="redis" />
          <SpriteSVG name="django" />
          <SpriteSVG name="docker" />
          <SpriteSVG name="tailwind" />
          <SpriteSVG name="nextJs" />
          <SpriteSVG name="typeScript" />
          <SpriteSVG name="nodeJs" />
        </div>
      </div>
    )
  } else {
    return (
      <div className="relative flex overflow-x-hidden md:max-w-[710px] md:mx-auto xl:max-w-[628px]">
        <div className="flex gap-10 items-center animate-marqueeRight whitespace-nowrap">
          <SpriteSVG name="react" />
          <SpriteSVG name="figma" />
          <SpriteSVG name="redis" />
          <SpriteSVG name="django" />
          <SpriteSVG name="docker" />
          <SpriteSVG name="tailwind" />
          <SpriteSVG name="nextJs" />
          <SpriteSVG name="typeScript" />
          <div className="pr-10">
            <SpriteSVG name="nodeJs" />
          </div>
        </div>
        <div className="absolute top-0 flex w-fit gap-10 items-center animate-marqueeRight2 whitespace-nowrap">
          <SpriteSVG name="react" />
          <SpriteSVG name="figma" />
          <SpriteSVG name="redis" />
          <SpriteSVG name="django" />
          <SpriteSVG name="docker" />
          <SpriteSVG name="tailwind" />
          <SpriteSVG name="nextJs" />
          <SpriteSVG name="typeScript" />
          <SpriteSVG name="nodeJs" />
        </div>
      </div>
    )
  }
}