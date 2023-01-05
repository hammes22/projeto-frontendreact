import styled from "styled-components";

// export const InputGroup = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
// `;

export const ButtonSuccess = styled.button.attrs({
  className: "btn btn-outline-success",
})`

`;

export const ButtonDanger = styled.button.attrs({
  className: "btn btn-outline-danger",
})`

`;
export const InputGroup = styled.div.attrs({ className: "input-group" })`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
    text-align: center;
  }
  input[type="button"] {
    width: 30%;

    font-weight: bold;
    font-size: 20px;
  }
`;