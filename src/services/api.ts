import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Place } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayLoad = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipcode: string
      number: string
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getPlace: builder.query<Place[], void>({
      query: () => `restaurantes`
    }),
    getMenu: builder.query<Place, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayLoad>({
      query: (body) => ({
        url: 'restaurantes',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetPlaceQuery, useGetMenuQuery, usePurchaseMutation } = api

export default api
