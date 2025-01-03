import { useEffect, useState } from 'react'
import { Imagem, Culinaria, Nome } from './styles'
import { Place } from '../../pages/Home'

const Banner = () => {
  const [menu, setMenu] = useState<Place>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [])

  return (
    <Imagem style={{ backgroundImage: `url(${menu?.cardapio.foto})` }}>
      <div className="container">
        <Culinaria>{menu?.cardapio.nome}</Culinaria>
        <Nome>{menu?.cardapio.nome}</Nome>
      </div>
    </Imagem>
  )
}

export default Banner
