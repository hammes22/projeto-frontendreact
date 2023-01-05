import styled from "styled-components";
import { cores } from "../../util/cores";
export const FooterStyled = styled.footer`
  background-color: ${cores.footer};
  color: ${cores.branco};
  max-width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  a:hover{  
    color: ${cores.verde};
  }
  a {
    text-decoration: none;
    color: ${cores.branco};
  }
`;
