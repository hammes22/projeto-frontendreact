import GlobalStyle from "../../globalStyles/GlobalStyles";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { AppContainer } from "./AppStyled";
import produtos from "../../produtos/produtos.json";
import { useState, useEffect } from "react";
import Carrinho from "../carrinho/carrinho";
import { TransicaoDeTelas } from "../../util/util";
import FinalizarCompra from "../FinalizarCompra/FinalizarCompra";

function App() {
  const localStorangeKey = "carrinho";
  const [tela, setTela] = useState(TransicaoDeTelas.telaInicial);
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [buscarNome, setBuscarNome] = useState("");
  const [ordem, setOrdem] = useState("");

  function crescente(a, b) {
    if (a.value < b.value) return -1;
    if (a.value > b.value) return 1;
    return 0;
  }

  function decrescente(a, b) {
    if (a.value > b.value) return -1;
    if (a.value < b.value) return 1;
    return 0;
  }
  function ordenarId(a, b) {
    return a.id - b.id;
  }

  function ordenar(a, b) {
    switch (ordem) {
      case "crescente":
        return crescente(a, b);
      case "decrescente":
        return decrescente(a, b);
      default:
        return ordenarId(a, b);
    }
  }

  const removeItemCarrinho = (idItem) => {
    let novoCarrinho = itensCarrinho.filter((itemCarrinho) => {
      return itemCarrinho.id !== idItem;
    });
    setItensCarrinho(novoCarrinho);
    if (novoCarrinho.length === 0) {
      localStorage.removeItem(localStorangeKey);
    }
  };

  const finalizarCompra = () => {
    setItensCarrinho([]);
    localStorage.removeItem(localStorangeKey);
    setTela(TransicaoDeTelas.telaFinalizada)
  };

  const addItemCarrinho = (item) => {
    for (const itemCarrinho of itensCarrinho) {
      if (itemCarrinho.id === item.id) {
        item.quant += itemCarrinho.quant;
        item.value += itemCarrinho.value;
      }
    }

    let novoCarrinho = itensCarrinho.filter((itemCarrinho) => {
      return itemCarrinho.id !== item.id;
    });
    novoCarrinho.unshift(item);
    setItensCarrinho(novoCarrinho);
  };

  const editQuantCarrinho = (idItem, quantItem) => {
    if (quantItem <= 0) {
      removeItemCarrinho(idItem);
    }
    setItensCarrinho((itens) => {
      return [
        ...itens.map((item) => {
          if (item.id === idItem) {
            return {
              ...item,
              quant: quantItem,
              value: quantItem * item.valueUnitario,
            };
          }
          return item;
        }),
      ];
    });
  };

  const estaNoCarrinho = (produtoId) => {
    let itemNoCarrinho = false;
    for (const itemCarrinho of itensCarrinho) {
      if (itemCarrinho.id === produtoId) {
        itemNoCarrinho = true;
      }
    }
    return itemNoCarrinho;
  };

  function salvarCarrinho() {
    if (itensCarrinho.length > 0) {
      localStorage.setItem(localStorangeKey, JSON.stringify(itensCarrinho));
    }
  }

  function carregarCarrinho() {
    const itens = JSON.parse(localStorage.getItem(localStorangeKey));
    if (itens) {
      setItensCarrinho(itens);
    } else {
      setItensCarrinho([]);
    }
  }

  useEffect(() => {
    carregarCarrinho();
  }, []);

  useEffect(() => {
    salvarCarrinho();
  }, [itensCarrinho]);

  useEffect(() => {
    console.log(tela);
  }, [tela]);

  function telaInical() {
    return (
      <>
        <Main
          produtos={produtos}
          estaNoCarrinho={estaNoCarrinho}
          removeItemCarrinho={removeItemCarrinho}
          valorMin={valorMin}
          valorMax={valorMax}
          addItemCarrinho={addItemCarrinho}
          buscarNome={buscarNome}
          ordenar={ordenar}
        />
      </>
    );
  }

  function telaCarrinho() {
    return (
      <>
        <Carrinho
          itensCarrinho={itensCarrinho}
          editQuantCarrinho={editQuantCarrinho}
          removeItemCarrinho={removeItemCarrinho}
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
        itensCarrinho={itensCarrinho}
        removeItemCarrinho={removeItemCarrinho}
        produtos={produtos}
        setValorMin={setValorMin}
        setValorMax={setValorMax}
        setBuscarNome={setBuscarNome}
        ordem={ordem}
        setOrdem={setOrdem}
        tela={tela}
        setTela={setTela}
        finalizarCompra={finalizarCompra}
      />
      {telas()}
      <Footer />
    </AppContainer>
  );
}

export default App;
