import { useAppDispatch } from "../../hooks/dbstore";
import { showAllHistory } from "../../store/slices/HistoryPanel";
import { showShoppingList } from "../../store/slices/rightPanel/rightPanel";

export const ButtonBack = ({option}: {option: number}) => {

  const dispatch = useAppDispatch();

  const handleClick = () => {
    (option === 1)? dispatch( showShoppingList()) : dispatch( showAllHistory());
    
  }

  return (
    <button className=" text-orange-company font-bold inline-flex text-sm  " onClick={handleClick}>
        ⭠ back
    </button>
  )
}
