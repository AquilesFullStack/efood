import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'
import { useGetPlaceQuery } from '../../services/api'

export type Place = {
  preco: number
  foto: string
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const { data: restaurantes } = useGetPlaceQuery()

  if (restaurantes) {
    return (
      <>
        <Header />
        <RestaurantList place={restaurantes} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
