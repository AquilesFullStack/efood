import { Imagine, Titulo } from './styles'

import headerImg from '../../assets/Vector.png'
import logo from '../../assets/logo.png'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/carts'

const HeaderRestaurant = () => {
  const { cardapio } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Imagine style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <a href="/">
          <Titulo>Restaurantes</Titulo>
        </a>
        <a href="/">
          <img src={logo} alt="Logo do site" />
        </a>
        <Titulo onClick={openCart}>
          {cardapio.length}
          produto(s) no carrinho
        </Titulo>
      </div>
    </Imagine>
  )
}

export default HeaderRestaurant
