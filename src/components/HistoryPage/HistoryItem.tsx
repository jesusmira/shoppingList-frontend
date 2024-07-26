
interface ItemProps{
  name: string,
  counter: number
}

export const HistoryItem = ({ name, counter }: ItemProps) => {
  return (
    <div className="w-full h-min  bg-white rounded-xl shadow flex flex-row  justify-between items-baseline">
      <span className="pl-3 my-3  font-semibold text-sm md:text-base">{ name }</span>
      <p  className=" pl-3 pr-3 my-3 font-normal text-orange-600   text-xs "> { counter } pcs </p>
    </div>
  )
}
