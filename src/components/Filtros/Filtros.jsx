import { FiltroContainer, InputButton, InputFiltro, InputGroup, InputGroupButton, LabelFiltro } from "./FiltrosStyled";

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
                        value={filtro.valorMin}
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
                        value={filtro.valorMax}
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
                        value={filtro.nome}
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

            <input
                type="button"
                className="btn btn-success"
                id="BuscarNome"
                placeholder="Camiseta Planeta"
                value="Limpar filtros"
                onClick={(e) => { filtro.limparFiltro() }}
            />




        </FiltroContainer>
    )
}