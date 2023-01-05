import { MainStyled } from "./MainStyled";
import ProdutosTela from "../Produtos/ProdutosTela";

export default function Main({
  produtos,
  estaNoCarrinho,
  removeItemCarrinho,
  valorMin,
  valorMax,
  addItemCarrinho,
  
  buscarNome,
  ordenar,
}) {
  return (
    <MainStyled>
      <ProdutosTela
        produtos={produtos}
        addItemCarrinho={addItemCarrinho}
        estaNoCarrinho={estaNoCarrinho}
        removeItemCarrinho={removeItemCarrinho}
        valorMin={valorMin}
        valorMax={valorMax}
        buscarNome={buscarNome}
        ordenar={ordenar}
      />
    </MainStyled>
  );
}
