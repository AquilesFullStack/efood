import { CartTab, PratoItem, Prices, Sidebar, Button, Overlay } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/carts'

export const Cart = () => {
  const { isOpen, cardapio } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closedCart = () => {
    dispatch(close())
  }
  const getTotalPrice = () => {
    return cardapio.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartTab className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closedCart} />
      <Sidebar>
        <ul>
          {cardapio.map((item) => (
            <PratoItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}é </h3>
                <span>{item.preco}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </PratoItem>
          ))}
        </ul>
        <Prices>
          Valor total
          <span>{getTotalPrice()}</span>
        </Prices>
        <Button>Continuar com a entrega </Button>
      </Sidebar>
    </CartTab>
  )
}

export default Cart
