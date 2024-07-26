import { ButtonBack } from '../../ui/components/ButtonBack';
import { DateCalendar } from '../../ui/components/DateCalendar';
import { HistoryItem } from './HistoryItem';

import { useAppSelector } from "../../hooks/dbstore";

export const HistoryOne = () => {
  const productId = useAppSelector((state) => state.history.productId);
  const product = useAppSelector((state) => state.items.items.find((elemento) => elemento._id === productId));
  const categorias = useAppSelector((state) => state.Elements.categorias);

  if (!product) {
    return <div className=" md:w-[85%] w-full pl-24 sm:pr-8 lg:pl-40 pt-8 md:px-16  pr-6">Product not found</div>;
  } 

  const { nameList, dateCreation, products } = product;
  
  return (
    <section className="md:w-[85%] w-full pl-24 sm:pr-8 lg:pl-40 pt-8 md:px-16 pr-6">
      <ButtonBack option={2} /> 
      <h1 className="text-[26px] font-semibold basis-2/3 pt-8 pb-3">{nameList}</h1>
      <DateCalendar dateCreation={dateCreation} />

      <ul className='mt-8'>
        {categorias.map((category, id) => {
          const filteredProducts = products.filter((elemento) => elemento.category === category);
          return (
            filteredProducts.length > 0 && (
              <li key={category}>
                <div>
                  <h1 className="text-lg font-semibold">{category}</h1>
                  <div key={id} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 pb-6 lg:pr-36">
                    {filteredProducts.map((elemento) => (
                      <HistoryItem key={elemento.id} name={elemento.name} counter={elemento.counter} />
                    ))}
                  </div>
                </div>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
};


