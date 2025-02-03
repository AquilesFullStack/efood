import { useState } from 'react'
import Prato from '../Prato'
import { List, Item } from './styles'
import { CardapioItem } from '../../pages/Home'
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
}

const MenuList = ({ menu }: Props) => {
  const [modal, setModal] = useState<{
    isVisible: boolean
    menu?: CardapioItem
  }>({
    isVisible: false
  })

  const abrirModal = (menu: CardapioItem) => {
    setModal({
      isVisible: true,
      menu
    })
  }

  const fecharModal = () => {
    setModal({
      isVisible: false
    })
  }
  const dispatch = useDispatch()

  const addToCart = () => {
    if (modal.menu) {
      dispatch(add(modal.menu))
      dispatch(open())
    }
  }

  return (
    <>
      <List className="container">
        {menu.map((cardapio) => (
          <Item key={cardapio.id} onClick={() => abrirModal(cardapio)}>
            <Prato prato={cardapio} />
          </Item>
        ))}
      </List>
      {modal.isVisible && modal.menu && (
        <Poster className="is-open">
          <PosterContent>
            <Fechar onClick={fecharModal}>
              <img src={fechar} alt="Fechar" />
            </Fechar>
            <img src={modal.menu.foto} alt={modal.menu.nome} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <header>
                <Titulo>{modal.menu.nome}</Titulo>
              </header>
              <Descricao>{modal.menu.descricao}</Descricao>
              <Descricao>Serve: {modal.menu.porcao}</Descricao>
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
                Adicionar ao Carrinho - R${modal.menu.preco}
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
