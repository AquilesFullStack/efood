import Footer from '../../components/Footer'
import HeaderRestaurant from '../../components/Header_restaurante'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Place } from '../Home'
import Banner from '../../components/banner'
import MenuList from '../../components/Menu'

export type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Menu = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCardapio(res.cardapio || [])
      })
      .catch((error) => console.error('Erro ao buscar dados:', error))
  }, [id])

  if (!cardapio.length) {
    return <h3>Carregando ou sem itens no menu...</h3>
  }

  return (
    <>
      <HeaderRestaurant />
      <Banner />
      <MenuList place={cardapio} />
      <Footer />
    </>
  )
}

export default Menu
