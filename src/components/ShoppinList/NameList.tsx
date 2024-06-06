import { useAppSelector } from "../../hooks/dbstore";

export const NameList = () => {
  const { nameList } = useAppSelector((state) => state.listProduct);
  return (
    <div className="mt-6 flex flex-row items-center justify-between w-full">
      <p className="text-2xl font-bold placeholder:text-black bg-[#FFF0DE]  w-10/12">
        {
          nameList.length === 0 ? "Shopping List" : nameList
        }
      </p>
      <img src="./ink_pen.svg"  alt="" className="w-6 h-6"/>
    </div>
  )
}
