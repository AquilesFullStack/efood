import Prato from '../Prato'
import { List, Item } from './styles'

export type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  place: Cardapio[]
}

const MenuList = ({ place }: Props) => (
  <div className="container">
    <List>
      {place.map((item) => (
        <Item key={item.id}>
          <Prato
            id={item.id}
            foto={item.foto}
            preco={item.preco}
            nome={item.nome}
            descricao={item.descricao}
            porcao={item.porcao}
          />
        </Item>
      ))}
    </List>
  </div>
)

export default MenuList
