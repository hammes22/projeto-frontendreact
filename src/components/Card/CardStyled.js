import styled from "styled-components";
import { cores } from "../../util/cores";

export const CardContainer = styled.section.attrs({
  className: "card",
})`
  width: 14rem;
  min-height: 20rem;
  margin: 15px;
  padding: 10px;
  align-items: center;
  text-align: center;
  border-radius: 8px;

  box-shadow: ${cores.boxShadow} !important;
  transition: all 0.15s ease;
  :hover {
    box-shadow: ${cores.boxShadowHover} !important;
  }
  img {
    height: 100px;
  }
`;
export const CardBody = styled.div.attrs({ className: "card-body" })`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitleH5 = styled.h5.attrs({ className: "card-title" })``;

export const CardText = styled.p.attrs({ className: "card-text" })``;

export const AddCart = styled.section`
  /* width: 100%; */
`;
export const Button = styled.div.attrs({ className: "d-grid" })`
  width: 100%;
  margin-top: 10px;
`;
