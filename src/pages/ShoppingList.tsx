
import { useState } from "react";
import { ButtonsAddDel } from "../components/ShowItem";
import Modal from "../ui/components/Modal";
import { useAppDispatch, useAppSelector } from "../hooks/dbstore";
import { obtenerFechaFormateada } from '../hooks/formatedDate';
import { setCompleted,agregegateCounter, setDate, resetState, resetStateCounters } from "../store";
import { postListProduct } from "../store/slices/listProducts/thunks";
import { EmptyList, HeaderComponent, SaveList, NameList, ItemSelected } from "../components/ShoppinList"



export const ShoppingList = () => {
  const { categories, products, nameList } = useAppSelector((state) => state.listProduct);
  const { isMobile } = useAppSelector((state) => state.isMobile);
  const { counters } = useAppSelector((state) => state.counter);
  const disspatch = useAppDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const AddComplete = ( value:boolean) => {
    disspatch( setCompleted(value) );
    disspatch( agregegateCounter({counters}) );
    disspatch ( setDate( obtenerFechaFormateada()));
    disspatch ( postListProduct() );
    disspatch ( resetState() );
    disspatch ( resetStateCounters())
  }
  
  
  return (
    <div className={`${ isMobile ? "w-0": "w-[79%]"} md:w-[27%]  flex flex-col fixed h-screen right-0  `}>    
      <section className="h-screen bg-[#FFF0DE] pt-8 scrollbar-thin  scrollbar-thumb-orange-company scrollbar-track-slate-100  overflow-y-scroll  flex flex-col justify-between"> 
        <div className="mx-5  lg:ml-10 lg:mr-4 grid grid-flow-row gap-y-1">
          <HeaderComponent />
          {
            ( products.length === 0 ) ? 
              <EmptyList  /> : (
              <>              
              <NameList />
              {
                categories.map((category, index) => (
                  <div key={index}>
                    <p className="-mb-1 mt-6 text-neutral-500 font-medium text-xs" key={category}>{category}</p>
                    {
                      products.map((item) => (
                        item.category === category && (
                          <ItemSelected key={item.id}  id={item.id} name={item.name} />
                        )
                      ))
                    }
                  </div>
                ))
              }
              </>  
            )
          }
        </div>            
        </section>
        {
            (nameList === "") 
            ? (<SaveList />)
            : (<ButtonsAddDel option={1}  button1="cancel" button2="Complete" onClick1={openModal} onClick2={() => AddComplete(true)}/>) 
        }
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-lg font-medium mb-2 mr-9 break-words max-w-72">Are you sure that you want to cancel this list?</h2>
          <ButtonsAddDel option={3} button1="cancel" button2="Yes" onClick1={closeModal} onClick2={() => AddComplete(false)} />
        </Modal>
    </div>
  )
}
