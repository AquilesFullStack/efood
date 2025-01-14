import { useEffect, useState } from 'react'
import { Imagem, Culinaria, Nome } from './styles'
import { Place } from '../../pages/Home'
import { useParams } from 'react-router-dom'

const Banner = () => {
  const { id } = useParams()

  const [menu, setMenu] = useState<Place>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])

  return (
    <div>
      <Imagem style={{ backgroundImage: `url(${menu?.capa})` }}>
        <div className="container">
          <Culinaria>{menu?.tipo}</Culinaria>
          <Nome>{menu?.titulo}</Nome>
        </div>
      </Imagem>
    </div>
  )
}

export default Banner
