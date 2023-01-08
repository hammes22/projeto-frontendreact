import { useState, useEffect } from "react";
import produtosJson from "../produtos/produtos.json";
export function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    setProdutos(produtosJson);
  }, []);
  return produtos;
}
