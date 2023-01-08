import { FiltroContainer, InputFiltro, InputGroup, LabelFiltro } from "./FiltrosStyled";

export default function Filtros({
    filtro,
    receberOrdem
}) {
    return (
        <FiltroContainer>
            <InputGroup>
                <LabelFiltro htmlFor="ValorMin">
                    Valor Mínimo:
                    <InputFiltro type="number"
                        className="form-control"
                        id="ValorMin"
                        placeholder="R$ 0,99"
                        onChange={(e) => { filtro.receberValorMin(e) }}

                    />
                </LabelFiltro>
            </InputGroup>

            <InputGroup>
                <LabelFiltro htmlFor="ValorMax">
                    Valor máximo:
                    <InputFiltro type="number"
                        className="form-control"
                        id="ValorMax"
                        placeholder="R$ 100,00"
                        onChange={(e) => { filtro.receberValorMax(e) }}
                    />
                </LabelFiltro>
            </InputGroup>
            <InputGroup>
                <LabelFiltro htmlFor="BuscarNome">
                    Buscar por nome:
                    <InputFiltro
                        type="text"
                        className="form-control"
                        id="BuscarNome"
                        placeholder="Camiseta Planeta"
                        onChange={(e) => { filtro.receberNome(e) }}
                    />
                </LabelFiltro>
            </InputGroup>
            <InputGroup>
                <LabelFiltro htmlFor="ordem">
                    Ordenar por preço:
                    {receberOrdem()}
                </LabelFiltro>
            </InputGroup>


        </FiltroContainer>
    )
}