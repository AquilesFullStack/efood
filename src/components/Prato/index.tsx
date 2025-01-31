import { Card, Titulo, Descricao, Botao } from './styles'

type Props = {
  foto: string
  nome: string
  descricao?: string
}

const Prato = ({ foto, nome, descricao }: Props) => {
  const getDescricao = (descricao: string) => {
    if (!descricao) return ''
    return descricao.length > 120 ? descricao.slice(0, 100) + '...' : descricao
  }

  return (
    <Card>
      <div
        style={{
          backgroundImage: `url(${foto})`,
          backgroundSize: 'cover',
          width: `304px`,
          height: `167px`
        }}
      ></div>
      <Titulo>{nome}</Titulo>
      <Descricao>{getDescricao(descricao ?? '')}</Descricao>
      <Botao>Adicionar ao carrinho </Botao>
    </Card>
  )
}

export default Prato
