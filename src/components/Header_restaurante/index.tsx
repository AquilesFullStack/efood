import { Imagine, Titulo } from './styles'

import headerImg from '../../assets/Vector.png'
import logo from '../../assets/logo.png'

const HeaderRestaurant = () => (
  <Imagine style={{ backgroundImage: `url(${headerImg})` }}>
    <div className="container">
      <a href="/">
        <Titulo>Restaurantes</Titulo>
      </a>
      <a href="/">
        <img src={logo} alt="Logo do site" />
      </a>
      <Titulo>0 produto(s) no carrinho</Titulo>
    </div>
  </Imagine>
)

export default HeaderRestaurant
