import { MainStyled } from "./MainStyled";
import ProdutosTela from "../Produtos/ProdutosTela";

export default function Main({
  produtos,
  filtro,
  ordenar,
  sacolaDeCopras
}) {
  return (
    <MainStyled>
      <ProdutosTela
        filtro={filtro}
        produtos={produtos}
        ordenar={ordenar}
        sacolaDeCopras={sacolaDeCopras}
      />
    </MainStyled>
  );
}
