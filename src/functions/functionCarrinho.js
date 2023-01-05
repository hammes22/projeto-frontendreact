export const totalCarrinho = (itensCarrinho) => {
    let soma = 0;
    itensCarrinho.map((item) => (soma += item.value));
    return soma;
};