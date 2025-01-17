import { Botao } from '../Prato/styles'
import { Descricao, Imagem, Poster, Titulo } from './styles'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Poste = ({ foto, preco, id, nome, descricao, porcao }: Props) => {
  return (
    <div className="container">
      <Poster>
        <Imagem
          style={{
            backgroundImage: `url(${foto})`,
            backgroundSize: 'cover',
            width: `280px`,
            height: `280px`
          }}
        ></Imagem>
        <div>
          <Titulo>{nome}</Titulo>
          <Descricao>{descricao}</Descricao>
          <Descricao>{porcao}</Descricao>
          <Botao>Adicionar ao carrinho - R${preco}</Botao>
        </div>
      </Poster>
    </div>
  )
}

export default Poste
