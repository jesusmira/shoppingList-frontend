import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const HistorySlice = createSlice({
    name: 'history',
    initialState: {
        showHistory: 1,
        productId: ''
    },
    reducers: {
        showAllHistory: (state, /* action */ ) => {
            state.showHistory = 1;
        },
        showOneHistory: (state, /* action */ ) => {
            state.showHistory = 2;
        },
        setSelectedProduct(state, action: PayloadAction<string>) {
            state.productId = action.payload;
          },

    }
});


// Action creators are generated for each case reducer function
export const { showAllHistory, showOneHistory, setSelectedProduct } = HistorySlice.actions;
export default HistorySlice.reducer;
