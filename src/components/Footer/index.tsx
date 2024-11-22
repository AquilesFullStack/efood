import rodape from '../../assets/footer.png'
import logo from '../../assets/logo.png'
import { Rede, Rodape, Desc } from './styles'
import instagram from '../../assets/instagram.png'
import face from '../../assets/face.png'
import tt from '../../assets/twitter.png'

const Footer = () => (
  <Rodape style={{ backgroundImage: `url(${rodape})` }}>
    <a href="/">
      <img src={logo} alt="Logo" />
    </a>
    <Rede>
      <img src={instagram} alt="insta" />
      <img src={face} alt="face" />
      <img src={tt} alt="twitter" />
    </Rede>
    <Desc>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Desc>
  </Rodape>
)

export default Footer
