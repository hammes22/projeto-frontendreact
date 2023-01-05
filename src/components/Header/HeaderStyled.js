import styled from "styled-components";
import { cores } from "../../util/cores";
export const HeaderStyled = styled.header`
  background-color: ${cores.header};
  max-width: 100vw;
  min-height: 15vh;
  color: white;
  border-bottom: 6px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky; /* Necessário para funcionar no Safari */
  position: sticky;
  z-index: 100;
  top: 0;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }
`;

export const ItemFiltro = styled.section`
  width: 70%;
`;
export const ItemCarrinho = styled.section`
  width: 30%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;


export const HeaderStyledCarrinho = styled.header`
  background-color: ${cores.header};
  max-width: 100vw;
  min-height: 15vh;
  color: white;
  border-bottom: 6px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: -webkit-sticky; /* Necessário para funcionar no Safari */
  position: sticky;
  z-index: 100;
  top: 0;
`;