import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagine = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-size: cover;

  a {
    text-decoration: none;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Titulo = styled.h1`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.laranja};
  margin: 5px 0;
  cursor: pointer;
`
