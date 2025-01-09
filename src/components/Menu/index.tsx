import { Place } from '../../pages/Home'
import Prato from '../Prato'
import { List } from './styles'

export type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  place: Cardapio[] // Agora o tipo é uma lista de Cardapio
}

const MenuList = ({ place }: Props) => (
  <div className="container">
    <List>
      {place.map((item) => (
        <li key={item.id}>
          <Prato
            id={item.id}
            foto={item.foto}
            preco={item.preco}
            nome={item.nome}
            descricao={item.descricao}
            porcao={item.porcao}
          />
        </li>
      ))}
    </List>
  </div>
)

export default MenuList
