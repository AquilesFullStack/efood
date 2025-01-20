import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 32px;
`

export const Item = styled.li`
  list-style: none;
`

export const Poster = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const PosterContent = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  max-width: 1024px;
  background-color: ${cores.laranja};
  padding: 32px;
  header {
    display: flex;
    justify-content: space-between;
  }

  > img {
    display: flex;
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branco};
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  width: 656px;
  color: ${cores.branco};
  line-height: 22px;
  margin: 16px 0;
`

export const Fechar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    height: 16px;
    width: 16px;
  }
`
