import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import Card from '../Card'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'
import { clear, openCheckoutOrder } from '../../store/reducers/carts'
import Button from '../Button'

const Checkout = () => {
  const [openedCheckout, setOpenedCheckout] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { cardapio, order } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const keepPayment = () => {
    setOpenedCheckout(false)
  }

  const backToAddress = () => {
    setOpenedCheckout(true)
  }

  const form = useFormik({
    initialValues: {
      Recipient: '',
      Address: '',
      City: '',
      CEP: '',
      Number: '',
      Complement: '',
      CardName: '',
      CardNumber: '',
      CVV: '',
      ExpiresMonth: '',
      ExpiresYear: ''
    },
    validationSchema: Yup.object({
      Recipient: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      Address: Yup.string()
        .min(5, 'O endereço precisa ter mais de 5 caracteres')
        .required('O campo é obrigatório'),
      City: Yup.string()
        .min(5, 'O campo deve ter mais de 5 caracteres')
        .required('O campo é obrigatório'),
      CEP: Yup.string()
        .min(6)
        .max(6, 'O CEP deve ter pelo menos 6 caracteres')
        .required('O campo é obrigatório'),
      Number: Yup.string()
        .min(10)
        .max(10, 'Número inválido')
        .required('O campo é obrigatório'),
      Complement: Yup.string().min(5),
      CardName: Yup.string().min(5).required('O campo é obrigatório'),
      CardNumber: Yup.string()
        .min(15)
        .max(15, 'O campo deve ter no mínimo 15 caracteres')
        .required('O campo é obrigatório'),
      CVV: Yup.string().min(2).max(2).required('O campo é obrigatório'),
      ExpiresMonth: Yup.string()
        .min(1)
        .max(1)
        .required('O campo é obrigatório'),
      ExpiresYear: Yup.string().min(3).max(3).required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.Recipient,
          address: {
            description: values.Complement,
            city: values.City,
            zipcode: values.CEP,
            number: values.Number,
            complement: values.Complement
          }
        },
        payment: {
          card: {
            name: values.CardName,
            number: values.CardNumber,
            code: values.CVV,
            expires: {
              month: Number(values.ExpiresMonth),
              year: Number(values.ExpiresYear)
            }
          }
        },
        products: cardapio.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const IsInvalid = fieldName in form.errors
    const hasError = isTouched && IsInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (cardapio.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <S.Conteudo className={order ? 'is-checkoutopen' : ''}>
      {isSuccess && data ? (
        <Card title={`Pedido realiado ${data?.orderId}`}>
          <>
            <div>
              <p className="margin-top">
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido
              </p>
              <p className="margin-top">
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras
              </p>
              <p className="margin-top">
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição
              </p>
              <p className="margin-top">
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <Button
                type="button"
                title="Clique para voltar à página principal"
                variant="primary"
              >
                Concluir
              </Button>
            </div>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {order ? (
            <>
              <Card title="Entregas">
                <>
                  <S.InputGroup>
                    <label htmlFor="Recipient">Quem irá receber</label>
                    <input
                      id="Recipient"
                      type="text"
                      name="Recipient"
                      value={form.values.Recipient}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('Recipient') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="Address">Endereço</label>
                    <input
                      id="Address"
                      type="text"
                      name="Address"
                      value={form.values.Address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('Address') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="City">Cidade</label>
                    <input
                      id="City"
                      type="text"
                      name="City"
                      value={form.values.City}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('City') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="CEP">CEP</label>
                    <input
                      id="CEP"
                      type="text"
                      name="CEP"
                      value={form.values.CEP}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('CEP') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="Number">Número</label>
                    <input
                      id="Number"
                      type="text"
                      name="Number"
                      value={form.values.Number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('Number') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="Complement">Complemento (opcional) </label>
                    <input
                      id="Complement"
                      type="text"
                      name="Complement"
                      value={form.values.Complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('Complement') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <Button
                    type="button"
                    title="Clique aqui para continuar com o pagamento"
                    variant="primary"
                    onClick={keepPayment}
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    type="button"
                    title="Clique aqui para voltar para o carrinho"
                  >
                    Voltar para o carrinho
                  </Button>
                </>
              </Card>
            </>
          ) : (
            <>
              <Card title="Pagamento - Valor a pagar R$12.00 ">
                <>
                  <S.InputGroup>
                    <label htmlFor="CardName">Nome do cartão</label>
                    <input
                      id="CardName"
                      type="text"
                      name="CardName"
                      value={form.values.CardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('CardName') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="CardNumber">Número do cartão</label>
                    <InputMask
                      id="CardNumber"
                      type="text"
                      name="CardNumber"
                      value={form.values.CardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('CardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="CVV">CVV</label>
                    <InputMask
                      id="CVV"
                      type="number"
                      name="CVV"
                      value={form.values.CVV}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('CVV') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="ExpiresMonth">Mês de vencimento</label>
                    <InputMask
                      id="ExpiresMonth"
                      type="number"
                      name="ExpiresMonth"
                      value={form.values.ExpiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('ExpiresMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="ExpiresYear">Ano de vencimento</label>
                    <InputMask
                      id="ExpiresYear"
                      type="number"
                      name="ExpiresMonth"
                      value={form.values.ExpiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('ExpiresMonth') ? 'error' : ''
                      }
                      mask="9999"
                    />
                  </S.InputGroup>
                </>
              </Card>
              <Button
                type="submit"
                title="Clique aqui para finalizar a compra"
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
              </Button>
              <button>Voltar para a edição de endereço</button>
            </>
          )}
        </form>
      )}
    </S.Conteudo>
  )
}

export default Checkout
