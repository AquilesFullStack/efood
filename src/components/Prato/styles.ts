import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 320px;
  position: relative;
  margin-bottom: 32px;
  > img {
    width: 304px;
    height: 167px;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  display: flex;
  padding-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  padding-bottom: 8px;
`

export const Botao = styled.button`
  background-color: ${cores.amarelo}
  width: 304px;
  height: 24px;
  border: none;
  margin-bottom: 8px;
`
