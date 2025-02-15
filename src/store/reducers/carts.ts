import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardapioItem } from '../../pages/Home'

type CartState = {
  cardapio: CardapioItem[]
  isOpen: boolean
  order: boolean
}

const initialState: CartState = {
  cardapio: [],
  isOpen: false,
  order: false
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
      state.cardapio = state.cardapio.filter(
        (item) => item.id !== action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.cardapio = []
    },
    openCheckoutOrder: (state) => {
      state.order = true
    },
    closeOrder: (state) => {
      state.order = false
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  clear,
  openCheckoutOrder,
  closeOrder
} = cartSlice.actions
export default cartSlice.reducer
