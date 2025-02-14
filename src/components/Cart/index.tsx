import { CartTab, PratoItem, Prices, Sidebar, Button, Overlay } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/carts'
import { cores } from '../../styles'
import Checkout from '../Checkout'

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
        {cardapio.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              fontSize: '16px',
              color: `${cores.amarelo}`
            }}
          >
            O carrinho está vazio, adicione algum item.
          </p>
        ) : (
          <>
            <ul>
              {cardapio.map((item) => (
                <PratoItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>R$ {item.preco.toFixed(2)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </PratoItem>
              ))}
            </ul>
            {cardapio.length > 0 && (
              <>
                <Prices>
                  Valor total: <span>R$ {getTotalPrice().toFixed(2)}</span>
                </Prices>
                <Button>Continuar com a entrega</Button>
              </>
            )}
            <Checkout />
          </>
        )}
      </Sidebar>
    </CartTab>
  )
}

export default Cart
