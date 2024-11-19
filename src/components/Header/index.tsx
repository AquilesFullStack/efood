import { Imagem, Titulo } from "./styles";

import headerImg from "../../assets/Vector.png";
import logo from "../../assets/logo.png";

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${headerImg})` }}>
    <img src={logo} alt="Logo" />
    <Titulo>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </Titulo>
  </Imagem>
);

export default Header;
