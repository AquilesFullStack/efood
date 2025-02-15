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
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/carts'
import Button from '../Button'
import { useState } from 'react'
import { parseToBrl } from '../Utils'

type Props = {
  menu: CardapioItem[]
}

const MenuList = ({ menu }: Props) => {
  const [modalItem, setModalItem] = useState<CardapioItem | null>(null)

  const dispatch = useDispatch()

  const addToCart = (menu: CardapioItem) => {
    dispatch(add(menu))
    dispatch(open())
  }

  const closeModal = () => {
    setModalItem(null)
  }

  const openModal = (cardapio: CardapioItem) => {
    setModalItem(cardapio)
  }

  return (
    <>
      <List className="container">
        {menu.map((cardapio) => (
          <Item key={cardapio.id} onClick={() => openModal(cardapio)}>
            <Prato prato={cardapio} />
          </Item>
        ))}
      </List>
      {modalItem && (
        <Poster className="is-open">
          <PosterContent>
            <Fechar onClick={closeModal}>
              <img src={fechar} alt="Fechar" />
            </Fechar>
            <img src={modalItem.foto} alt={modalItem.descricao} />
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
              <Button
                variant="primary"
                type="button"
                title="Clique aqui para adicionar o produto ao carrinho"
                onClick={() => addToCart(modalItem)}
              >
                {`Adicionar ao Carrinho - R$${modalItem.preco}`}
              </Button>
            </div>
          </PosterContent>
          <div onClick={closeModal} className="overlay"></div>
        </Poster>
      )}
    </>
  )
}

export default MenuList
