import { useState } from 'react'
// import Poste from '../Poster'
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
  const [modalItem, setModalItem] = useState<Cardapio | null>(null)

  const abrirModal = (item: Cardapio) => {
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
        {place.map((item) => (
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
              <Descricao>Serve: {modalItem.porcao}</Descricao>
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
