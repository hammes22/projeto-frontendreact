import { TransicaoDeTelas } from "../../util/util";
import { FinalizarCompraContainer, Mensagem } from "./FinalizarCompraStyled";

export default function FinalizarCompra({setTela}) {
    return (
        <FinalizarCompraContainer>
            <Mensagem>
                <h1>Compra Finalizada com sucesso!</h1>
                <p>Em breve você receberá as notificações de acompanhamento do pedido por email.</p>
                <input
                    type="button"
                    className="btn btn-primary"
                    value={"Voltar ao inicio"}
                    onClick={()=>setTela(TransicaoDeTelas.telaInicial)}
                />
            </Mensagem>
        </FinalizarCompraContainer>

    )
}