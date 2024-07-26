import { useAppDispatch } from "../../hooks/dbstore";
import { setSelectedProduct, showOneHistory } from "../../store";
import Badge from "../../ui/components/Badge";
import { DateCalendar } from "../../ui/components/DateCalendar";

interface Record {
  _id: string;
  nameList: string;
  dateCreation: string;
  completed: boolean;
}

export const ListHistory = ( {_id, nameList, dateCreation, completed}: Record) => {

  const dispatch = useAppDispatch();

  const handleClick = ( id: string) => {
    console.log(id);
    dispatch( setSelectedProduct( id ) );
    dispatch( showOneHistory() );
    

  }

  return (
    <div className="md:w-[85%] w-11/12  bg-white rounded-xl shadow flex flex-row  justify-center mt-8">    
      <div className=" flex flex-row items-center justify-between py-4 px-3 md:p-4 w-full">
        <span className="   font-semibold text-xs md:text-base max-w-12 md:max-w-60  ">{ nameList }</span>

        <div className="flex flex-row items-center justify-between gap-2 md:gap-6">
            <DateCalendar dateCreation={dateCreation} />     
            

            {
              completed 
              ? <Badge text='completed' textColor='text-blue-300 text-xs md:text-sm' borderColor='border-blue-300'/> 
              : <Badge text='cancelled' textColor='text-red-500 text-xs md:text-sm' borderColor='border-red-500'/>
            }
            
            <button onClick={ () =>handleClick( _id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" id="forward-arrow" className='fill-orange-company'><path fill="none" d="M24 24H0V0h24v24z" opacity=".87"></path><path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"></path></svg>
            </button>
            
        </div>
      </div>
    </div>
  )
}
