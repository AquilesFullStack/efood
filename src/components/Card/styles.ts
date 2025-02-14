import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: transparent;
  padding: 0 9px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    color: ${cores.amarelo};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
    line-height: 22px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${cores.amarelo};
  }
`
