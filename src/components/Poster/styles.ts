import styled from 'styled-components'
import { cores } from '../../styles'

export const Poster = styled.div`
  display: flex;
  position: absolute;
  top: 490px;
  left: 171px;
  width: 1024px;
  height: 344px;
  background-color: ${cores.laranja};
  padding: 32px;
  z-index: 1;
`

export const Imagem = styled.div``

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branco};
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  width: 656px;
  color: ${cores.branco};
`
