import { CustomCheck } from "../CustomCheck"

interface CheckItemsProps {
    name: string
    count: number
}
export const CheckItems: React.FC<CheckItemsProps> = ( { name, count} ) => {
  return (
    <>
        <CustomCheck label={name} />
        <div className="block p-2">
            <div className=" rounded-full border-orange-company border-2  px-3 py-1 text-orange-company text-xs">
                <p><span>{count}</span> pcs</p>
            </div>
        </div>
    </>
  )
}
