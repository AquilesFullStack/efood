import { CartTab, PratoItem, Prices, Sidebar, Button, Overlay } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/carts'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closedCart = () => {
    dispatch(close())
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.cardapio[0].preco)
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
          {items.map((item) => (
            <PratoItem key={item.id}>
              <img src={item.cardapio[0].foto} alt={item.cardapio[0].foto} />
              <div>
                <h3>{item.cardapio[0].foto}é </h3>
                <span>{item.cardapio[0].preco}</span>
              </div>
              <button
                onClick={() => removeItem(item.cardapio[0].id)}
                type="button"
              />
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
