import { useState } from "react"

interface CheckboxProps {
    label: string
}

export const CustomCheck: React.FC<CheckboxProps> = ({ label }) => {

    const [checked, setChecked] = useState(false);
    
    const handleCheck = () => {
        setChecked(!checked);
    };
    return (
      <div className="relative flex flex-row items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="absolute opacity-0 w-6 h-6 cursor-pointer"
        />
        <div className=" border-2 border-orange-company w-6 h-6 rounded-md">
          {checked && (

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256" > <g fill="#f9a109" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(8,8)"><path d="M28.28125,6.28125l-17.28125,17.28125l-7.28125,-7.28125l-1.4375,1.4375l8,8l0.71875,0.6875l0.71875,-0.6875l18,-18z"></path></g></g> </svg>
           
          )}
        </div>
        <label className={`ml-2 text-lg font-medium  ${checked ? 'line-through' : ''}`}>{label}</label>
      </div>
    );
  };

