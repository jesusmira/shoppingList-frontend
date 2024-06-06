import { NavLink } from "react-router-dom"
import { TooltipItem } from "./TooltipItem"

interface ItemButtonProps {
    src: string,
    tipText: string,

}

export const ItemButton = ({ src, tipText }: ItemButtonProps) => {
  
  return (
    <NavLink to={`/${tipText}`}>
        <TooltipItem tipText={tipText}>
            <button>
            <img src={src} alt={tipText} className="w-9 h-9 md:w-7 md:h-7" />
            </button>
        </TooltipItem>
    </NavLink>
  )
}
