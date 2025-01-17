import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

export interface GalerryItem {
  type: 'image'
  url: string
}

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
    gallery: GalerryItem[]
  }
}

const Home = () => {
  const [locais, setLocais] = useState<Place[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setLocais(res))
  }, [])
  return (
    <>
      <Header />
      <RestaurantList place={locais} />
      <Footer />
    </>
  )
}

export default Home
