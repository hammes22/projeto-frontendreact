// import { totalCarrinho } from "../../functions/functionCarrinho";
import { FormatMoney, TransicaoDeTelas } from "../../util/util";
import { CarrinhoContainer, Tabela, ThDescri, Th20,TotalContainer} from "./CarrinhoStyled";
import QuantItem from "../QuantItem/QuantItem";
import { useEffect } from "react"
export default function Carrinho({ sacolaDeCopras, setTela, finalizarCompra }) {


    const {carrinho, editQuantCarrinho, removeItemCarrinho,totalCarrinho} = sacolaDeCopras

    useEffect(() => {
        if (!carrinho.length) {
            setTela(TransicaoDeTelas.telaInicial)
        }
    }, [carrinho])



    return (
        <CarrinhoContainer>
            <Tabela>
                <thead>
                    <tr className="table-dark center">
                        <ThDescri>Descrição</ThDescri>
                        <Th20>Quantidade</Th20>
                        <Th20>Preço unitário</Th20>
                        <Th20>Total</Th20>
                        <Th20></Th20>
                    </tr>
                </thead>
                <tbody >
                    {carrinho.map(
                        (item) => {
                            return (
                                <tr key={item.id}>
                                    <ThDescri>{item.nome}</ThDescri>
                                    <Th20>
                                        <QuantItem editQuantCarrinho={editQuantCarrinho}  quantItem={item.quant} id={item.id} />
                                    </Th20>
                                    <Th20>{FormatMoney(item.valorUnitario)}</Th20>
                                    <Th20>{FormatMoney(item.valorTotal)}</Th20>
                                    <Th20>
                                        <input
                                            type="button"
                                            className="btn btn-outline-danger"
                                            value="Excluir"
                                            onClick={() => removeItemCarrinho(item.id)}
                                        />
                                    </Th20>
                                </tr>
                            )
                        }
                    )}
                </tbody>

            </Tabela>
            <TotalContainer>
             
                <h2>Total: {FormatMoney(totalCarrinho())}</h2>
                <input
                    type="button"
                    className="btn btn-success"
                    value="Finalizar Compra"
                    onClick={() => finalizarCompra()}
                />
              
            </TotalContainer>
        </CarrinhoContainer>

    )

}