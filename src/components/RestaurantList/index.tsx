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
        <Restaurant
          key={Imagem}
          imagem={place.image}
          title={place.title}
          nota={place.nota}
          description={place.description}
          destaque={place.destaque}
          tipo={place.tipo}
          to={place.to}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
