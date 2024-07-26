import { Item} from "../components/ShowItem";
import { ButtonBack } from '../ui/components/ButtonBack';


export const ShowItem = () => {

  return (
    <div className={` flex-col fixed h-screen right-0 w-[80%] md:w-[30%] bg-white px-4 md:px-14 pt-5 gap-4 scrollbar-thin  scrollbar-thumb-orange-company scrollbar-track-slate-100  overflow-y-scroll`}>
      <ButtonBack option={1}/>
      <Item />
    </div>   
  )
}
