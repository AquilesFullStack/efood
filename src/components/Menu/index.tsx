import { Place } from '../../pages/Home'
import Prato from '../Prato'
import { List } from './styles'

export type Props = {
  place: Place[]
}

const MenuList = ({ place }: Props) => (
  <div className="container">
    <List>
      {place.map((place) => (
        <li key={place.cardapio.id}>
          <Prato
            id={place.cardapio.id}
            foto={place.cardapio.foto}
            preco={place.cardapio.preco}
            nome={place.cardapio.nome}
            descricao={place.cardapio.descricao}
            porcao={place.cardapio.porcao}
          />
        </li>
      ))}
    </List>
  </div>
)

export default MenuList
