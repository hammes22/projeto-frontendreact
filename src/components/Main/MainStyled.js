import styled from "styled-components";
import { cores } from "../../util/cores";

export const MainStyled = styled.main`
  max-width: 100vw;
  min-height: 70vh;
  background-color: ${cores.fundoCinza};
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;
