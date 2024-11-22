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
  imagem: string
  title: string
  nota: string
  description: string
  destaque: string[]
  tipo: string[]
  to?: string
}

const Restaurant = ({
  title,
  imagem,
  nota,
  description,
  destaque,
  tipo,
  to
}: Props) => (
  <Card>
    <img className="foto" src={imagem} alt="title" />
    <Cards>
      <Tnota>
        <Titulo>{title}</Titulo>
        <Nota>
          <p>{nota}</p>
          <img src={estrela} alt="fav icon" />
        </Nota>
      </Tnota>
      <Descricao>{description}</Descricao>
      <Tags>
        <Tag>{destaque}</Tag>
        <Tag>{tipo}</Tag>
      </Tags>
      <Button type="link" title={title} to={to}>
        Saiba Mais
      </Button>
    </Cards>
  </Card>
)

export default Restaurant
