import Imagem from "../Imagem/Imagem";
import {
  AddCart,
  Button,
  CardBody,
  CardContainer,
  CardText,
  CardTitleH5,
  InputGroup,
} from "./CardStyled";
import { FormatMoney } from "../../util/util";
import { React, useState } from "react";
import QuantItem from "../QuantItem/QuantItem";
export default function Card({
  produto,
  addItemCarrinho,
  estaNoCarrinho,
  removeItemCarrinho,
}) {
  const [quant, setQuant] = useState(1);

  const AddItem = () => {
    let totalItem = quant * produto.value;
    const item = {
      id: produto.id,
      nome: produto.name,
      value: totalItem,
      quant: quant,
      valueUnitario: produto.value
    };
    addItemCarrinho(item);
  };

  let noCarrinho = estaNoCarrinho(produto.id);

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
        {noCarrinho ? (
          <>
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
        ) : (
          <AddCart>
            <QuantItem quantItem={quant} setQuantItem={setQuant}/>
            <Button>
              <input
                type="button"
                value="Adicionar ao carrinho"
                className="btn btn-primary"
                onClick={AddItem}
              />
            </Button>
          </AddCart>
        )}
      </CardBody>
    </CardContainer>
  );
}
