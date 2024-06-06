import { ButtonBack, Item} from "../components/ShowItem"
// import { useAppSelector } from "../hooks/dbstore";

export const ShowItem = () => {
  // const { isMobile } = useAppSelector((state) => state.isMobile);
  // ${isMobile ? "flex" : "hidden"}
  return (
    <div className={` flex-col fixed h-screen right-0 w-[80%] md:w-[30%] bg-white px-4 md:px-14 pt-5 gap-4 scrollbar-thin  scrollbar-thumb-orange-company scrollbar-track-slate-100  overflow-y-scroll`}>
      <ButtonBack />
      <Item />
    </div>   
  )
}
