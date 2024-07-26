import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface Product {
  state: boolean;
  id: number;
  name: string;
  category: string;
  counter: number;
}
interface ItemsState {
  products: Product[];
  categories: string[];
  nameList: string;
  dateCreation: string;
  completed: boolean;
  }
  
  
  const initialState: ItemsState = {
    categories: [],
    products: [],
    nameList: '',
    dateCreation: '',
    completed: false,
  };

  
  

  
  export const listProductSlice = createSlice({
    name: 'listProduct',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<string>) => {
            state.categories.push(action.payload);
        },
        deleteCategory: (state, action: PayloadAction<string>) => {
            state.categories = state.categories.filter((category) => category !== action.payload);
        },
        setProducts: (state, action: PayloadAction<Product>) => {           
            state.products.push(action.payload);
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        setName: (state, action: PayloadAction<string>) => {
            state.nameList = action.payload;
        },
        setDate: (state, action: PayloadAction<string>) => {           
            state.dateCreation = action.payload;
        },
        agregegateCounter: (state, action: PayloadAction<{ counters: Record<number, number> }>) => {
          const { counters } = action.payload;
          state.products.forEach(producto => {
              producto.counter = counters[producto.id];
          });
        },
        setCompleted: (state, action: PayloadAction<boolean>) => {
          state.completed = action.payload;
        },
        resetState() {
          return initialState;
        },

    },
  }); 


export const { 
  setCategories,
  setProducts, 
  deleteProduct, 
  deleteCategory, 
  setName, 
  agregegateCounter, 
  setDate, 
  setCompleted,
  resetState 
} = listProductSlice.actions;

export default listProductSlice.reducer;
