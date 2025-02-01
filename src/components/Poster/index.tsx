// import { Botao } from '../Prato/styles'
// import { Descricao, Poster, Titulo, PosterContent, Fechar } from './styles'
// import fechar from '../../assets/close.png'
// import { cores } from '../../styles'
// import { CardapioItem } from '../../pages/Home'
// import { useDispatch, useSelector } from 'react-redux'
// import { RootReducer } from '../../store'
// import { fechado } from '../../store/reducers/poster'

// type Props = {
//   itens: CardapioItem[]
// }

// const Poste = ({ itens }: Props) => {
//   const { isOpen } = useSelector((state: RootReducer) => state.post)
//   const dispatch = useDispatch()

//   const fecharPost = () => dispatch(fechado())
//   return (
//     <>
//       <Poster>
//         {itens.map((cardapio) => (
//           <>
//             <PosterContent
//               key={cardapio.id}
//               className={isOpen ? 'is-open' : ''}
//             >
//               <Fechar onClick={fecharPost}>
//                 <img src={fechar} alt="fechar" />
//               </Fechar>
//               <img src={cardapio.foto} alt="Foto_do_Prato" />
//               <div
//                 style={{
//                   display: `flex`,
//                   flexDirection: `column`
//                 }}
//               >
//                 <header>
//                   <Titulo>{cardapio.nome}</Titulo>
//                 </header>
//                 <Descricao>{cardapio.descricao}</Descricao>
//                 <Descricao>Serve: {cardapio.porcao}</Descricao>
//                 <Botao
//                   style={{
//                     width: `208px`,
//                     color: `${cores.laranja}`,
//                     fontWeight: `Bold`,
//                     fontSize: `13px`,
//                     padding: `4px 4px`
//                   }}
//                 >
//                   Adicionar ao Carrinho - R${cardapio.preco.toFixed(2)}
//                 </Botao>
//               </div>
//             </PosterContent>
//             <div onClick={fecharPost} className="overlay"></div>
//           </>
//         ))}
//       </Poster>
//     </>
//   )
// }

// export default Poste

export default {}
