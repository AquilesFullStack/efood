import Menus from '../../Modules/menus'
import Menu from '../Product_restaurant'
import { Imagem } from '../Header/styles'

import { Lists } from './styles'

export type Props = {
  menu: Menus[]
}

const MenuList = ({ menu }: Props) => (
  <div className="container">
    <Lists>
      {menu.map((menu) => (
        <Menu
          key={Imagem}
          imagem={menu.image}
          title={menu.title}
          description={menu.description}
        />
      ))}
    </Lists>
  </div>
)

export default MenuList
