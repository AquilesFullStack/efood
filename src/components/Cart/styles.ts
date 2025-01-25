import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/lixeira.png'

export const CartTab = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
`

export const PratoItem = styled.li`
  display: flex;
  padding: 8px;
  position: relative;
  background-color: ${cores.amarelo};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.laranja};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.laranja};
    font-weight: 100;
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 108px;
    right: 0;
  }
`
