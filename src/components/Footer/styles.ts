import styled from 'styled-components'
import { cores } from '../../styles'

export const Rodape = styled.footer`
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  color: ${cores.laranja};
  margin-top: 120px;
`

export const Rede = styled.div`
  width: 88px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`

export const Desc = styled.p`
  max-width: 480px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 10px;
  line-height: 22px;
  text-align: center;
`
