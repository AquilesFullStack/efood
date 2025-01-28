import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Place } from '../pages/Home'

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
    })
  })
})

export const { useGetPlaceQuery, useGetMenuQuery } = api

export default api
