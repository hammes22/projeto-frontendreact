export function FormatMoney(num) {
  return Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(num);
}

export const TransicaoDeTelas = {
  telaInicial: "Tela inicial",
  telaCarrinho: "Tela Carrinho",
  telaFinalizada: "Tela finalizar"
}




