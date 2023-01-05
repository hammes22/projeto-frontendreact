import { TransicaoDeTelas } from "../../util/util";
import DropDownCarrinho from "../DropDownCarrinho/DropDownCarrinho";
import Filtros from "../Filtros/Filtros";
import { HeaderStyled, HeaderStyledCarrinho, ItemCarrinho, ItemFiltro } from "./HeaderStyled";

const Header = ({
  itensCarrinho,
  removeItemCarrinho,
  filtrarProduto,
  setValorMin,
  setValorMax,
  setBuscarNome,
  ordem,
  setOrdem,
  tela,
  setTela,
  finalizarCompra

}) => {

  function telaHeaderInicial() {
    return (
      <HeaderStyled>
        <ItemFiltro>
          <Filtros
            filtrarProduto={filtrarProduto}
            setValorMin={setValorMin}
            setValorMax={setValorMax}
            setBuscarNome={setBuscarNome}
            ordem={ordem}
            setOrdem={setOrdem}

          />
        </ItemFiltro>
        <ItemCarrinho>
          <DropDownCarrinho
            setTela={setTela}
            itensCarrinho={itensCarrinho}
            removeItemCarrinho={removeItemCarrinho}
            finalizarCompra={finalizarCompra}
          />
        </ItemCarrinho>

      </HeaderStyled>
    )
  }

  function telaHeaderCarrinho() {
    return (
      <HeaderStyledCarrinho>
        <h1>Carrinho</h1>
        <input
          type="button"
          className="btn btn-success"
          value="Voltar ao inicio"
          onClick={() => setTela(TransicaoDeTelas.telaInicial)}
        />
        <input
          type="button"
          className="btn btn-success"
          value="Finalizar Compra"
          onClick={() => finalizarCompra()}
        />

      </HeaderStyledCarrinho>
    )
  }

  function telaHeaderCompraFinalizada() {
    return (
      <HeaderStyledCarrinho>
        <h1> Compra Finalizada </h1>
        <input
          type="button"
          className="btn btn-success"
          value="Nova Compra"
          onClick={() => setTela(TransicaoDeTelas.telaInicial)}
        />
      </HeaderStyledCarrinho>
    )
  }







  function exibirHeader() {
    switch (tela) {
      case TransicaoDeTelas.telaInicial:
        return telaHeaderInicial()
      case TransicaoDeTelas.telaCarrinho:
        return telaHeaderCarrinho()
      case TransicaoDeTelas.telaFinalizada:
        return telaHeaderCompraFinalizada()
      default:
        return telaHeaderInicial()
    }
  }



  return (
    exibirHeader()
  );
};

export default Header;
