// import { useState } from "react"

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store"
import { increment, decrement, reset} from "../../store/slices/counter/counterSlice";
import { deleteCategory, deleteProduct } from "../../store/slices/listProducts/listProductSlice";

interface CounterCProps {
    id: number
}

export const CounterC: React.FC<CounterCProps> = ({ id }) => {
    
    const count = useSelector((state: RootState) => state.counter.counters[id] || 1);
    // const counters = useSelector((state: RootState) => state.counter.counters);
    const { categories, products } = useSelector((state: RootState) => state.listProduct);
    const dispatch = useDispatch<AppDispatch>();

    const handleClickDelete = () => {
        const productDelete = products.find( (product) => product.id === id );
        const cate = categories.find( (category) => category === productDelete?.category ) || 'no category';
        const contador = products.filter( (product) => product.category === cate ).length;
        if (contador === 1) {
            dispatch( deleteCategory(cate))
        }
        dispatch(deleteProduct(id));
        dispatch(reset(id));
    }

  return (
        <div className="flex flex-row w-auto justify-end justify-items-start animate-flip-up animate-once animate-ease-linear animate-duration-200">
        <button className="px-2 py-3 -mr-2  bg-orange-company rounded-lg z-10 hover:bg-orange-600"
        onClick={ handleClickDelete } >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="18px" height="18px" className="fill-white"><path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"/></svg>
        </button>
        <div className="bg-white rounded-lg p-2  flex flex-row   items-center justify-evenly w-36 z-0 ">

            <button className=" " onClick={() =>dispatch(decrement(id))} >
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-orange-company"><path d="M200-440v-80h560v80H200Z"/></svg>
            </button>

            <div className="flex flex-row justify-center text-center rounded-full border-orange-company border-2  text-orange-company text-xs px-4 py-1">
                <div className=" ">{count} pcs</div>
            </div>
           
            <button className="" onClick={() =>dispatch(increment(id))}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-orange-company"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </button>
            
        </div>
        </div>
  )
}
