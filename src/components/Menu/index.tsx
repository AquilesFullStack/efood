import { useState } from 'react'
import Prato from '../Prato'
import {
  List,
  Item,
  Descricao,
  Fechar,
  Poster,
  PosterContent,
  Titulo
} from './styles'
import fechar from '../../assets/close.png'
import { Botao } from '../Restaurantes/styles'
import { cores } from '../../styles'
import { Place } from '../../pages/Home'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  menu: CardapioItem[]
}

const MenuList = ({ menu }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalItem, setModalItem] = useState<CardapioItem | null>(null)

  const abrirModal = (item: CardapioItem) => {
    setModalItem(item)
    setModalEstaAberto(true)
  }

  const fecharModal = () => {
    setModalEstaAberto(false)
    setModalItem(null)
  }

  return (
    <>
      <List className="container">
        {menu.map((item) => (
          <Item key={item.id} onClick={() => abrirModal(item)}>
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
      {modalEstaAberto && modalItem && (
        <Poster className="visivel">
          <PosterContent className="container">
            <Fechar>
              <img src={fechar} alt="fechar" onClick={fecharModal} />
            </Fechar>
            <img
              src={modalItem.foto}
              alt={`Foto do prato: ${modalItem.nome}`}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <header>
                <Titulo>{modalItem.nome}</Titulo>
              </header>
              <Descricao>{modalItem.descricao}</Descricao>
              <Descricao>Serve: {modalItem.descricao}</Descricao>
              <Botao
                style={{
                  width: '208px',
                  background: cores.branco,
                  color: cores.laranja,
                  fontWeight: 'bold',
                  fontSize: '13px',
                  padding: '4px 4px'
                }}
              >
                Adicionar ao Carrinho - R$ {modalItem.preco.toFixed(2)}
              </Botao>
            </div>
          </PosterContent>
          <div className="overlay" onClick={fecharModal}></div>
        </Poster>
      )}
    </>
  )
}
export default MenuList
