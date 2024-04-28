import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremant: (state) => {
      state.value = state.value + 1
    },

    decremant: (state) => {
      state.value = state.value - 1
    },
  },
})

export const { incremant, decremant } = counterSlice.actions

export default counterSlice.reducer
