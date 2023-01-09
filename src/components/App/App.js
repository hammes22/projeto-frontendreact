import GlobalStyle from "../../globalStyles/GlobalStyles";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { AppContainer } from "./AppStyled";
import { useState} from "react";
import Carrinho from "../carrinho/carrinho";
import { TransicaoDeTelas } from "../../util/util";
import FinalizarCompra from "../FinalizarCompra/FinalizarCompra";
import { useProdutos } from "../../hooks/useProdutos";
import { useOrdenar } from "../../hooks/useOrdenar";
import { useFiltros } from "../../hooks/useFiltros";
import { useCarrinho } from '../../hooks/useCarrinho';

function App() {
  const [tela, setTela] = useState(TransicaoDeTelas.telaInicial);
  const sacolaDeCopras = useCarrinho()
  const produtos = useProdutos();
  const filtro = useFiltros();
  const { ordenar, receberOrdem } = useOrdenar();

  const finalizarCompra = () => {
   sacolaDeCopras.limparCarrinho()
    setTela(TransicaoDeTelas.telaFinalizada);
  };


  function telaInical() {
    return (
      <>
        <Main
          produtos={produtos}
          ordenar={ordenar}
          filtro={filtro}
          sacolaDeCopras={sacolaDeCopras}
        />
      </>
    );
  }

  function telaCarrinho() {
    return (
      <>
        <Carrinho
          sacolaDeCopras={sacolaDeCopras}
          finalizarCompra={finalizarCompra}
          setTela={setTela}
        />
      </>
    );
  }

  function telaCompraFinalizada() {
    return (
      <>
        <FinalizarCompra setTela={setTela} />
      </>
    );
  }

  function telas() {
    switch (tela) {
      case TransicaoDeTelas.telaInicial:
        return telaInical();
      case TransicaoDeTelas.telaCarrinho:
        return telaCarrinho();
      case TransicaoDeTelas.telaFinalizada:
        return telaCompraFinalizada();
      default:
        return telaInical();
    }
  }

  return (
    <AppContainer>
      <GlobalStyle />
      <Header
        sacolaDeCopras={sacolaDeCopras}
        filtro={filtro}
        tela={tela}
        setTela={setTela}
        finalizarCompra={finalizarCompra}
        receberOrdem={receberOrdem}
      />
      {telas()}
      <Footer />
    </AppContainer>
  );
}

export default App;
