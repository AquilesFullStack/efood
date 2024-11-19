import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
  max-width: 472px;
  position: relative;
  margin-bottom: 48px;
  > img {
    width: 472px;
    height: 217px;
  }
`;

export const Titulo = styled.h3`
  font-size: 18px;
  display: flex;
  padding-top: 8px;
`;

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  padding-bottom: 16px;
`;

export const Nota = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  gap: 8px;

  p {
    padding-top: 8px;
  }
`;

export const Botao = styled.button`
  background-color: ${cores.laranja};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  color: ${cores.amarelo};
`;

export const Tnota = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Cards = styled.div`
  display: block;
  margin: -8px 0px;
  padding: 8px;
  border: 1px solid ${cores.laranja};
`;
