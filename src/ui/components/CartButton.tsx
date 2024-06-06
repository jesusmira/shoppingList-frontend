import { useAppSelector } from "../../hooks/dbstore";

interface CartButtonProps {
  handleClick: () => void
}

export const CartButton = ({ handleClick }: CartButtonProps) => {

  const { sumCounters } = useAppSelector((state) => state.counter);

  return (
    <div className="relative">
            <div className="absolute  -top-3 -right-1 ">
            <input 
                type="text" 
                id="sumCounters" 
                name="sumCounters" 
                className="bg-red-500 text-center text-white  py-1 rounded text-xs w-5 border-none outline-none" value={sumCounters} readOnly />
            </div>
        <button className=" bg-orange-company rounded-full" onClick={handleClick}>
            <img src="./shopping_cart.svg" alt="items" className="w-6 h-6 m-3"  />
        </button>
    </div>
  )
}