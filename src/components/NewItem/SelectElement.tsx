import { ErrorMessage, useField } from "formik";
import { useEffect, useRef, useState } from "react"

interface SelectElementProps {
    name: string;
    id: string;
    placeholder: string;
    required: boolean;
    categories: string[];
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
}
export const SelectElement: React.FC<SelectElementProps> = ({ label, categories,...props }: SelectElementProps) => {

  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [ field,, helpers ] = useField(props.name);

  const handleClick = (category: string) => {
    helpers.setValue(category); 
    setIsFocused(false);  
  };

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className=" flex flex-col  gap-y-2 focus-within:text-orange-company relative" ref={dropdownRef}>
      <label  className="block text-sm font-medium  " htmlFor={props.id || props.name}>{label}</label>
      <input  
        type="text"
        {...field}
        {...props}
        value={ field.value || "" }
        onClick={ handleFocus }
        className="appearance-none  py-3 px-4  w-full border-2 rounded-lg text-sm focus:border-2 leading-tight focus:border-orange-company  border-gray-300 text-gray-400 focus:outline-none " 
        autoComplete="off"
        />
        <ErrorMessage name={props.name} component="div" className="error text-red-500" />
      { isFocused && (
        <>
          <div className="absolute  top-10 right-3">
            <button onClick={handleFocus}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
          </div>
          <div className="w-full h-40 border-[1px] rounded-lg border-gray-00 overflow-y-scroll no-scrollbar ">
              <ul className="font-medium text-md flex flex-col m-2  gap-y-2 text-gray-400">
                  {categories.map((category, index) => (
                    <li  key={index} className=" hover:bg-slate-100 p-2 rounded-lg hover:text-black"
                    onClick={() =>handleClick(category)}>{category}</li>
                  ))}
              </ul>
          </div>
        </>
      )}
    </div>
  )
}
