import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0px;
  margin-bottom: 80px;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Culinaria = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
  text-transform: capitalize;
`

export const Nome = styled.h1`
  font-size: 48px;
  font-weight: 900;
  color: ${cores.branco};
`
