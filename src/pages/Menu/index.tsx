import HeaderRestaurant from '../../components/Header_restaurante'
import { useParams } from 'react-router-dom'
import Banner from '../../components/banner'
import MenuList from '../../components/Menu'
import { useGetMenuQuery } from '../../services/api'

const Menu = () => {
  const { id } = useParams()

  const { data: menuData, isLoading } = useGetMenuQuery(id!)
  console.log('Valor de menu recebido em MenuList:', menuData)

  const cardapio = menuData?.cardapio ?? []

  if (isLoading) {
    return <h3>Carregando ou sem itens no menu...</h3>
  }

  if (!menuData?.cardapio?.length) {
    return <h3>Sem itens no menu...</h3>
  }

  const cardapio = menuData.cardapio

  return (
    <>
      <HeaderRestaurant />
      <Banner />
      <MenuList menu={cardapio} />
    </>
  )
}

export default Menu
