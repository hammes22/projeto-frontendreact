# projeto-frontendreact

Esse é o projeto de introdução aos fundamentos do React. Aqui, vamos praticar a estrutura do que consideramos a estrutura do React. O objetivo é que funcione como o front-end de um E-Commerce

- JSX
- Componentes
- Props
- Estado
- Fluxo de dados no React
- Renderização de listas
- Renderização condicional
- localStorage

# Requisitos

O projeto consistirá em 3 grandes partes:

1. Home
   - Mostrando todos os produtos
   - Deve haver alguma forma de ordenar os produtos por ordem crescente ou decrescente de preço (pode ser na home em si ou junto dos filtros)
   - Produtos:
     - Devem ter um botão que permita adicioná-los ao carrinho
     - Devem exibir o nome, preço e imagem em um card
2. Carrinho
   - Mostrar todos os produtos e quantidades adicionadas
   - Capacidade de remover itens do carrinho
   - Mostrar o valor total do carrinho
3. Filtro
   - Por valor mínimo e máximo
   - Por nome do produto

Exemplo de estruturação de **UM** produto (Lembrem-se que vocês terão uma lista contendo todos):

```jsx
{
	id: 1,
	name: "Foguete da Missão Apollo 11",
	value: 10000.0,
	imageUrl: "https://picsum.photos/200/200",
}
```

### Lista de Requisitos

- Home (Lista de Produtos)
  - [ ] O usuário deve ser capaz de visualizar uma lista de produtos
  - [ ] O usuário deve ser capaz de visualizar os dados do produto (nome, preço e imagem)
  - [ ] O usuário deve ser capaz de adicionar um produto no carrinho
- Carrinho
  - [ ] O usuário deve ser capaz de visualizar os produtos adicionados
  - [ ] O usuário deve ser capaz de visualizar a quantidade correta de cada produto
  - [ ] O usuário deve ser capaz de remover itens do carrinho
  - [ ] O usuário deve ser capaz de ver corretamente o valor total de sua compra
  - [ ] Quando a página é atualizada, os itens devem continuar no carrinho
- Filtros e Ordenação
  - [ ] O usuário deve ser capaz de filtrar os itens por preço mínimo
  - [ ] O usuário deve ser capaz de filtrar os itens por preço máximo
  - [ ] O usuário deve ser capaz de realizar uma busca por nome
  - [ ] O usuário deve ser capaz de ordenar os itens em ordem crescente ou decrescente
  - [ ] O usuário deve ser capaz de adicionar filtros, busca e ordenação simultaneamente
  - [ ] O usuário deve ser capaz de retornar à visualização sem filtros

###

### Funcionalidades extras

- Tela carrinho de compras
  - Criei uma tela para exibir os itens que estão no carrinho, ela tem a capacidade
    remover, aumentar ou subtrair a quantidade do item que esta no carrinho.
- Tela compra finalizada
  - Essa tela e ativada logo após clicar no botão finalizar compra, ao chegar nela
    o carrinho de compras e o localStorage são limpos emulando assim uma compra finalizada.
- Adicionei hooks personalizados no sistema

###

### Endereço do deploy Surge

- https://projeto-react-bruno-hammes.surge.sh/
###