import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  margin-bottom: 80px;
`;

export const Titulo = styled.h1`
  text-align: center;
  font-size: 36px;
  max-width: 100%;
  color: ${cores.laranja};
  font-weight: 900;
`;
