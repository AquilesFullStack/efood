import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardapioItem } from '../../pages/Home'

type CartState = {
  cardapio: CardapioItem[]
  isOpen: boolean
  order: boolean
  orderCard: boolean
}

const initialState: CartState = {
  cardapio: [],
  isOpen: false,
  order: false,
  orderCard: false
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
    closeInitialCart: (state) => {
      state.order = false
    },
    openCheckoutOrder: (state) => {
      state.order = true
    },
    closeCheckoutOrder: (state) => {
      state.order = false
    },
    openCardOrder: (state) => {
      state.orderCard = true
    },
    closeCardOrder: (state) => {
      state.orderCard = false
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
  closeCheckoutOrder,
  openCardOrder,
  closeCardOrder,
  closeInitialCart
} = cartSlice.actions
export default cartSlice.reducer
