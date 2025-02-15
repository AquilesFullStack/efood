import { Imagine, Titulo } from './styles'

import headerImg from '../../assets/Vector.png'
import logo from '../../assets/logo.png'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

const HeaderRestaurant = () => {
  const { cardapio } = useSelector((state: RootReducer) => state.cart)
  return (
    <Imagine style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <a href="/">
          <Titulo>Restaurantes</Titulo>
        </a>
        <a href="/">
          <img src={logo} alt="Logo do site" />
        </a>
        <Titulo>{cardapio.length} produto(s) no carrinho</Titulo>
      </div>
    </Imagine>
  )
}

export default HeaderRestaurant
