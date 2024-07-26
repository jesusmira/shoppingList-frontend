import { useAppDispatch } from "../../hooks/dbstore";
import { getItem } from "../../store/slices/Elements/elementSlice";
import { showItem } from "../../store/slices/rightPanel/rightPanel";

interface Elemento{
  _id: number;
  name: string;
  note: string;
  image: string;
  category: string;
}
interface ItemElementProps {
    element : Elemento;
}
export const ItemElement = ({ element }: ItemElementProps) => {
  
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch( showItem())
    dispatch( getItem( element ));
  }


  return (
    <div className="w-full h-min bg-white rounded-xl shadow flex flex-row  justify-between">
      <span className="pl-3 my-3  font-semibold text-sm md:text-base">{element.name} </span>
      <button onClick={handleClick} className=" pl-1 pr-4 font-normal text-neutral-500 text-2xl "> + </button>
    </div>
  )
}
