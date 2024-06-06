import { shoppingListApi } from "../../../api/shoppingListApi";

import { AppThunk, RootState } from '../../store'; 

export const postListProduct = (): AppThunk => async( dispatch, getState ) => {
    try {
        const state = getState() as RootState;
        const { products, completed, nameList, dateCreation } = state.listProduct;
        const data = { products, completed, nameList, dateCreation };
        console.log(data);
         const resp = await shoppingListApi.post('listProducts/new', data);

         console.log(resp);
    }
    catch (error) {
        console.log(error);
    }
}