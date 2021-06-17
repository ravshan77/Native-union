import { createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    card: 0,
  },
  reducers: {
    increment: (state) => {
      state.card += 1
    },
    decrement: (state) => {
      state.card -= 1
    },
    incrementByAmount: (state, action) => {
      state.card += action.payload
    },
  },
})




export default counterSlice.reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions

