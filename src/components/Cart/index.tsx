import { CartTab, PratoItem, Sidebar } from './styles'
import foto from '../../assets/pizzaa.png'

export const Cart = () => {
  return (
    <CartTab>
      <Sidebar>
        <ul>
          <PratoItem>
            <img src={foto} alt="pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,50</span>
            </div>
            <button></button>
          </PratoItem>
        </ul>
        <div>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </div>
        <button>Continuar com a entrega</button>
      </Sidebar>
    </CartTab>
  )
}

export default Cart
