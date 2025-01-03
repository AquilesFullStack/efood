import { Place } from '../../pages/Home'
import Restaurant from '../Restaurantes'
import { List } from './styles'

export type Props = {
  place: Place[]
}

const RestaurantList = ({ place }: Props) => (
  <div className="container">
    <List>
      {place.map((place) => (
        <li key={place.id}>
          <Restaurant
            id={place.id}
            capa={place.capa}
            titulo={place.titulo}
            avaliacao={place.avaliacao}
            descricao={place.descricao}
            destacado={place.destacado}
            tipo={place.tipo}
          />
        </li>
      ))}
    </List>
  </div>
)

export default RestaurantList
