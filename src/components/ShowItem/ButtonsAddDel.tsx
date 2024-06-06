interface ButtonsAddDelProps{
   button1: string,
   button2: string,
   onClick1: () => void,  
   onClick2: () => void,
   option: number  
  }

 
export const ButtonsAddDel = ({button1, button2, onClick1, onClick2, option}: ButtonsAddDelProps) => {

  return (
    <div className={`flex flex-row  items-center   gap-x-8 ${option > 2 ? 'justify-end' : 'justify-center p-5'}`}>         
          <button type="button"
            className="px-3 py-4 text-black text-sm font-semibold" onClick={onClick1}
          >{button1}</button>
          <button
            type="submit"
            className={`px-6 py-4 text-white text-sm font-semibold -ml-2 md:place-content-end rounded-lg 
            ${ option > 2 
              ? 'bg-red-600 hover:bg-red-700' 
              : option > 1 
                ? 'bg-orange-company  hover:bg-orange-600 ' 
                : 'bg-blue-600 hover:bg-blue-950'}`}
             onClick={onClick2}
          >{button2}</button>
      </div>
  )
}
