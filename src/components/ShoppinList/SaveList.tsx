import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/dbstore";
// import { agregegateCounter, setDate, setName } from "../../store";
import { setName } from "../../store";
// import { postListProduct } from "../../store/slices/listProducts/thunks";
import { capitalize } from "../../utils/capitalize";
// import { setName } from "../../store";
// import  {obtenerFechaFormateada}  from "../../hooks/formatedDate"

export const SaveList = () => {

  const { categories} = useAppSelector((state) => state.listProduct);
  // const { counters } = useAppSelector((state) => state.counter);
  const [inputValue, setInputValue] = useState('');
  const disspatch = useAppDispatch();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleClickSave = () => {
    if( inputValue.length > 0  && categories.length > 0 ) {
      disspatch( setName(capitalize(inputValue)) );
      setInputValue('');
      // disspatch( agregegateCounter({counters}) );
      // disspatch ( setDate( obtenerFechaFormateada()));
      // disspatch ( postListProduct() );

    }
  }

  return (
      <div className={`flex flex-row  items-center justify-center p-[1.20rem] z-0 bg-white `}>

        <input
            autoComplete="off"
            disabled = {categories.length > 0 ? false : true}
            placeholder="Enter a name"
            id="input-nameList"
            name="input-nameList"
            value={inputValue}
            onChange={handleInputChange}
            className={`border-2 pl-2 rounded-lg text-sm py-4 w-8/12
            ${ categories.length > 0
              ? 'border-orange-company outline-blue-500'
              : ' border-slate-300 placeholder:text-slate-300 outline-none cursor-not-allowed'} `}
            type="text" />
        <button
        onClick={ handleClickSave }
        disabled = {categories.length > 0 ? false : true}
        className={` px-6 py-4 text-white text-base font-semibold -ml-2 md:place-content-end
        ${ categories.length > 0
          ? 'bg-orange-company rounded-lg hover:bg-orange-600'
          : ' bg-slate-300 rounded-lg cursor-not-allowed'} `}
        >Save</button>

    </div>
  )
}


