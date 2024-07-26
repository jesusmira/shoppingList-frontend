import { shoppingListApi } from "../../../api/shoppingListApi";

import { AppThunk, RootState } from '../../store'; 
import { setItems } from "./listHistorySlice";

export const postListProduct = (): AppThunk => async( _, getState ) => {
    try {
        const state = getState() as RootState;
        const { products, completed, nameList, dateCreation } = state.listProduct;
        const data = { products, completed, nameList, dateCreation };
         const resp = await shoppingListApi.post('listProducts/new', data);

         console.log(resp);
    }
    catch (error) {
        console.log(error);
    }
}

export const getListProducts = (): AppThunk => async( dispatch ) => {
    try {
        
        const resp = await shoppingListApi.get(`listProducts/`);
        dispatch( setItems(resp.data.listProducts) );
        
    }
    catch (error) {
        console.log(error);
    }
}