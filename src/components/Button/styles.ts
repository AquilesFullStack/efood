import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${cores.laranja};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  color: ${cores.amarelo};
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.laranja};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.amarelo};
  text-decoration: none;
`
