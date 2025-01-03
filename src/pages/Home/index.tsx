import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import japa from '../../assets/japa.png'
import macarrao from '../../assets/macarrão.png'
import arabe from '../../assets/arabe.jpeg'
import portgues from '../../assets/portugues.jpeg'
import pizzaria from '../../assets/pizzaria.png'
import vegano from '../../assets/vegano.png'
import Places from '../../Modules/places'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

export type Place = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

// const restaurantes: Places[] = [
//   {
//     id: 1,
//     image: japa,
//     title: 'Hioki Sushi',
//     nota: '4,9',
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//     destaque: ['Destaque da semana'],
//     tipo: ['Japonesa'],
//     to: '/japonesa'
//   },
//   {
//     id: 2,
//     image: macarrao,
//     title: 'La Dolce Vita Trattoria',
//     nota: '4,6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     destaque: [],
//     tipo: ['Italiana'],
//     to: '/japonesa'
//   },
//   {
//     id: 3,
//     image: arabe,
//     title: 'Casa das Delícias Árabes',
//     nota: '4,8',
//     description:
//       'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera convidativa e confortável.',
//     destaque: [],
//     tipo: ['árabe'],
//     to: '/japonesa'
//   },
//   {
//     id: 4,
//     image: portgues,
//     title: 'Cantinho Lusitano',
//     nota: '4,8',
//     description:
//       'O Cantinho Lusitano é um charmoso e tradicional restaurante português, que celebra a rica herança culinária de Portugal. Neste aconchegante espaço, os visitantes podem desfrutar dos autênticos sabores portugueses, preparados com ingredientes frescos e de alta qualidade, respeitando as receitas clássicas.',
//     destaque: [],
//     tipo: ['português'],
//     to: '/japonesa'
//   },
//   {
//     id: 5,
//     image: pizzaria,
//     title: 'Cantinho Lusitano',
//     nota: '4,7',
//     description:
//       'A Piazza del Forno é uma pizzaria acolhedora e autêntica que se orgulha de suas raízes italianas. Aqui, você encontrará pizzas artesanais preparadas com ingredientes frescos e assadas em forno a lenha, proporcionando sabores inigualáveis e uma crosta crocante e deliciosa.',
//     destaque: [],
//     tipo: ['pizzaria'],
//     to: '/japonesa'
//   },
//   {
//     id: 6,
//     image: vegano,
//     title: 'Jardim da Terra',
//     nota: '4,8',
//     description:
//       'O Jardim da Terra é um restaurante vegano que se dedica a oferecer pratos deliciosos e criativos, utilizando apenas ingredientes frescos, orgânicos e sazonais. Nosso cardápio é cuidadosamente elaborado para proporcionar uma experiência culinária única.',
//     destaque: [],
//     tipo: ['vegano'],
//     to: '/japonesa'
//   }
// ]

const Home = () => {
  const [locais, setLocais] = useState<Place[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setLocais(res))
  }, [])
  return (
    <>
      <Header />
      <RestaurantList place={locais} />
      <Footer />
    </>
  )
}

export default Home
