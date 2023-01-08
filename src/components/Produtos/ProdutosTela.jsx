import Card from "../Card/Card";
import { ProdutosContainer } from "./ProdutosStyled";
import { useCarrinho } from '../../hooks/useCarrinho';

export default function ProdutosTela({
  produtos,
  ordenar,
  filtro,
  sacolaDeCopras
}) {




  return (
    <ProdutosContainer>
      {produtos.sort(ordenar).filter((produto) => {
        return filtro.filtrarPorValorMin(produto.value)
      })
        .filter((produto) => {
          return filtro.filtrarPorValorMax(produto.value)
        }).filter((produto) => {
          return filtro.filtrarPorNome(produto.name)
        }).map((produto) => {
          return (
            <Card
              key={produto.id}
              produto={produto}
              sacolaDeCopras={sacolaDeCopras}
            />
          );
        })}
    </ProdutosContainer>
  );
}
