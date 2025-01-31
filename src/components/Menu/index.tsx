import Prato from '../Prato'
import { List, Item, Poster, PosterContent, Fechar, Overlay } from './styles'
import { Botao } from '../Restaurantes/styles'
import { cores } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { aberto, fechado } from '../../store/reducers/poster'
import { CardapioItem } from '../../pages/Home'
import fechar from '../../assets/close.png'

export type Props = {
  menu: CardapioItem[]
}

const MenuItem = ({ item }: { item: CardapioItem }) => {
  const { isOpen } = useSelector((state: RootReducer) => state.post)
  const dispatch = useDispatch()

  const fecharPost = () => dispatch(fechado())
  const abrirPost = (itemId: number) => dispatch(aberto(itemId))

  return (
    <Item key={item.id} onClick={() => abrirPost(item.id)}>
      <Prato foto={item.foto} nome={item.nome} descricao={item.descricao} />
      <Poster className={isOpen ? 'is-open' : ''}>
        <PosterContent className="container">
          <Fechar onClick={fecharPost}>
            <img src={fechar} alt="Fechar detalhe do prato" />
          </Fechar>
          <img src={item.foto} alt={`Foto do prato: ${item.nome}`} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <header>
              <h3>{item.nome}</h3>
            </header>
            <p>{item.descricao}</p>
            <p>Serve: {item.porcao}</p>
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
              Adicionar ao Carrinho - R$ {item.preco}
            </Botao>
          </div>
        </PosterContent>
        <Overlay onClick={fecharPost} />
      </Poster>
    </Item>
  )
}

const MenuList = ({ menu }: Props) => {
  return (
    <List className="container">
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </List>
  )
}

export default MenuList
