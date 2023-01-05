import styled from "styled-components";

export const FiltroContainer = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const LabelFiltro = styled.label.attrs({ className: "form-label" })``;

export const InputFiltro = styled.input.attrs({ className: "form-control" })`

`;


export const SelectFiltro = styled.select.attrs({className: "form-select"})`
`
