import { createSlice } from '@reduxjs/toolkit'
import { CardapioItem, Place } from '../../pages/Home'

type PostState = {
  items: Place[]
  isOpen: number | null
}

const initialState: PostState = {
  items: [],
  isOpen: null
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    aberto: (state, action) => {
      state.isOpen = action.payload
    },
    fechado: (state) => {
      state.isOpen = null
    }
  }
})

export const { aberto, fechado } = postSlice.actions
export default postSlice.reducer
