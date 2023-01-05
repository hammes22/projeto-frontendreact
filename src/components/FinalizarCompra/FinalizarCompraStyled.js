import styled from "styled-components";
import { cores } from "../../util/cores";
export const FinalizarCompraContainer = styled.section`
  min-height: 70vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Mensagem = styled.section`
  width: 80%;
  height: 50vh;
  background-color: ${cores.fundoAzulClaro};
  text-align: center;
  padding: 2%;
  border-radius: 5px;
  h1 {
    font-weight: bold;
  }
  p{
    font-size: 20px;
    margin-bottom: 10%;
  }
`;
