import HeaderRestaurant from '../../components/Header_restaurante'
import { useParams } from 'react-router-dom'
import Banner from '../../components/banner'
import MenuList from '../../components/Menu'
import { useGetMenuQuery } from '../../services/api'
import Checkout from '../../components/Checkout'

const Menu = () => {
  const { id } = useParams()

  const { data: menu } = useGetMenuQuery(id!)

  if (!menu) {
    return <h3>Carregando ou sem itens no menu...</h3>
  }

  return (
    <>
      <HeaderRestaurant />
      <Banner />
      <MenuList menu={menu.cardapio} />
    </>
  )
}

export default Menu
