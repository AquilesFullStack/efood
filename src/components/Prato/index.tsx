import { useDispatch } from 'react-redux'
import { Card, Titulo, Descricao } from './styles'
import { add, open } from '../../store/reducers/carts'
import { CardapioItem } from '../../pages/Home'
import Button from '../Button'

type Props = {
  prato: CardapioItem
}

const Prato = ({ prato }: Props) => {
  const getDescricao = (descricao: string) => {
    if (!descricao) return ''
    return descricao.length > 120 ? descricao.slice(0, 100) + '...' : descricao
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  return (
    <>
      <Card>
        <div
          style={{
            backgroundImage: `url(${prato.foto})`,
            backgroundSize: 'cover',
            width: `304px`,
            height: `167px`
          }}
        ></div>
        <Titulo>{prato.nome}</Titulo>
        <Descricao>{getDescricao(prato.descricao ?? '')}</Descricao>
        <Button
          onClick={addToCart}
          type="button"
          title="Clique aqui para adicionar o produto ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Card>
    </>
  )
}

export default Prato
