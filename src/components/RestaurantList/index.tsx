import Places from '../../Modules/places'
import { Imagem } from '../Header/styles'
import Restaurant from '../Product'

import { List } from './styles'

export type Props = {
  place: Places[]
}

const RestaurantList = ({ place }: Props) => (
  <div className="container">
    <List>
      {place.map((place) => (
        <li key={place.id}>
          <Restaurant
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
