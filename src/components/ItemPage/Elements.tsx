import { useEffect } from "react";
import { getCategories, getElements } from "../../store/slices/Elements";
import {  useAppDispatch, useAppSelector } from '../../hooks/dbstore';
import { ItemElement } from "./ItemElement";

export const Elements = () => {

const dispatch = useAppDispatch();
const { elements, categorias} = useAppSelector( state => state.Elements );

    useEffect(() => {
        dispatch( getElements() );
        dispatch( getCategories());
    }, [dispatch]) 
  return (
    <section className="pt-10  px-4 md:px-14">
        {/* <span>Loading: { isLoading ? 'True': 'False'}</span> */}
        
        <ul>          
          {
            categorias.map((category, i) => (
              <div key={i}>
                  <h1  className="text-lg font-semibold">{category}</h1>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 pb-6">
                      {
                        elements.filter((elemento) => elemento.category === category).map((elemento) => (
                          <ItemElement key={elemento._id} element = {elemento} />
                        ))
                      }
                  </div>
              </div>
            ))
          }
        </ul>
    </section>
  )
}


