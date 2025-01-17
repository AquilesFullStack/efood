import { useState } from 'react'
import Poste from '../Poster'
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

const MenuList = ({ place }: Props) => {
  const [abreMenu, SetPrato] = useState<number | null>(null)

  const CliquePrato = (id: number) => {
    SetPrato((prevId) => (prevId === id ? null : id))
  }

  return (
    <div className="container">
      <List>
        {place.map((item) => (
          <div key={item.id}>
            <Item onClick={() => CliquePrato(item.id)}>
              <Prato
                id={item.id}
                foto={item.foto}
                preco={item.preco}
                nome={item.nome}
                descricao={item.descricao}
                porcao={item.porcao}
              />
            </Item>
            {abreMenu === item.id && (
              <Poste
                foto={item.foto}
                preco={item.preco}
                id={item.id}
                nome={item.nome}
                descricao={item.descricao}
                porcao={item.porcao}
              />
            )}
          </div>
        ))}
      </List>
    </div>
  )
}

export default MenuList
