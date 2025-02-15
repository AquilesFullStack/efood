import { CartTab, PratoItem, Prices, Sidebar, Overlay } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, openCheckoutOrder } from '../../store/reducers/carts'
import Button from '../Button'
import { parseToBrl, getTotalPrice } from '../Utils'
import Checkout from '../Checkout'

export const Cart = () => {
  const { isOpen, cardapio } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closedCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const openCheckout = () => {
    dispatch(openCheckoutOrder())
  }

  return (
    <CartTab className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closedCart} />
      <Sidebar>
        {cardapio.length > 0 ? (
          <>
            <ul>
              {cardapio.map((item) => (
                <PratoItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parseToBrl(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </PratoItem>
              ))}
            </ul>
            <Prices>
              Valor total:{''}
              <span>{parseToBrl(getTotalPrice(cardapio))}</span>
            </Prices>
            <Button
              type="button"
              title="Clique aqui para continuar com a compra"
              variant="primary"
              onClick={openCheckout}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            a compra
          </p>
        )}
        <Checkout />
      </Sidebar>
    </CartTab>
  )
}

export default Cart
