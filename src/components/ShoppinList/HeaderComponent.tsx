import { useAppDispatch} from "../../hooks/dbstore"
import { showNewItem } from "../../store/slices/rightPanel/rightPanel";

export const HeaderComponent = () => {

  const dispatch = useAppDispatch();

  const haddleClick = () => {
    dispatch( showNewItem() );
  }

  return (
    <div className=" bg-[#80485B] rounded-xl flex flex-row items-center gap-4 ">
        <img src="./source.svg" alt="source" className="-mt-7"/>
        <div className="mt-3 mb-4">
            <h1 className="text-white font-bold text-base mb-2">Didn’t find what you need?</h1>
            <button className="w-max  bg-white rounded-xl px-6  py-2 font-bold" onClick={haddleClick}>Add Item</button>
        </div>
    </div>
  )
}
