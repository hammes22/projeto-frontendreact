import Imagem from "../Imagem/Imagem";
import {
  AddCart,
  Button,
  CardBody,
  CardContainer,
  CardText,
  CardTitleH5,
} from "./CardStyled";
import { FormatMoney } from "../../util/util";
import React, { useState } from "react";
import QuantItem from "../QuantItem/QuantItem";
export default function Card({
  produto,
  sacolaDeCopras
}) {

  const [quantidade, setQuantidade] = useState("")

  const { criarAddItemCarrinho, removeItemCarrinho, estaNoCarrinho } = sacolaDeCopras


  function inserirQuantCarrinho() {
    if (estaNoCarrinho(produto.id)) {
      return <>
        <CardText className="text-success">Item no carrinho</CardText>
        <Button>
          <input
            type="button"
            value="Remover do carrinho"
            className="btn btn-primary"
            onClick={() => removeItemCarrinho(produto.id)}
          />
        </Button>
      </>

    } else {
      return <AddCart>
        <QuantItem setQuantidade={setQuantidade} quantidade={quantidade} />
        <Button>
          <input
            type="button"
            value="Adicionar ao carrinho"
            className="btn btn-primary"
            onClick={() => { criarAddItemCarrinho(produto, quantidade) }}
          />
        </Button>
      </AddCart>
    }


  }

  return (
    <CardContainer>
      <Imagem
        img={produto.imageUrl}
        alt={produto.name}
        classImg={"card-img-top"}
      />
      <CardBody>
        <CardTitleH5>{produto.name}</CardTitleH5>
        <CardText>{FormatMoney(produto.value)}</CardText>
        {inserirQuantCarrinho()}
      </CardBody>
    </CardContainer>
  );
}
