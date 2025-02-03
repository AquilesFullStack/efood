import HeaderRestaurant from '../../components/Header_restaurante'
import { useParams } from 'react-router-dom'
import Banner from '../../components/banner'
import MenuList from '../../components/Menu'
import { useGetMenuQuery } from '../../services/api'

const Menu = () => {
  const { id } = useParams()

  const { data: menu } = useGetMenuQuery(id!)

  if (!menu) {
    return <h3>Carregando ou sem itens no menu...</h3>
  }

  const cardapio = menu.cardapio

  return (
    <>
      <HeaderRestaurant />
      <Banner />
      <MenuList menu={cardapio} />
    </>
  )
}

export default Menu
