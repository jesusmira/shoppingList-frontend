import {  useSelector } from "react-redux";
import {  RootState } from "../../store";
import { AddItems, CheckItems   } from "./CheckList";
interface ItemSelectedProps {
  id: number,
  name: string
}

export const ItemSelected: React.FC<ItemSelectedProps> = ({ id, name }) => {

  const count = useSelector((state: RootState) => state.counter.counters[id] || 0);
  const { nameList } = useSelector((state: RootState) => state.listProduct);
  return (
    <>       
          <div className="flex flex-row items-center justify-between ">
            {
              nameList.length === 0 ? (
                <AddItems id={id} name={name} count={count}/>
              ): (
                <CheckItems name={name} count={count}/>
              )
            }
        </div>
    </>
  )
}
