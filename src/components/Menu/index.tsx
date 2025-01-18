import { useState } from 'react'
// import Poste from '../Poster'
import Prato from '../Prato'
import { List, Item } from './styles'
import {
  Descricao,
  Fechar,
  Poster,
  PosterContent,
  Titulo
} from '../Poster/styles'
import fechar from '../../assets/close.png'
import { Botao } from '../Restaurantes/styles'
import { cores } from '../../styles'

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
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <div className="container">
      <List>
        {place.map((item) => (
          <>
            <Item key={item.id} onClick={() => setModalEstaAberto(true)}>
              <Prato
                id={item.id}
                foto={item.foto}
                preco={item.preco}
                nome={item.nome}
                descricao={item.descricao}
                porcao={item.porcao}
              />
            </Item>
            <Poster className={modalEstaAberto ? 'visivel' : ''}>
              <PosterContent className="container">
                <Fechar>
                  <img src={fechar} alt="fechar" />
                </Fechar>
                <img src={item.foto} alt="Foto_do_Prato" />
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`
                  }}
                >
                  <header>
                    <Titulo>{item.nome}</Titulo>
                  </header>
                  <Descricao>{item.descricao}</Descricao>
                  <Descricao>Serve: {item.porcao}</Descricao>
                  <Botao
                    style={{
                      width: `208px`,
                      color: `${cores.laranja}`,
                      fontWeight: `Bold`,
                      fontSize: `13px`,
                      padding: `4px 4px`
                    }}
                  >
                    Adicionar ao Carrinho - R${item.preco.toFixed(2)}
                  </Botao>
                </div>
              </PosterContent>
              <div className="overlay"></div>
            </Poster>
          </>
        ))}
      </List>
    </div>
  )
}
export default MenuList
