import { createSlice } from '@reduxjs/toolkit';

export const rightPanelSlice = createSlice({
    name: 'rightPanel',
    initialState: {
        show: 1
    },
    reducers: {
        showShoppingList: (state, /* action */ ) => {
            state.show = 1;
        },
        showItem: (state, /* action */ ) => {
            state.show = 2;
        },
        showNewItem: (state, /* action */ ) => {
            state.show = 3;
        },
    }
});


// Action creators are generated for each case reducer function
export const { showShoppingList, showItem, showNewItem } = rightPanelSlice.actions;

export default rightPanelSlice.reducer;