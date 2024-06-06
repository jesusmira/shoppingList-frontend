import { startLoadingElements, setElements, setCategorias, getItem} from ".";
import { shoppingListApi } from "../../../api/shoppingListApi";
import { AppThunk } from '../../store'; 

interface item {
    name: string;
    note: string;
    image: string;
    category: string;
  }
export const getElements = (): AppThunk => async(dispatch) => {

    try {
        dispatch(startLoadingElements());

        const resp = await shoppingListApi.get('items/');
        const { data } = resp;
        dispatch(setElements(data.items));

    }
    catch (error) {
        console.log(error);
    }
}
export const postItem = (item: item): AppThunk => async( dispatch ) => {
    try {
        const resp = await shoppingListApi.post('items/new', item);
        const { data } = resp;
        dispatch(getItem(data.item));
        dispatch (getCategories());
        dispatch( getElements());
    }
    catch (error) {
        console.log(error);
    }
} 

export const getCategories = (): AppThunk => async(dispatch) => {
    try {
        const resp = await shoppingListApi.get('items/categories/');
        const { data } = resp;
        const categorias: string[] = data.categories.map((objeto: { categorias: string; }) => objeto.categorias)[0];
        categorias.sort();
        dispatch( setCategorias( categorias));
        
    }
    catch (error) { 
        console.log(error);
    }
}