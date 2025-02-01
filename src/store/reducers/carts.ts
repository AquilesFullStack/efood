import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardapioItem, Place } from '../../pages/Home'

type CartState = {
  items: Place[]
  cardapio: CardapioItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  cardapio: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const place = state.cardapio.find((item) => item.id === action.payload.id)

      if (!place) {
        state.cardapio.push(action.payload)
      } else {
        alert('O Prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
