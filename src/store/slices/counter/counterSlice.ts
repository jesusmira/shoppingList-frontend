import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
  counters: { [id: string]: number };
  sumCounters: number
}

const initialState: CounterState = {
  counters: {},
  sumCounters: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.counters[id] === undefined) {
        state.counters[id] = 0;
      }
      state.counters[id]++;
      state.sumCounters++;  
    },
    decrement: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.counters[id] === undefined || state.counters[id] <= 0) {
        return;
      }
      state.counters[id]--;
      state.sumCounters--;
    },
    reset: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.sumCounters = state.sumCounters - state.counters[id];
      delete state.counters[id];
    },
    resetStateCounters: (state) => {
      state.counters = {};
      state.sumCounters = 0;
    }
  },
});

export const { increment, decrement, reset, resetStateCounters } = counterSlice.actions;

export default counterSlice.reducer;

