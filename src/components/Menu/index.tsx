import { useState } from 'react'
import Prato from '../Prato'
import { List, Item } from './styles'
import { CardapioItem, Place } from '../../pages/Home'
import fechar from '../../assets/close.png'
import {
  Descricao,
  Poster,
  Titulo,
  PosterContent,
  Fechar
} from '../Poster/styles'
import { Botao } from '../Prato/styles'
import { cores } from '../../styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/carts'

export type Props = {
  menu: CardapioItem[]
  prato: CardapioItem
}

const MenuList = ({ menu, prato }: Props) => {
  const [modal, setModal] = useState<{
    isVisible: boolean
    prato?: CardapioItem
  }>({
    isVisible: false
  })

  const abrirModal = (prato: CardapioItem) => {
    setModal({
      isVisible: true,
      prato
    })
  }

  const fecharModal = () => {
    setModal({
      isVisible: false
    })
  }
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add())
    dispatch(open())
  }

  return (
    <>
      <List className="container">
        {menu.map((cardapio) => (
          <Item key={cardapio.id} onClick={() => abrirModal(cardapio)}>
            <Prato
              foto={cardapio.foto}
              nome={cardapio.nome}
              descricao={cardapio.descricao}
            />
          </Item>
        ))}
      </List>
      {modal.isVisible && modal.prato && (
        <Poster className="is-open">
          <PosterContent>
            <Fechar onClick={fecharModal}>
              <img src={fechar} alt="Fechar" />
            </Fechar>
            <img src={modal.prato.foto} alt={modal.prato.nome} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <header>
                <Titulo>{modal.prato.nome}</Titulo>
              </header>
              <Descricao>{modal.prato.descricao}</Descricao>
              <Descricao>Serve: {modal.prato.porcao}</Descricao>
              <Botao
                style={{
                  width: '208px',
                  color: `${cores.laranja}`,
                  fontWeight: 'Bold',
                  fontSize: '13px',
                  padding: '4px 4px'
                }}
                onClick={addToCart}
              >
                Adicionar ao Carrinho - R${modal.prato.preco}
              </Botao>
            </div>
          </PosterContent>
          <div onClick={fecharModal} className="overlay"></div>
        </Poster>
      )}
    </>
  )
}

export default MenuList
