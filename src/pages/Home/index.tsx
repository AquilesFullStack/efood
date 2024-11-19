import Header from "../../components/Header";
import RestaurantList from "../../components/RestaurantList";

import japa from "../../assets/japa.png";
import macarrao from "../../assets/macarrão.png";
import Places from "../../Modules/places";
import Footer from "../../components/Footer";

const restaurantes: Places[] = [
  {
    id: 1,
    image: japa,
    title: "Hioki Sushi",
    nota: "4,9",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    to: "/Japonesa",
  },
  { 
    id: 2,
    image: macarrao,
    title: "La Dolce Vita Trattoria",
    nota: "4,6",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    to: "/italiana",
  },
  {
    id: 3,
    image: macarrao,
    title: "La Dolce Vita Trattoria",
    nota: "4,6",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    to: "/Pizzaria",
  },
  {
    id: 4,
    image: macarrao,
    title: "La Dolce Vita Trattoria",
    nota: "4,6",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    to: "/portugues",
  },
  {
    id: 5,
    image: macarrao,
    title: "La Dolce Vita Trattoria",
    nota: "4,6",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      to: "/Arabe",
  },
  {
    id: 6,
    image: macarrao,
    title: "La Dolce Vita Trattoria",
    nota: "4,6",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    to: "/Vegano",
  },
];

const Home = () => (
  <>
    <Header />
    <RestaurantList place={restaurantes} />
    <Footer />
  </>
);

export default Home;
