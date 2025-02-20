import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    color: ${cores.amarelo};

    &.error {
      border: 1px solid red;
    }
  }

  input {
    background-color: ${cores.amarelo};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`

export const Conteudo = styled.div`
  display: none;

  &.is-checkoutopen {
    display: flex;
  }

  .entregas {
    display: flex;
  }
`
