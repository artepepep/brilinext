import { MouseEventHandler } from "react"
import SpriteSVG from "../images/SpriteSVG"

type Props = {
  openButtonClick: MouseEventHandler<HTMLButtonElement>,
}

export default function OpenBurgerMenuButton ({ openButtonClick }: Props) {
  return (
    <button onClick={openButtonClick} className="w-8 h-8 ml-auto md:hidden">
      <div className="w-6 mx-auto">
        <SpriteSVG name="openBurgerMenu" />
      </div>
    </button>
  )
}