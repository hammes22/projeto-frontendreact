import { FiltroContainer, InputFiltro, InputGroup, LabelFiltro, SelectFiltro } from "./FiltrosStyled";

export default function Filtros({
    setValorMin,
    setValorMax,
    setBuscarNome,
    ordem,
    setOrdem,
}) {

    const options = [
        { value: "limpar", label: "Ordenar" },
        { value: "crescente", label: "Crescente" },
        { value: "decrescente", label: "decrescente" }
    ];

    function onChangeMaior(e) {
        setValorMax(e.target.value.replace(",", "."))
    }
    return (
        <FiltroContainer>


            <InputGroup>
                <LabelFiltro htmlFor="ValorMin">
                    Valor Mínimo:
                    <InputFiltro type="number"
                        className="form-control"
                        id="ValorMin"
                        placeholder="R$ 0,99"
                        onChange={(e) => { setValorMin(e.target.value.replace(",", ".")) }}

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
                        onChange={(e) => { onChangeMaior(e) }}
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
                        onChange={(e) => { setBuscarNome(e.target.value) }}
                    />
                </LabelFiltro>
            </InputGroup>
            <InputGroup>
                <LabelFiltro htmlFor="ordem">
                    Ordenação:
                    <SelectFiltro id="ordem" value={ordem} onChange={(e) => { setOrdem(e.target.value) }}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </SelectFiltro>
                </LabelFiltro>
            </InputGroup>


        </FiltroContainer>
    )
}