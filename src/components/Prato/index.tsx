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
  const getDescricao = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 100) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img className="foto" src={foto} alt={nome} />
      <Titulo>{nome}</Titulo>
      <Descricao>{getDescricao(descricao)}</Descricao>
      <Botao>Adicionar ao carrinho </Botao>
    </Card>
  )
}

export default Prato
