import {
  Card,
  Titulo,
  Descricao,
  Nota,
  Tnota,
  Tag,
  Cards,
  Tags
} from './styles'
import estrela from '../../assets/estrela.png'
import { ButtonLink } from '../Button/styles'

type Props = {
  capa: string
  titulo: string
  avaliacao: number
  descricao: string
  destacado: boolean
  tipo: string
  id: number
}

const Restaurant = ({
  titulo,
  capa,
  avaliacao,
  descricao,
  destacado,
  tipo,
  id
}: Props) => {
  return (
    <Card>
      <img className="foto" src={capa} alt={titulo} />
      <Cards>
        <Tnota>
          <Titulo>{titulo}</Titulo>
          <Nota>
            <p>{avaliacao}</p>
            <img src={estrela} alt="Ícone de avaliação" />
          </Nota>
        </Tnota>
        <Descricao>{descricao}</Descricao>
        <Tags>
          <Tag>{destacado}</Tag>
          <Tag>{tipo}</Tag>
        </Tags>
        <ButtonLink to={`/menu/${id}`} type="link" title={`Ver ${titulo}`}>
          Saiba Mais
        </ButtonLink>
      </Cards>
    </Card>
  )
}

export default Restaurant
