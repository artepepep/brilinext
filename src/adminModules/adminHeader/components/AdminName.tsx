import SpriteSVG from "./SpriteSVG";

export default function AdminName ({ name }: { name: string }) {
  return (
    <div className={"flex items-center gap-[10px]"}>
      <SpriteSVG name={"person"} />
      <p>{name}</p>
    </div>
  )
}