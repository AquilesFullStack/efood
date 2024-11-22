import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 320px;
  position: relative;
  margin-bottom: 32px;
  background-color: ${cores.laranja} > img {
    width: 304px;
    height: 167px;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  display: block;
  padding-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  padding-bottom: 16px;
`

export const Botao = styled.button`
  background-color: ${cores.amarelo};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  color: ${cores.laranja};
`
