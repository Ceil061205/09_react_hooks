import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1,
    message: 'hello',
  },
  reducers: {
    incrementAction: (state, {payload}) => {
      state.count += payload;
    },
    decrementAction: (state, {payload}) => {
      state.count -= payload;
    },
    changeMessageAction: (state, { payload }) => {
      state.message = payload
    }
  }
})

export const { incrementAction, decrementAction, changeMessageAction } = counterSlice.actions
export default counterSlice.reducer