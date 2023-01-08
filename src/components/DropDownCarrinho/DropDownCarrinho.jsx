import React, { useState } from "react";
import {
  ListItem,
  DropDownList,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  Span,
  HeaderDropdownInicial,
  FooterDropdownInicial,
  FooterDropdownButton,
} from "./DropDownCarrinhoStyled.js";
import { FaShoppingCart, FaAngleUp, FaAngleDown } from "react-icons/fa";
import { FormatMoney, TransicaoDeTelas } from "../../util/util.js";

export default function DropDownCarrinho({sacolaDeCopras,setTela, finalizarCompra }) {

  const {carrinho,totalCarrinho,removeItemCarrinho} = sacolaDeCopras

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);


  const headerDrop = (
    <HeaderDropdownInicial>
      <Span>
        <FaShoppingCart />
      </Span>
      <ul>
        <li>
          <small>MEU CARRINHO</small>
        </li>
        <li>
          <strong> {carrinho.length} produto(s)</strong>
        </li>
      </ul>
    </HeaderDropdownInicial>
  );


  const dropBoby = (
    <>
      <DropDownListContainer>

        <DropDownList>
          {carrinho.map((item) => (
            <ListItem key={item.id}>
              <div>
                <h6>
                  <strong>{item.nome}</strong>
                </h6>
                <p>
                  <strong>Quantidade:</strong> {item.quant}
                </p>
                <p>
                  <strong>Total:</strong> {FormatMoney(item.valorTotal)}
                </p>
              </div>

              <input
                type="button"
                className="btn btn-outline-danger"
                value="Excluir"
                onClick={() => removeItemCarrinho(item.id)}
              />
            </ListItem>
          ))}
        </DropDownList>
      </DropDownListContainer>
      <FooterDropdownInicial>
        <p>
          <strong>Valor a pagar:</strong> {FormatMoney(totalCarrinho(carrinho))}
        </p>
        <FooterDropdownButton>
          <input
            type="button"
            className="btn btn-success"
            value="Finalizar Compra"
            onClick={() => finalizarCompra()}
          />
          <input
            type="button"
            className="btn btn-success"
            value="Ir para o Carrinho"
            onClick={() => setTela(TransicaoDeTelas.telaCarrinho)}
          />
        </FooterDropdownButton>

      </FooterDropdownInicial>
    </>
  )

  const dropBodyVazio = (
    <>
      <DropDownListContainer>

        <DropDownList>
          <ListItem>
            <div>
              <h3>
                <strong>Carrinho Vazio</strong>
              </h3>
            </div>
          </ListItem>
        </DropDownList>
      </DropDownListContainer>
    </>
  )

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling} primary={isOpen}>
        {headerDrop}
        {isOpen ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
      </DropDownHeader>
      {isOpen && (
        <>
          {
            carrinho.length >= 1
              ? dropBoby
              : dropBodyVazio
          }
        </>

      )}
    </DropDownContainer>

  );
}
