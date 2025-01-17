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
import styled from 'styled-components'

type Props = {
  capa: string
  titulo: string
  avaliacao: number
  descricao: string
  destacado: boolean
  tipo: string
  id: number
}

const DestaqueTag = styled(Tag)<{ destacado: boolean }>`
  display: ${(props) => (props.destacado ? 'inline-block' : 'none')};
`

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
          <DestaqueTag destacado={destacado}>
            {destacado ? 'Destaques da semana' : ''}
          </DestaqueTag>
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
