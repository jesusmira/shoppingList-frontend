import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Product {
  state: boolean;
  id: number;
  name: string;
  category: string;
  counter: number;
}

interface ItemsState {
  _id: string; // Identificador único para cada elemento
  products: Product[];
  categories: string[];
  nameList: string;
  dateCreation: string;
  completed: boolean;
}

interface RootState {
  items: ItemsState[];
}

const initialState: RootState = {
  items: [],
};

export const listHistorySlice = createSlice({
  name: 'listHistory',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<ItemsState[]>) => {
      state.items = action.payload;
    }
  },
});

export const { setItems } = listHistorySlice.actions;
export default listHistorySlice.reducer;