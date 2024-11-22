import { Card } from './styles'

type Props = {
  imagem: string
  title: string
  description: string
}
const Menu = ({ title, imagem, description }: Props) => (
  <Card>
    <img src={imagem} alt={title} />
  </Card>
)

export default Menu
