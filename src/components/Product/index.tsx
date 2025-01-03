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
import Button from '../Button'

type Props = {
  capa: string
  titulo: string
  avaliacao: number
  descricao: string
  destacado: Boolean
  tipo: string
}

const Restaurant = ({
  titulo,
  capa,
  avaliacao,
  descricao,
  destacado,
  tipo
}: Props) => (
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
        {/* <Tag>{destacado}</Tag> */}
        <Tag>{tipo}</Tag>
      </Tags>
      <Button type="link" title={`Ver ${titulo}`}>
        Saiba Mais
      </Button>
    </Cards>
  </Card>
)

export default Restaurant
