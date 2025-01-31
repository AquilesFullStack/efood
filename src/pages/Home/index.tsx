import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useGetPlaceQuery } from '../../services/api'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Place = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
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
