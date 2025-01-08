import { Card, Titulo, Descricao, Botao } from './styles'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Prato = ({ foto, preco, id, nome, descricao, porcao }: Props) => {
  return (
    <Card>
      <img className="foto" src={foto} alt={nome} />
      <Titulo>{nome}</Titulo>
      <Descricao>{descricao}</Descricao>
      <Botao>Adicionar ao carrinho </Botao>
    </Card>
  )
}

export default Prato
