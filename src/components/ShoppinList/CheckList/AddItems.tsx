import { useState } from "react";
import { CounterC } from "../CounterC";

interface AddItemsProps {
    id: number,
  name: string,
  count: number
}
export const AddItems: React.FC<AddItemsProps> = ({ id, name, count}) => {

  const [showElement, setShowElement] = useState(false);

  return (
    <>
    <span className="text-lg font-medium ">{name}</span>            
        <div className=" block right-0"
            onMouseEnter={() => setShowElement(true)}
            onMouseLeave={() => setShowElement(false)}>
            {!showElement && (
                
                    <div className="block p-2">
                    <div className=" rounded-full border-orange-company border-2  px-3 py-1 text-orange-company text-xs">
                        <p><span>{count}</span> pcs</p>
                    </div>
                    </div>
                
            )}
            {showElement && (
                <CounterC  id={id}/>
            )}
        </div>
    </>
  )
}
