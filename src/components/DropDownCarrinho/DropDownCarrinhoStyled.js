import styled, { css } from "styled-components";
import { cores } from "../../util/cores";

export const DropDownContainer = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 100;
`;

export const DropDownHeader = styled.div`
  ${(props) =>
    !props.primary &&
    css`
      background-color: ${cores.verde};
      color: white;
      border-radius: 5px;
      border-radius: 5px 5px 0 0;
    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: white;
      color: ${cores.verde};
      padding: 0;
      border-radius: 5px 5px 0 0;
    `} 
   
  z-index: 9;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: ${cores.boxShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropDownListContainer = styled.div`
  border: 1px solid ${cores.bordaCinza};

  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  ul {
    list-style: none !important;
  }
`;

export const DropDownList = styled.ul`
  width: 100%;
  padding: 0;
  font-size: 1.3rem;
  font-weight: 500;
  border: ${cores.bordaCinza};
  list-style: none !important;
  max-height: 50vh;
  overflow-x: auto;
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 10px;
  border-top: 1px solid ${cores.bordaCinza};
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;

  p {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  color: ${cores.verde};
  h6 {
    font-size: 16px;
    padding: 0;
    margin: 1;
  }

  div {
    width: 60%;
    padding: 0;
    margin: 0;
  }
`;

export const Span = styled.span`
  float: left;
  margin-right: 5px;
  font-size: 30px;
`;

export const HeaderDropdownInicial = styled.header`
  align-items: center;
  border-radius: 5px;

  ul {
    list-style-type: none;
    margin: 0 10px;
  }
`;

export const FooterDropdownInicial = styled.footer`
  color: black;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${cores.fundoCinzaEscuro};
  border: 1px solid ${cores.bordaCinza};
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 5px 5px;
`;

export const FooterDropdownButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
