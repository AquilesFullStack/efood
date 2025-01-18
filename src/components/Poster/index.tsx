import { Cardapio } from '../../pages/Menu'
import { Botao } from '../Prato/styles'
import { Descricao, Poster, Titulo, PosterContent, Fechar } from './styles'
import fechar from '../../assets/close.png'
import { cores } from '../../styles'
import { useState } from 'react'

type Props = {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Poste = ({ foto, preco, nome, descricao, porcao }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <>
      <Poster className={modalEstaAberto ? 'visivel' : ''}>
        <PosterContent className="container">
          <Fechar>
            <img src={fechar} alt="fechar" />
          </Fechar>
          <img src={foto} alt="Foto_do_Prato" />
          <div
            style={{
              display: `flex`,
              flexDirection: `column`
            }}
          >
            <header>
              <Titulo>{nome}</Titulo>
            </header>
            <Descricao>{descricao}</Descricao>
            <Descricao>Serve: {porcao}</Descricao>
            <Botao
              style={{
                width: `208px`,
                color: `${cores.laranja}`,
                fontWeight: `Bold`,
                fontSize: `13px`,
                padding: `4px 4px`
              }}
            >
              Adicionar ao Carrinho - R${preco.toFixed(2)}
            </Botao>
          </div>
        </PosterContent>
        <div className="overlay"></div>
      </Poster>
    </>
  )
}

export default Poste
