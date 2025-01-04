import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 40px 0px;
  margin-bottom: 80px;

  > .container {
    justify-content: space-between;
  }
`

export const Culinaria = styled.h2`
  font-size: 32px;
  font-weight: thin;
  color: ${cores.branco};
`

export const Nome = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branco};
`
