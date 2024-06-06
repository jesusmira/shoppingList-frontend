import { createSlice } from '@reduxjs/toolkit';

interface IsMobileState {
    isMobile: boolean;
  }
  const initialState: IsMobileState = {
    isMobile: window.innerWidth < 768, // Inicialmente, determinamos si la pantalla es móvil según el ancho
  };

export const isMobileSlice = createSlice({
    name: 'isMobile',
    initialState,
    reducers: {
       changeDisplay: (state, /* action */ ) => {
            state.isMobile = !state.isMobile;
        },
    }
});


// Action creators are generated for each case reducer function
export const { changeDisplay } = isMobileSlice.actions;

export default isMobileSlice.reducer;