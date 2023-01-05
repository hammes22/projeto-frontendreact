import styled from "styled-components";

export const CarrinhoContainer = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* margin: 1vh 10vw; */
`;

export const Tabela = styled.table.attrs({
  className: "table table-striped table-bordered",
})`
  margin-top: 2vh;
  vertical-align: middle;
  max-width: 80%;
`;

export const Th20 = styled.th`
  text-align: center;
  width: 20%;
`;
export const ThDescri = styled.th`
  width: 40%;
`;
export const Button = styled.div.attrs({ className: "d-grid" })`
  width: 100%;
  margin-top: 10px;
`;

export const TotalContainer = styled.div.attrs({
  className: "alert alert-info",
})`
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
