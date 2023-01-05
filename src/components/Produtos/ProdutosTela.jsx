import Card from "../Card/Card";
import { ProdutosContainer } from "./ProdutosStyled";

export default function ProdutosTela({
  produtos,
  addItemCarrinho,
  estaNoCarrinho,
  removeItemCarrinho,
  valorMin,
  valorMax,
  buscarNome,
  ordenar
}) {




  return (
    <ProdutosContainer>
      {produtos.sort(ordenar).filter((produto) => {
        return produto.value >= valorMin;
      })
        .filter((produto) => {
          if (valorMax) {
            return produto.value <= valorMax;
          }else{
            return produto.value
          }


        }).filter((produto) => {
          return produto.name.toUpperCase().includes(buscarNome.toUpperCase())
        }).map((produto) => {
          return (
            <Card
              key={produto.id}
              removeItemCarrinho={removeItemCarrinho}
              estaNoCarrinho={estaNoCarrinho}
              produto={produto}
              addItemCarrinho={addItemCarrinho}
            />
          );
        })}
    </ProdutosContainer>
  );
}
