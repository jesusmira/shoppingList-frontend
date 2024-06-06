import { useAppSelector } from "../../hooks/dbstore";
import { setCategories, setProducts } from "../../store/slices/listProducts/listProductSlice";
import { showShoppingList } from "../../store/slices/rightPanel/rightPanel";
import { ButtonsAddDel } from "./ButtonsAddDel";
import { increment } from "../../store/slices/counter";
import { useDispatch } from "react-redux";
import { AppDispatch, changeDisplay } from "../../store";

 
export const Item: React.FC =  () => { 
 
  const item = useAppSelector((state) => state.Elements.item);
  const { categories, products } = useAppSelector((state) => state.listProduct);

  const noImage ="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=826"
  
  const dispatch = useDispatch<AppDispatch>();

  const handleClickDelete = () => {
    // TODO: delete item de la base de datos.

  };

  const handleClickList = () => {
    // Si NO esta la  categoria en el state, agregar la categoria
    if( !categories.includes(item.category)){
      dispatch( setCategories(item.category));
    } 

    // Si NO esta el producto en el state, agregarlo  
    if (!products.some( pro => pro.id === item._id )) {
      dispatch( setProducts( {
        id: item._id, name: item.name, category: item.category,
        state: false,
        counter: 0
      } ));
    }

    //Incrementar el contador con ese id en el state y mostrar el shopping list 
    dispatch( increment(item._id))
    dispatch( showShoppingList());
    dispatch( changeDisplay());
  };

  return (
    <>
      <div className="flex flex-col justify-evenly gap-y-5">

          { ( item.image === "" || item.image === "no image") ? 
          <img src={noImage} alt="undraw" className="w-full h-44 rounded-xl" /> :
          <img src={item.image} alt={item.name} className="w-full h-44 rounded-xl" />
          }
          <div>
            <h6 className="text-sm">name</h6>
            <p className="text-2xl font-bold">{item.name}</p>
          </div>
          <div>
            <h6 className="text-sm">category</h6>
            <p className="text-lg font-bold">{item.category}</p>
          </div>
          <div>
            <h6 className="text-sm pb-2">note</h6>
            <p className="text-lg font-bold leading-none">{item.note}</p>
          </div>
      
      </div>
      <ButtonsAddDel option={2}  button1="delete" button2="Add to list" onClick1={handleClickDelete} onClick2={handleClickList}/> 
          
    </>
  )
}
