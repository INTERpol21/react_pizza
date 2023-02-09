import { createSlice } from '@reduxjs/toolkit'

export interface SortState {
  categoryId: number
  pageCount: number
  sort: { name: string; sortProperty: string }
}

const initialState: SortState = {
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: 'популярности(Уменьшение)',
    sortProperty: 'rating',
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setPageCount(state, action) {
      state.pageCount = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setPageCount } = filterSlice.actions

export default filterSlice.reducer
