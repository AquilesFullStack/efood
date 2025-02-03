import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/lixeira2.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartTab = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
`

export const Prices = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.amarelo};
  margin: 40px 0 16px 0;
  display: flex;
  justify-content: space-between;
`

export const PratoItem = styled.li`
  display: flex;
  padding: 8px;
  position: relative;
  background-color: ${cores.amarelo};
  margin-bottom: 16px;

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
    background-size: cover;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Button = styled.button`
  background-color: ${cores.amarelo};
  width: 328px;
  padding: 4px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: ${cores.laranja};
`
