import { useAppDispatch } from "../../hooks/dbstore";
import { showShoppingList } from "../../store/slices/rightPanel/rightPanel";

export const ButtonBack = () => {

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch( showShoppingList())
  }

  return (
    <button className=" text-orange-company font-bold inline-flex text-sm  " onClick={handleClick}>
        ⭠ back
    </button>
  )
}
