import { Imagem, Culinaria, Nome } from './styles'

interface BannerProps {
  imageUrl: string
  culinaria: string
  nome: string
}

const Banner: React.FC<BannerProps> = ({ imageUrl, culinaria, nome }) => (
  <Imagem
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`
    }}
  >
    <div className="container">
      <Culinaria>{culinaria}</Culinaria>
    </div>
    <div className="container">
      <Nome>{nome}</Nome>
    </div>
  </Imagem>
)

export default Banner
