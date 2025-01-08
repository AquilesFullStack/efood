import Footer from '../../components/Footer'
import HeaderRestaurant from '../../components/Header_restaurante'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Place } from '../Home'
import Banner from '../../components/banner'
import MenuList from '../../components/Menu'

const Menu = () => {
  const { id } = useParams()

  const [menus, setMenu] = useState<Place[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])

  if (!menus) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderRestaurant />
      <Banner />
      <MenuList place={menus} />
      <Footer />
    </>
  )
}

export default Menu
