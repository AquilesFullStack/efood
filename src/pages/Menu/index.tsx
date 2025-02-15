import HeaderRestaurant from '../../components/Header_restaurante'
import { useParams } from 'react-router-dom'
import Banner from '../../components/banner'
import MenuList from '../../components/Menu'
import { useGetMenuQuery } from '../../services/api'

type PlaceParams = {
  id: string
}

const Menu = () => {
  const { id } = useParams() as PlaceParams

  const { data: menu } = useGetMenuQuery(id)

  if (!menu) {
    return <h3>ADICIONAR LOADER</h3>
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
