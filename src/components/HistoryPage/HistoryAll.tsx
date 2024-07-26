import { useGroupedProducts } from "../../hooks/groupRecordsByMonthAndYear";
import { ListHistory } from "./ListHistory";

export const HistoryAll = () => {

    const lista = useGroupedProducts();

  return (
    <section className=" md:w-[85%] w-full pl-24  lg:pl-40 pt-8 md:pr-16"> 
      <h1 className="text-[26px] font-semibold basis-2/3">
      Shoppingify history
      </h1>
      <div>
        {Object.entries(lista).map(([key, group]) => (
          <div key={key}>
            <p className=" -mb-5 mt-5">{key}</p>
            {group.map(record => (
              <div key={record._id}>
                <ListHistory _id={record._id} nameList={record.nameList} dateCreation={record.dateCreation} completed={record.completed}  />
              </div>
            ))}
        </div>
      ))}
    </div> 
    </section>
  )
}
