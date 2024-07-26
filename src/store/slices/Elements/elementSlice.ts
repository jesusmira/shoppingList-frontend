import { PayloadAction, createSlice} from '@reduxjs/toolkit';

interface Item {
    _id: number;
    name: string;
    note: string;
    image: string;
    category: string;
}
interface ElementState{
    elements: Item[];
    isLoading: boolean;
    item: Item;
    categorias: string[]
}

const initialState: ElementState = {
    elements: [],
    isLoading: false,
    item: {
        _id: 0,
        name: '',
        note: '',
        image: '',
        category: ''
    },
    categorias: [],
}

export const ElementSlice = createSlice({
    name: 'Elements',
    initialState,
    reducers: {
        startLoadingElements: (state, /* action */) => {
            state.isLoading = true;
        },
        setElements: (state, action: PayloadAction<Item[]>) => {
            state.isLoading = false;
            state.elements = action.payload;

        },
        // setElement: (state, action: PayloadAction<Item>) => {
        //     state.elements.Elements = action.payload;
        // },
        getItem:(state, action: PayloadAction<Item>) => {
            state.item = action.payload;
        },
        setCategorias:(state, action: PayloadAction<string[]>) => {
            state.categorias = action.payload;
        }

    }
});


// Action creators are generated for each case reducer function
export const { startLoadingElements, setElements, getItem, setCategorias } = ElementSlice.actions;

export default ElementSlice.reducer;