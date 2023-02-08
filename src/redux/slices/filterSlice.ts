import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: string
}

const initialState: CounterState = {
  value: "",
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
  
  },
})

// Action creators are generated for each case reducer function
export const {  } = filterSlice.actions

export default filterSlice.reducer
