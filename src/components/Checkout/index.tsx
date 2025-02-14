import Card from '../Card'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Checkout = () => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  return (
    <div className="container">
      <Card title="Pedido realizado - ORDER_ID">
        <>
          <div>
            <p className="margin-top">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido
            </p>
            <p className="margin-top">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras
            </p>
            <p className="margin-top">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição
            </p>
            <p className="margin-top">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <button>Concluir</button>
          </div>
        </>
      </Card>
      <form>
        <Card title="Entregas">
          <>
            <S.InputGroup>
              <label htmlFor="Recipient">Quem irá receber</label>
              <input id="Recipient" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="Address">Endereço</label>
              <input id="Address" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="City">Cidade</label>
              <input id="City" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="CEP">CEP</label>
              <input id="CEP" type="number" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="Number">Número</label>
              <input id="Number" type="number" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="Complement">Complemento (opcional) </label>
              <input id="Complement" type="text" />
            </S.InputGroup>
            <button>Continuar com o pagamento</button>
            <button>Voltar para o carrinho</button>
          </>
        </Card>
        <Card title="Pagamento - Valor a pagar R$12.00 ">
          <>
            <S.InputGroup>
              <label htmlFor="CardName">Nome do cartão</label>
              <input id="CardName" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="CardNumber">Número do cartão</label>
              <input id="CardNumber" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="CVV">CVV</label>
              <input id="CVV" type="number" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="ExpiresMonth">Mês de vencimento</label>
              <input id="ExpiresMonth" type="number" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="ExpiresYear">Ano de vencimento</label>
              <input id="ExpiresYear" type="number" />
            </S.InputGroup>
            <button>Finalizar pagamento</button>
            <button>Voltar para a edição de endereço</button>
          </>
        </Card>
      </form>
    </div>
  )
}

export default Checkout
