import { Card, Titulo, Descricao, Nota, Tnota, Botao, Cards } from "./styles";
import estrela from "../../assets/estrela.png";
import Button from "../Button";

type Props = {
  imagem: string;
  title: string;
  nota: string;
  description: string;
};

const Restaurant = ({ title, imagem, nota, description }: Props) => (
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
      <Button type="link" title={title} to="/">
        Saiba Mais
      </Button>
    </Cards>
  </Card>
);

export default Restaurant;
